import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ncBackground from '../components/background.vue'
import change from '../components/change.vue'
import input from '../components/input.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/change',
    name: 'change',
    component: change
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
<<<<<<< HEAD
  {
    path:'/input',
    name:'input',
    component:input
  }
=======
>>>>>>> 19adce4c8826d40cacb54cafacd2c6c3ff10bf6e
]

const router = new VueRouter({
  routes
})

export default router
