import Vue from 'vue'
import VueRouter from 'vue-router'
// import Nprogress from 'nprogress'
// import 'nprogress/nprogress.css';

import Home from './views/Home.vue'
import ListItems from '@/components/ListItems.vue'

import App from './App.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
 
     {
       
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/chat',
      name: 'chat',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/chat.vue')
    },
    {
      path: '/lista',
      name: 'lista',
      component:ListItems
    }
  ]
});





