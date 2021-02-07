// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';


//axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

//axios.defaults.baseURL = 'http://192.168.56.3:8020/drcontroll';
//axios.defaults.baseURL = 'http://localhost:8020/drcontroll';
axios.defaults.baseURL = 'http://192.168.56.3:80/drcontroller-backend'; // alterar ip e porta conforme host do server



axios.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.Authorization = store.state.token;
  }
  return config;
});

axios.interceptors.response.use(res => {
    return res;
  },
  error => {
    if (error.response.status === 400) {
      alert('Não autorizado!');
    } else if (error.response.status === 401) {
      store.commit('logout');
      router.push('/login');
    }
    throw error;
  }
);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
});
