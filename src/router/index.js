import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from "@/views/MainView.vue";
import LoginView from "@/views/LoginView.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
