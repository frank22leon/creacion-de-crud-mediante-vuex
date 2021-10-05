import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {path: '/', redirect: '/inicio'},
  {path: '*', redirect: '/inicio'},

  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/registro-pacientes',
    name: 'RegistroPacientes',
    component: () => import("../views/RegistroPacientes.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
