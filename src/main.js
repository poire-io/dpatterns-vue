import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import {routes} from './routes';
import './components'
//import dpText from './components/dp-text.vue'

Vue.use(VueRouter);
const router = new VueRouter({
  routes
  //, mode: 'history'
});
//const router = new VueRouter({routes});
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
//Vue.component('dp-text', dpText);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
//.$mount('#app')
