import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import router from './router'
import store from './store'
import App from './App.vue'
import Snotify from 'vue-snotify';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)


import 'vue-snotify/styles/material.css';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(Snotify);
Vue.use(firestorePlugin)
Vue.use(BootstrapVue)


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
