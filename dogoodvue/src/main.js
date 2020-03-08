import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { BootstrapVue } from 'bootstrap-vue'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faCalendar, faPortrait } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faHome, faCalendar, faPortrait)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

axios.defaults.baseURL = 'https://dogood-64567.firebaseio.com/'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
