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
          <div class="panel-heading">Basic Form Elements</div>
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-6">
                <form role="form">
                  <div class="form-group">
                    <label>Numero do Projeto:</label>
                    <input class="form-control" v-model="projetoNumero" placeholder="Enter text" />
                    <p class="help-block">Example block-level help text here.</p>
                  </div>
                  <div class="form-group">
                    <label>Nome:</label>
                    <input class="form-control" v-model="projetoNome" placeholder="Enter text" />
                  </div>
                  <div class="form-group">
                    <label>Cliente:</label>
                    <input class="form-control" v-model="projetoCliente" placeholder="Enter text" />
                  </div>
                  <div class="form-group">
                    <label>Local da Obra:</label>
                    <input class="form-control" v-model="projetoLocal" placeholder="Enter text" />
                  </div>
                  <div class="form-group">
                    <label>Descrição:</label>
                    <input class="form-control" v-model="projetoDescricao" placeholder="Enter text" />
                  </div>
                  <div class="form-group">
                    <label>Data de inicio:</label>
                    <input class="form-control" v-model="dataProjeto" placeholder="Enter text" />
                  </div>
                  <button class="btn btn-sucess" type="submit" @click="cadastrarMaquete">SALVAR</button>
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
          dataProjeto:''

      
    }
  },
  methods: {

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
    } 

}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
