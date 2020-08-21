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

// For AXIOS DEFAULT HEADERS
axios.defaults.withCredentials = true
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'http://localhost:8000';

const token = localStorage.getItem('userToken')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token
}

Vue.use(VueRouter);
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