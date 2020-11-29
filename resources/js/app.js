window.Vue = require('vue');

// For Vuetify
import vuetify from './vuetify'
import App from './App.vue'
// For Axios
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// For Router
import VueRouter from 'vue-router';
import { routes } from './Routes';
import Vuelidate from 'vuelidate'

// For AXIOS DEFAULT HEADERS
// axios.defaults.withCredentials = true
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
axios.defaults.baseURL = process.env.MIX_APP_URL;

const token = localStorage.getItem('userToken')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token
}

Vue.use(VueRouter)
Vue.use(Vuelidate)
const router = new VueRouter({
    mode: 'history',
    routes
});
 
Vue.use(VueAxios, axios)

const app = new Vue({
    vuetify,
    render: h => h(App),
    el: '#app',
    router,
});
