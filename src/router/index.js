import Vue from 'vue'
import Router from 'vue-router'

// views
import Home from '@/views/Home'

// auths
import Login from '@/auth/Login'
import Register from '@/auth/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '*',
    //   component: NotFound
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
