<template>
  <div id="page-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Cadastro de Projetos</h1>
      </div>
      <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading">Formulario</div>
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-6">
                <form role="form">
                  <form role="form">
                    <div class="form-group">
                      <label>Buscar Projeto:</label>
                      <input
                        class="form-control"
                        v-model="buscador"
                        @input="buscador = $event.target.value.toUpperCase()"
                        placeholder="busca..."
                      />
                    </div>
                    <button class="btn btn-sucess" type="button" @click="buscarMaquete">BUSCAR</button>
                  </form>

                  <div class="form-group">
                    <label>Numero do Projeto:</label>
                    <input class="form-control" v-model="projetoNumero" placeholder="Enter text" />
                    <p class="help-block">Example block-level help text here.</p>
                  </div>
                  <div class="form-group">
                    <label>Nome:</label>
                    <input
                      class="form-control"
                      v-model="projetoNome"
                      @input="projetoNome = $event.target.value.toUpperCase()"
                      placeholder="Enter text"
                    />
                  </div>
                  <div class="form-group">
                    <label>Cliente:</label>
                    <input
                      class="form-control"
                      v-model="projetoCliente"
                      @input="projetoCliente = $event.target.value.toUpperCase()"
                      placeholder="Enter text"
                    />
                  </div>
                  <div class="form-group">
                    <label>Local da Obra:</label>
                    <input
                      class="form-control"
                      v-model="projetoLocal"
                      @input="projetoLocal = $event.target.value.toUpperCase()"
                      placeholder="Enter text"
                    />
                  </div>
                  <div class="form-group">
                    <label>Descrição:</label>
                    <input
                      class="form-control"
                      v-model="projetoDescricao"
                      @input="projetoDescricao = $event.target.value.toUpperCase()"
                      placeholder="Enter text"
                    />
                  </div>
                  <div class="form-group">
                    <label>Data de inicio:</label>
                    <input class="form-control" v-model="dataProjeto" placeholder="AAAA/MM/DD" />
                  </div>
                  <button class="btn btn-sucess" type="submit" @click="cadastrarMaquete">SALVAR</button>
                  <button class="btn btn-sucess" type="button" @click="updateMaquete">ATUALIZAR</button>
                  <button class="btn btn-sucess" type="button" @click="deletarMaquete">DELETAR</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

import axios from 'axios'
import moment, { utc } from 'moment';

export default {
  name: 'FormsMaquete',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
          projetoNumero:'',
          projetoNome:'',
          projetoCliente:'',
          projetoLocal:'',
          projetoDescricao:'',
          dataProjeto:'',
          buscador:'',
          test:''

      
    }
  },
  methods: {


    buscarMaquete(){
        axios.get('/maquete/buscarprojeto',{
          params:{buscar: this.buscador}
        }).then(res =>{
          console.log(res)
          this.projetoNumero = res.data.projetoNumero
          this.projetoNome = res.data.projetoNome
          this.projetoCliente = res.data.projetoLocal
          this.projetoLocal = res.data.projetoLocal
          this.projetoDescricao = res.data.projetoDescricao
          this.dataProjeto = this.formatoDeDatas(res.data.dataProjeto)
          

        
        }

      )
      .catch(error => console.log(error.response))}
      ,

        cadastrarMaquete () {
      axios.post('/maquete/savemaquete', 
          {
            projetoNumero: this.projetoNumero,
            projetoNome: this.projetoNome,
            projetoCliente: this.projetoCliente,
            projetoLocal:this.projetoLocal,
            projetoDescricao:this.projetoDescricao,
            dataProjeto:this.dataProjeto,


             headers: { Accept: 'application/json' }

          })
        .then(res => {
        //    this.$router.push('/')
  
        })
        .catch(error => console.log(error.response))
    },

    updateMaquete(){
            axios.post('/maquete/updatemaquete', 
                      {
                            projetoNumero: this.projetoNumero,
                            projetoNome: this.projetoNome,
                            projetoCliente: this.projetoCliente,
                            projetoLocal:this.projetoLocal,
                            projetoDescricao:this.projetoDescricao,
                            dataProjeto:this.momentoData(this.dataProjeto)

                      })
                    .then(res => {
                    //    this.$router.push('/')
                    alert(res)
                    })
                    .catch(error => console.log(error.response))
                } ,



                 deletarMaquete () {
      axios.post('/maquete/deltmaque', 
          {
            projetoNumero: this.projetoNumero,
            projetoNome: this.projetoNome,
            projetoCliente: this.projetoCliente,
            projetoLocal:this.projetoLocal,
            projetoDescricao:this.projetoDescricao,
            dataProjeto:this.momentoData(this.dataProjeto)
          })
        .then(res => {
        //    this.$router.push('/')
  
        })
        .catch(error => console.log(error.response))
    },


    
    formatoDeDatas: function (desData) {
      return moment.utc(desData).format("DD/MM/YYYY")
      //  var dataDes = new Date(desData)
      //  var strData = ''
      //  return strData.concat(dataDes.getDate(),'/',dataDes.getMonth(),'/',dataDes.getFullYear())
    },

    momentoData: function(maqData){
      var dtc = maqData.split('/')
      var str = ''
      str = str.concat(dtc[2],'-',dtc[1],'-',dtc[0])
      return str
    }

}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
