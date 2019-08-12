<template>
  <div id="app">
    <!--<router-link to="/login"></router-link>-->

    <router-view />

    <!--<router-link to="/dashboard"></router-link>-->

    <!-- <router-link to="Home/public/login">
      <a v-if="getUsuario!=null">
    
    </router-link>-->
  </div>
</template>

<script>

//import Login from '@/components/pages/Login';

import Login from './components/pages/Login'
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
      } else{
        this.$router.push('/dashboard')
      }
    }
  },
  components:{
 

  },

  created(){
    this.home();
  }




}
</script>

<style>
</style>
