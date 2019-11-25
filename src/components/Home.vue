<template>
  <div id="wrapper">
    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/dashboard">DrController</a>
      </div>
      <!-- /.navbar-header -->

      <!-- LOGOAUT-->
      <ul class="nav navbar-top-links navbar-right">
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            <i class="fa fa-user fa-fw"></i>
            <i class="fa fa-caret-down"></i>
          </a>
          <ul class="dropdown-menu dropdown-user">
            <li>
              <a href="#">
                <i class="fa fa-user fa-fw"></i> User Profile
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-gear fa-fw"></i> Settings
              </a>
            </li>
            <li class="divider"></li>
            <li>
              <a v-if="usuario" @click="logout" href="/login">
                <i class="fa fa-sign-out fa-fw"></i>Logout
              </a>
            </li>
          </ul>
          <!-- /.dropdown-user -->
        </li>
        <!-- /.dropdown -->
      </ul>
      <!-- /.navbar-top-links -->

      <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
          <ul class="nav" id="side-menu">
            <li>
              <!-- <router-link to="/dashboard">
                <i class="fa fa-paper-plane fa-fw"></i> Emissões
              </router-link>-->
              <a href="/dashboard">
                <i class="fa fa-paper-plane fa-fw"></i> Emissões
              </a>
            </li>
     
            <li>
              <!--<router-link to="/tables">
                <i class="fa fa-table fa-fw"></i> Documentos
              </router-link>-->
               <a href="/tables">
                <i class="fa fa-table fa-fw"></i> Documentos
              </a>
            </li>
            <li v-if="getRole=='ROLE_ADMIN'">
              <a href="javascript:void(0);">
                <i class="fa fa-wrench fa-fw"></i> Cadastros
                <span class="fa arrow"></span>
              </a>
              <ul class="nav nav-second-level">
                <li>
                  <router-link to="/forms">Cadastro de Usuarios</router-link>
                </li>
                <li>
                  <router-link to="/formsMaquete">Cadastro de Projetos</router-link>
                </li>
              </ul>
            </li>            
            <li v-if="getRole=='ROLE_ADMIN'">
               <a href="/linhas">
                <i class="fa fa-bar-chart-o fa-fw"></i>Linhas
              </a>
            </li>
           
          </ul>
        </div>
        <!-- /.sidebar-collapse -->
      </div>
      <!-- /.navbar-static-side -->
    </nav>
    <router-view />
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
 computed: {
    ...mapState([
      'usuario',
 
    ]),
    ...mapGetters([
      'getToken',
      'getUsuario',
      'getRole'

    ])

  },
  methods: {
    ...mapMutations([
      'logout',

    ])
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
