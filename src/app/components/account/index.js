import login from './login.vue'
import dashboard from './dashboard.vue'
import { requireAuth, logout } from 'Utils/auth'

export const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/logout',
    beforeEnter: () => {
      logout()
      window.location.href = '/'
    }
  },
  {
    path: '/dashboard',
    beforeEnter: requireAuth,
    component: dashboard
  }
]
