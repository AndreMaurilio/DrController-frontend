<template>
  <div id="page-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Documentos</h1>
      </div>
      <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <!--DROPDOWN-->
            <div class="dropdow">
              <label for="projeto">Projeto</label>
              <select class="form-contrl" name="projeto" id="projeto" v-model="maquete">
                <option :value="-1" disable selected>Tipo..</option>
                <option
                  v-for="(projeto,index) in  getMaquetes"
                  :key="index"
                  v-bind:value="projeto.numProj"
                >{{projeto.nomProj}}</option>
              </select>
              <label for="nTip">Tipo</label>
              <select class="form-contrl" name="nTip" id="nTip" v-model="nTip">
                <option :value="null" disable selected>Tipo..</option>
                <option
                  v-for="(tipo,index) in tipos"
                  :key="index"
                  v-bind:value="tipo.id"
                >{{tipo.texto}}</option>
              </select>
              <label for="nCa">Campo</label>
              <select class="form-contrl" name="nCa" id="nCa" v-model="nCa">
                <option :value="null" disable selected>Tipo..</option>
                <option
                  v-for="(campo,ind) in  campos[nTip]"
                  :key="ind"
                  v-bind:value="campo.camp"
                >{{campo.texto}}</option>
              </select>
            </div>

            <div class="input-group custom-search-form">
              <input
                type="text"
                v-model="buscar"
                @input="buscar = $event.target.value.toUpperCase()"
                class="form-control"
                placeholder="Busca..."
              />
              <span class="input-group-btn">
                <button
                  class="btn btn-default"
                  type="button"
                  @click="buscarDocumentos(buscar,nTip)"
                >
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>

            <!--FIM DROPDOWUN>-->
            <!--RENDERIZAÇÃO DAS TABELAS-->
          </div>
          <div v-if="nTip===1">
            <tabela-desenhos :valor="desenhos"></tabela-desenhos>
          </div>
          <div v-else-if="nTip===2">
            <tabela-linhas :valor="desenhos"></tabela-linhas>
          </div>
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

import TabelaDesenho from './tabelas/TabelaDes'
import TabelaLinha from './tabelas/TabelasLin'

import axios from 'axios'
import { mapState } from 'vuex'
import {mapMutations,mapGetters} from 'vuex'


export default {
  name: 'Tables',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      numMaquete:'', 
      desenhos: [],
      tipos:[ ],  
      campos:{},
      nTip:null,
      nCa:null,
      buscar:null,
      maquete:null,
      url_caminho:[
            '/desenho/buscardesenhos',
            '/linha/buscarlinhas'//continua função de request
        ]


      

      

    }
  },

  computed:{
      ...mapState([
          'maquetes'
      ]),
      ...mapGetters([
          'getMaquetes'
      ]),
      
  },
  methods: {




        buscarDocumentos(busca,nTip){
            var vm = this
            if(nTip ===1){
axios.get('/desenho/buscardesenhos',
      
        {// FALTA TERMINAR
          params:{
              nProj:this.maquete,
              nCamp: this.nCa,
              nBusca:this.buscar
            }    
      
     } ).then(res =>{
        console.log(res)
        this.desenhos=res.data
      })
      .catch(error => console.log(error.response))

    } else{

        axios.get('/linha/buscarlinhas',
      
        {// FALTA TERMINAR
          params:{
              nProj:this.maquete,
              nCamp: this.nCa,
              nBusca:this.buscar
            }          
     } ).then(res =>{
        console.log(res)
        this.desenhos=res.data
      })
      .catch(error => console.log(error.response))

    }
    }
    ,



    formatoDeDatas: function (desData) {
        var dataDes = new Date(desData)
        var strData = ''
        return strData.concat(dataDes.getDate(),'/',dataDes.getMonth(),'/',dataDes.getFullYear())
    },
    init: function(){
        var self = this       
        self.tipos =[
          {texto:'Desenhos', id: 1},
          {texto:'Linhas', id: 2}
        ],

        self.campos ={

           1:[
                {texto:'Tag', camp:'tag'},
             { texto:'Contrato', camp:'desContratado'},
             {texto: 'Subtitulo',camp:'desSubtitulo'},
            {texto:  'Status',camp:'status'},
            {texto:  'Revisão',camp:'revisao'},
            {texto:  'Desenhista',camp:'desIdCad'},
           {texto:   'Verificador',camp:'nomeVerificador'},
           {texto:   'Spec',camp:'pipeSpec'},
           {texto:'P&ID',camp:'pID'},
           {texto:   'Numero de folhas',camp:'numFolhas'}],

        
        2:[
            {texto:'Tag',camp:'liTag'},
              {texto:'Material',camp:'liMaterial'},
              {texto:'Pendencias',camp:'liPendencias'},
              {texto:'Fluido',camp:'liFluido'},
              {texto:'Area',camp:'liArea'},
              {texto:'Site',camp:'liSite'},
              {texto:'Tag BIM',camp:'liBimTag'}
     
        ]
        }
    },




  },
  created(){
      this.init()
  },
   components:{
    'tabela-desenhos':TabelaDesenho,
    'tabela-linhas':TabelaLinha

  },
  



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
  width: 230px;
  margin: 15px;
}
form-group input {
  text-transform: uppercase;
}
</style>
