<template>
  <div id="app">
    <!--<router-link to="/login"></router-link>-->
    <router-link to="/login"></router-link>
    <!--<router-link to="/dashboard"></router-link>-->
    <router-view />
    <!-- <router-link to="Home/public/login">
      <a v-if="getUsuario!=null">
    
    </router-link>-->
  </div>
</template>

<script>


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
    ])
  },
  components:{
 

  }



}
</script>

<style>
</style>
