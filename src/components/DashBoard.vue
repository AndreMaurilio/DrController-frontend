<template>
  <div id="page-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">DESENHOS</h1>
      </div>
      <!-- /.col-lg-12 -->
    </div>
    <!--COMBOBOX-->
    <div class="dropdown">
      <label for="projeto">Projeto</label>
      <select
        class="form-contrl"
        name="projeto"
        id="projeto"
        style="width: 400px"
        v-model="nProj"
        @change="atualizaProjSelec()"
      >
        <option :value="-1" disable selected>Selecionar Projeto</option>
        <option
          v-for="option in getMaquetes"
          :key="option.numProj"
          v-bind:value="option.numProj"
        >{{option.nomProj}} N°{{option.numProj}}</option>
      </select>
    </div>

    <!-- CALENDARIO-->
    <div class="pull-left">
      <date-picker
        v-model="mydatein"
        lang="pt-br"
        type="text"
        format="YYYY-MM-DD"
        placeholder="Selecione a data"
      ></date-picker>até:
      <date-picker
        v-model="mydateout"
        lang="pt-br"
        type="text"
        format="YYYY-MM-DD"
        placeholder="Selecione a data"
      ></date-picker>
      <button
        class="btn btn-info"
        style="margin-right: 10px"
        type="submit"
        @click="contagemPorData()"
      >Buscar</button>
    </div>
    <p class="month-refer">Referência: {{indicaBusca(mes,verdFalse)}}</p>

    <!-- /.row -->
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="panel panel-green">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xs-3">
                <i class="fa fa-tasks fa-5x"></i>
              </div>
              <div class="col-xs-9 text-right">
                <div class="huge">{{total.emitido}}</div>
                <div>Emitidos</div>
              </div>
            </div>
          </div>
          <a href="#">
            <div class="panel-footer">
              <span class="pull-left" @click="checkData(mydatein,0)">Ver Detalhes</span>
              <span class="pull-right">
                <i class="fa fa-arrow-circle-right"></i>
              </span>
              <div class="clearfix"></div>
            </div>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="panel panel-yellow">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xs-3">
                <i class="fa fa-table fa-5x"></i>
              </div>
              <div class="col-xs-9 text-right">
                <div class="huge">{{total.verificando}}</div>
                <div>Em Verificação</div>
              </div>
            </div>
          </div>
          <a href="#">
            <div class="panel-footer">
              <span class="pull-left" @click="checkData(mydatein,1)">Ver Detalhes</span>
              <span class="pull-right">
                <i class="fa fa-arrow-circle-right"></i>
              </span>
              <div class="clearfix"></div>
            </div>
          </a>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="panel panel-red">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xs-3">
                <i class="fa fa-times-circle fa-5x"></i>
              </div>
              <div class="col-xs-9 text-right">
                <div class="huge">{{total.cancelado}}</div>
                <div>Cancelados</div>
              </div>
            </div>
          </div>
          <a href="#">
            <div class="panel-footer">
              <span class="pull-left" @click="checkData(mydatein,2)">Ver Detalhes</span>
              <span class="pull-right">
                <i class="fa fa-arrow-circle-right"></i>
              </span>
              <div class="clearfix"></div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!---TABELA DE DESENHOS-->
    <div class="row">
      <tabela-desenhos :valor="desenhos"></tabela-desenhos>
    </div>

    <!-- /.row -->
    <div class="row">
      <div class="col-lg-8">
        <div class="panel panel-default">
          <div class="panel-heading">
            <i class="fa fa-bar-chart-o fa-fw"></i> Grafico de Progressão:
            <div class="pull-right">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-default btn-xs dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Actions
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu pull-right" role="menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body">
            <!--"morris-area-chart"-->
            <div id="morris-bar-chart" style="position: relative"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import {mapMutations,mapGetters} from 'vuex'
import DatePicker from 'vue2-datepicker'
import TabelaDesenho from './tabelas/TabelaDes'


export default {
  name: 'DashBoard',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    //Alimenta o contador da tela inicial
        total : {
            cancelado:'',
            emitido:'',
            verificando:'',
        },
             mydatein:null,
            mydateout:null,            
            mes:[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
                'Consulta:'
            ],
            verdFalse: false,
            tipStatus:[
                'EMITIDO',
                'VERIFICANDO',
                'CANCELADO'
            ],
            desenhos:[],
            nProj: -1,

    }
  },


  components: {
      DatePicker,
    'tabela-desenhos':TabelaDesenho,

  },

   computed: {
    ...mapState([
      'usuario',
      'maquetes'
    ]),
       ...mapGetters([

      'getUsuario',
      'getMaquetes'
    ]),

   },


//CONTAGEM DE STATUS COM CALENDARIO - GERAL
  methods: {


      ...mapMutations([
          'setMaquetes'

      ]),

  

        contagemPorData(){
             axios.get('/desenho/contagemstatus', { headers: {  Accept: 'application/json'  },
                    params:{
                        bol:true,
                        nProj: this.nProj,
                        dIni:this.mydatein,
                        dFim: this.mydateout
                    } })
                        .then(res => {
                        console.log(res)
                        this.total = res.data
                        this.verdFalse=true
                        })
                        .catch(error => console.log(error.response))
        },

//CONTAGEM DE STATUS DEFAULT - GERAL

        atualizar () {
                    axios.get('/desenho/contagemstatus', 
                    { headers: {  Accept: 'application/json'  },
                     params:{
                     bol:false, 
                     nProj:this.nProj
                     } } )
                        .then(res => {
                        console.log(res)
                        this.total = res.data
                        })
                        .catch(error => console.log(error.response))
                    } ,   


        indicaBusca: function(meses,verdadeiro){
            var month= new Date();
            if(verdadeiro==false){
                return meses[month.getMonth()]
            }else
            {
                return meses[12]
            }

        },
//CONVERTE AS DATAS PARA O FORMATO DD/MM/YYYY
     formatoDeDatas: function (desData) {
        var dataDes = new Date(desData)
        var strData = ''
        return strData.concat(dataDes.getDate(),'/',dataDes.getMonth(),'/',dataDes.getFullYear())
    },

//LISTA DESENHOS POR STATUS E DATA DO MES VINGENTE
           desenhoPorStatus(n){               
      axios.get('/desenho/desenhosdatastatus',
      
        {// crossorigin:true ,
          params:{
              bol:false,
              nProj:this.nProj,
              status:this.tipStatus[n]

              }
            }  
      
      ).then(res =>{
        console.log(res)
        this.desenhos=res.data
      })
      .catch(error => console.log(error.response))

    },

//LISTA DESENHOS POR STATUS E CALENDARIO
    desenhosPorStatusCalendario(n){
axios.get('/desenho/desenhosdatastatus',
      
        {// crossorigin:true ,
          params:{
              bol:true,
              nProj:this.nProj,
              status:this.tipStatus[n],
             dIni:this.mydatein,
             dFim: this.mydateout
            }  
      
     } ).then(res =>{
        console.log(res)
        this.desenhos=res.data
      })
      .catch(error => console.log(error.response))

    } 

    ,
    //CHECA SE A BUSCA USA CALENDARIO E CHAMA METODO ARPOPRIADO
    checkData(mydatein,n){
        if (mydatein!=null){
            this.desenhosPorStatusCalendario(n)
        }else{
            this.desenhoPorStatus(n)
        }
    },

    //POPULA O COMBOBOX DE PROJETOS
   carregaCombo(){
    axios.get('/maquete/projetos',
      
        {
             headers: 
             { 
               Accept: 'application/json' 
             } 
      
     } ).then(res =>{
        console.log(res)
        this.setMaquetes(res.data)
      })
      .catch(error => console.log(error.response))

    },  

         //SETA VARIAVEL QUE IDENTIFICA O PROJETO E ATUALIZA OS CAMPOS
    atualizaProjSelec(){
    this.atualizar()

    },
   },

 
     beforeMount() {
         this.carregaCombo(),
         this.atualizar()
     },

 



}




</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.month-refer {
  text-align: inherit;
  font-size: 25px;
}
</style>
