<template>
  <div id="page-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Carregar e cadastrar Linhas</h1>
      </div>
      <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading">Importar Arquivo de linhas</div>
          <div class="panel-body">
            <label for="csv_file" class="control-label col-sm-3 text-right">Carregar arquivo CSV</label>
            <div class="col-sm-9">
              <input
                type="file"
                id="csv_file"
                name="csv_file"
                class="form-control"
                @change="loadCSV($event)"
              />
            </div>

            <div class="col-sm-offset-3 col-sm-9">
              <div class="checkbox-inline">
                <label for="header_rows">
                  <!--<input type="checkbox" id="header_rows" /> File contains header row?-->
                </label>
              </div>
            </div>
            <!--tabela-->

            <div class="col-sm-offset-3 col-sm-9">
              <a href="#" class="btn btn-primary" @click="cadastrarLinhas ()">Salvar</a>
            </div>

            <table
              table
              width="100%"
              class="table table-striped table-bordered table-hover"
              id="dataTables-example"
              v-if="parse_csv"
            >
              <thead>
                <tr>
                  <th
                    v-for=" (key,index) in parse_header"
                    :key="index"
                    @click="sortBy(key)"
                    :class="{ active: sortKey == key }"
                  >
                    <!-- {{ key | capitalize }}-->
                    <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(csv,index) in parse_csv" :key="index">
                  <!-- ALTERANDO-->
                  <td v-for="(k,ind) in parse_header" :key="ind"></td>
                  <td>{{listaLinhas[index].blTag}}</td>
                  <td>{{listaLinhas[index].blMaterial}}</td>
                  <td>{{listaLinhas[index].blPendencias}}</td>
                  <td>{{listaLinhas[index].blFluido}}</td>
                  <td>{{listaLinhas[index].blArea}}</td>
                  <td>{{listaLinhas[index].blSite}}</td>
                  <td>{{listaLinhas[index].blBimTag}}</td>
                  <td>{{listaLinhas[index].blMaquete}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
      </div>
      <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
  </div>
  <!-- /#page-wrapper -->
</template>

<script>
import axios from 'axios'
import TabelaLinha from './tabelas/TabelasLin'

export default {
  name: 'Linhas',
  data () {
   return {
      channel_name: '',
      channel_fields: [],
      channel_entries: [],
      parse_header: [],
      parse_csv: [],
      sortOrders:{},
      sortKey: '',
      listaLinhas: [],
      linhas:[]
   
    };
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },

computed:{




},


  methods: {
    sortBy: function (key) {
      var vm = this
      vm.sortKey = key
      vm.sortOrders[key] = vm.sortOrders[key] * -1
    },
    csvJSON(csv){
      var vm = this
      var lines = csv.split("\n")
      var result = []
      var headers = lines[0].split(",")
      vm.parse_header = lines[0].split(",") 
      lines[0].split(",").forEach(function (key) {
        vm.sortOrders[key] = 1
      })
      
      lines.map(function(line, indexLine){
        if (indexLine < 1) return // Jump header line
        
        var obj = {}
        var currentline = line.split(",")
        
        headers.map(function(header, indexHeader){
          obj[header] = currentline[indexHeader]
        })
        
        result.push(obj)
      })
      
      result.pop() // remove the last item because undefined values
      
      return result // JavaScript object
    },
    loadCSV(e) {
      var vm = this
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        // Handle errors load

        reader.onload = function(event) {
          var csv = event.target.result;
          vm.parse_csv = vm.csvJSON(csv)
          //incremento
          vm.splitTosStringArray(vm.parse_csv,';')
        };
        reader.onerror = function(evt) {
          if(evt.target.error.name == "NotReadableError") {
            alert("Arquivo nao pode ser lido !");
          }
        };
      } else {
        alert('FileReader não é suportado nesse browser');
      }
    },

        splitTosString(str,sep){
        var arrayOfStrings = str.split(sep);
        this.linha.blTag= arrayOfStrings[0]
        this.linha.blMaterial = arrayOfStrings[1]
        this.linha.blPendencias = arrayOfStrings[2]
        this.linha.blFluido = arrayOfStrings[3]
        this.linha.blArea = arrayOfStrings[4]
        this.linha.blSite = arrayOfStrings[5]
        this.linha.blBimTag = arrayOfStrings[6]
        this.linha.blMaquete = arrayOfStrings[7] //ARRUMAR FINAL QUE SAI '/r'

        // return linha
    },
           splitTosStringArray(str,sep){
             var vm = this
        for(var i =0;i< str.length;i++){
          var pipe = {
              blTag:'',
              blMaterial:'',
              blPendencias:'',
              blFluido:'',
              blArea:'',
              blSite:'',
              blBimTag:'',
              blMaquete: 0
              }

        var firProp = Object.keys(str[i])[0]
        var arrayOfStrings = str[i][firProp].split(sep)     
        pipe.blTag= vm.deletaComa(arrayOfStrings[0]);
        pipe.blMaterial = arrayOfStrings[1]
        pipe.blPendencias = arrayOfStrings[2]
        pipe.blFluido = arrayOfStrings[3]
        pipe.blArea = arrayOfStrings[4]
        pipe.blSite = arrayOfStrings[5]
        pipe.blBimTag = arrayOfStrings[6]
        pipe.blMaquete = parseInt(arrayOfStrings[7],10)
        vm.setaArrayLinha(pipe)}
        // return linha
    },


    setaArrayLinha(pipe){
      var vm = this
      vm.listaLinhas.push(pipe)
},

          cadastrarLinhas () {
      axios.post('/linha/pippings', 
          
          {
            
          linhas:this.listaLinhas 


          })
        .then(res => {
        //    this.$router.push('/')
          alert('Cadastrado com sucesso!')
  
        })
        .catch(error => console.log(error.response))
    } ,

    deletaComa: function(st){
      if(st[2]=='"'){
         var coma = st[2].concat(st[3])
         var str =  st.replace(coma,st[3])
         var n = str.length
         str = str.substring(0,n)
         return str.substring(n,1)

         
         }else if(st[3]=='"'){
        var coma = st[2].concat(st[3])
         var str = st.replace(coma,st[2])
         var n = str.length
         str = str.substring(0,n)
         return str.substring(n,1)
         }
         var n = st.length
         return st.substring(1,n)
         
         }
  },
  components:{
    'tabela-linhas':TabelaLinha
  }

  
}

 


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
