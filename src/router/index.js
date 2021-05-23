import Vue from 'vue'
import Router from 'vue-router'

// views
import Home from '@/views/Home'
import Customers from '@/views/Customers'
import HowItWorks from '@/views/HowItWorks'
import FAQs from '@/views/FAQs'

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
    },
    {
      path: '/testimonials',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/how-it-works',
      name: 'HowItWorks',
      component: HowItWorks
    },
    {
      path: '/faqs',
      name: 'FAQs',
      component: FAQs
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y:0}
  }
})
