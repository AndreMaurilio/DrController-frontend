import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'my-sec-app',
  storage: localStorage
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    usuario: null,
    token: null,
    maquetes: []
  },

  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },

    setToken(state, token) {
      state.token = token;
    },
    setMaquetes(state, maquetes) {
      state.maquetes = maquetes;
    },
    logout(state) {
      state.token = null;
      state.usuario = null;
    }
  },
  actions: {},
  getters: {
    getToken(state) {
      return state.token;
    },
    getUsuario(state) {
      return state.usuario;
    },
    getAdmin(state) {
      return state.admin;
    },
    getMaquetes(state) {
      return state.maquetes;
    }
  }
});
