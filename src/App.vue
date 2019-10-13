<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

//import Login from '@/components/pages/Login';

import Login from './components/pages/Login';
import TabelaDesenho from './components/tabelas/TabelaDes';
import TabelaLinha from './components/tabelas/TabelasLin';

import { mapState, mapGetters } from 'vuex'
import { mapMutations } from 'vuex'


export default {
  name: 'App',

  computed: {
    ...mapState([
       'usuario'
    ]),
    ...mapGetters([
    
    ])

  },
  methods: {
    ...mapMutations([
      'logout'
    ]),

    home(){
      if(this.usuario==null){
      this.$router.push('/login')
      } //else{ this.$router.push('/dashboard') }
    }
  },
  components:{
    'tabela-desenhos':TabelaDesenho,
    'tabela-linhas':TabelaLinha,

  },

  created(){
    this.home();
  }




}
</script>

<style>
</style>
