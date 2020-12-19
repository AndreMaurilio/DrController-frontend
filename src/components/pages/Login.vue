<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <div class="login-panel panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Area de acesso</h3>
          </div>
          <div class="panel-body">
            <!--<form role="form">-->
            <form @submit.prevent="login">
              <fieldset>
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="E-mail"
                    name="email"
                    type="text"
                    required
                    autofocus
                    v-model="nome"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value
                    required
                    v-model="senha"
                  />
                </div>
                <div class="checkbox">
                  <label>
                    <input name="remember" type="checkbox" value="Remember Me" />Me Lembre
                  </label>
                </div>
                <!-- Change this to a button or input when using this as a form -->
                <button class="btn btn-lg btn-success btn-block" type="submit">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Bem vindo ao DrawningController',
      nome: '',
      senha: '',
      pass:false
    }
  },

computed: {

},

  methods: {
    ...mapMutations([
      'setUsuario',
      'setToken',
         
    ]),

  

    login() {
      
      axios.post('login',
          {
            username: this.nome,
            password: this.senha,
            

          })
        .then(res => {
          console.log(res)
          this.setUsuario(res.data)
          this.setToken(res.headers.token) 
          this.$router.push('/dashboard')
         this.$router.go('/dashboard')
    
        })
        .catch(error => console.log(error))
    }

  },





}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
