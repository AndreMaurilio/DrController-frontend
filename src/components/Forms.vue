<template>
  <div id="page-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Cadastro de Usuario</h1>
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
                  <div class="form-group">
                    <label>Buscar usuario:</label>
                    <input
                      class="form-control"
                      v-model="buscador"
                      @input="buscador = $event.target.value.toUpperCase()"
                      placeholder="busca..."
                    />
                  </div>
                  <button class="btn btn-sucess" type="button" @click="buscarUsuario">BUSCAR</button>
                </form>
                <!-- CADASTRO-->
                <form role="form">
                  <div class="form-group">
                    <label>Nome:</label>
                    <input
                      class="form-control"
                      v-model="nome"
                      @input="nome = $event.target.value.toUpperCase()"
                      placeholder="nome..."
                    />
                  </div>
                  <div class="form-group">
                    <label>Email:</label>
                    <input class="form-control" v-model="email" placeholder="Enter text" />
                  </div>
                  <div class="form-group">
                    <label>Senha:</label>
                    <input class="form-control" v-model="senha" placeholder="Enter text" />
                  </div>
                  <div class="form-group">
                    <label>Repetir a senha:</label>
                    <input class="form-control" placeholder="Enter text" />
                  </div>
                  <div class="form-group">
                    <label>Chave do PLant3D:</label>
                    <input class="form-control" v-model="idCad" placeholder="Enter text" />
                  </div>
                  <div class="form-group">
                    <label>Disciplina:</label>
                    <input
                      class="form-control"
                      v-model="disciplina"
                      @input="disciplina = $event.target.value.toUpperCase()"
                      placeholder="Enter text"
                    />
                  </div>
                  <div class="form-group">
                    <label>Função:</label>
                    <input
                      class="form-control"
                      v-model="perfil"
                      @input="perfil = $event.target.value.toUpperCase()"
                      placeholder="Enter text"
                    />
                  </div>
                  <button class="btn btn-sucess" type="submit" @click="cadastrarUsuario">SALVAR</button>
                  <button class="btn btn-sucess" type="button" @click="updateUsuario">ATUALIZAR</button>
                  <button class="btn btn-sucess" type="button" @click="deletarUsuario">DELETAR</button>

                  <!--  <div class="form-group">
                                            <label>Static Control</label>
                                            <p class="form-control-static">email@example.com</p>
                                        </div>
                                        <div class="form-group">
                                            <label>File input</label>
                                            <input type="file">
                                        </div>
                                        <div class="form-group">
                                            <label>Text area</label>
                                            <textarea class="form-control" rows="3"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label>Checkboxes</label>
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" value="">Checkbox 1
                                                </label>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" value="">Checkbox 2
                                                </label>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" value="">Checkbox 3
                                                </label>
                                            </div>
                                        </div>
                                       <div class="form-group">
                                            <label>Inline Checkboxes</label>
                                            <label class="checkbox-inline">
                                                <input type="checkbox">1
                                            </label>
                                            <label class="checkbox-inline">
                                                <input type="checkbox">2
                                            </label>
                                            <label class="checkbox-inline">
                                                <input type="checkbox">3
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label>Radio Buttons</label>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>Radio 1
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">Radio 2
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">Radio 3
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Inline Radio Buttons</label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline1" value="option1" checked>1
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline2" value="option2">2
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline3" value="option3">3
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label>Selects</label>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Multiple Selects</label>
                                            <select multiple class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <button type="submit" class="btn btn-default">Submit Button</button>
                  <button type="reset" class="btn btn-default">Reset Button</button>-->
                </form>
              </div>
              <!--  <div class="col-lg-6">
                <h1>Disabled Form States</h1>
                <form role="form">
                  <fieldset disabled>
                    <div class="form-group">
                      <label for="disabledSelect">Disabled input</label>
                      <input
                        class="form-control"
                        id="disabledInput"
                        type="text"
                        placeholder="Disabled input"
                        disabled
                      />
                    </div>
                    <div class="form-group">
                      <label for="disabledSelect">Disabled select menu</label>
                      <select id="disabledSelect" class="form-control">
                        <option>Disabled select</option>
                      </select>
                    </div>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" />Disabled Checkbox
                      </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Disabled Button</button>
                  </fieldset>
                </form>
                <h1>Form Validation States</h1>
                <form role="form">
                  <div class="form-group has-success">
                    <label class="control-label" for="inputSuccess">Input with success</label>
                    <input type="text" class="form-control" id="inputSuccess" />
                  </div>
                  <div class="form-group has-warning">
                    <label class="control-label" for="inputWarning">Input with warning</label>
                    <input type="text" class="form-control" id="inputWarning" />
                  </div>
                  <div class="form-group has-error">
                    <label class="control-label" for="inputError">Input with error</label>
                    <input type="text" class="form-control" id="inputError" />
                  </div>
                </form>
                <h1>Input Groups</h1>
                <form role="form">
                  <div class="form-group input-group">
                    <span class="input-group-addon">@</span>
                    <input type="text" class="form-control" placeholder="Username" />
                  </div>
                  <div class="form-group input-group">
                    <input type="text" class="form-control" />
                    <span class="input-group-addon">.00</span>
                  </div>
                  <div class="form-group input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-eur"></i>
                    </span>
                    <input type="text" class="form-control" placeholder="Font Awesome Icon" />
                  </div>
                  <div class="form-group input-group">
                    <span class="input-group-addon">$</span>
                    <input type="text" class="form-control" />
                    <span class="input-group-addon">.00</span>
                  </div>
                  <div class="form-group input-group">
                    <input type="text" class="form-control" />
                    <span class="input-group-btn">
                      <button class="btn btn-default" type="button">
                        <i class="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>-->
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
  name: 'Forms',
  data () {
    return {
      
          idUser:'',
          idCad:'',
          nome:'',
          disciplina:'',
          email:'',
          senha:'',
          senhaConf:'',
          hideSenha:'',
          perfil:'',
          buscador:'',
          booluser:false,
          user:{
            idCad:'',
            nome:'',
            disciplina:'',
            senha:'',
            email:'',
            perfil:'',

          }

      
    }
  },
  methods: {




      buscarUsuario(){
        axios.get('/usuario/buscarusuario',{
          params:{buscar: this.buscador}
        }).then(res =>{
          console.log(res)
          this.idUser = res.data.id
          this.nome = res.data.nome
          this.email = res.data.email
          this.disciplina = res.data.disciplina
          this.perfil = res.data.perfil
          this.idCad = res.data.idCad
          this.hideSenha = res.data.senha
          

        
        }

      )
      .catch(error => console.log(error.response))}
      ,

      updateUsuario () {
        var senh =''
        if(this.senha===''){
           senh = this.hideSenha
        }else{
           senh = this.senha
        }
          
      axios.post('/usuario/updateuser', 
          {
            id: this.idUser,
            idCad: this.idCad,
            nome: this.nome,
            disciplina: this.disciplina,
            email:this.email,
            senha:this.senh,
            perfil:this.perfil,

          })
        .then(res => {
        //    this.$router.push('/')
        alert(res)
        })
        .catch(error => console.log(error.response))
    } ,


        cadastrarUsuario () {
          
      axios.post('/usuario/saveusuario', 
          {
            idCad: this.idCad,
            nome: this.nome,
            disciplina: this.disciplina,
            email:this.email,
            senha:this.senha,
            perfil:this.perfil,


             headers: { Accept: 'application/json' }

          })
        .then(res => {
        //    this.$router.push('/')
  
        })
        .catch(error => console.log(error.response))
    },
    
    deletarUsuario(){
           var senh =''
        if(this.senha===''){
           senh = this.hideSenha
        }else{
           senh = this.senha
        }
      axios.post('/usuario/deltuser', 
          {
            id: this.idUser,
            idCad: this.idCad,
            nome: this.nome,
            disciplina: this.disciplina,
            email:this.email,
            senha:this.senh,
            perfil:this.perfil,

          })
        .then(res => {
        //    this.$router.push('/')
        alert(res)
        })
        .catch(error => console.log(error.response))
    } ,



    

}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form-group input {
  text-transform: uppercase;
}
</style>
