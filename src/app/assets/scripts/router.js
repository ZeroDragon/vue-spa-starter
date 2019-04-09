import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as accountRoutes } from '~/account'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/dashboard'
  }
]
const insertRoute = rts => {
  rts.forEach(route => {
    routes.unshift(route)
  })
}

insertRoute(accountRoutes)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
