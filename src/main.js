// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/spacing.css'
import './assets/css/dropdown.css'
import './assets/css/feather.css'
import VueScrollmagic from 'vue-scrollmagic'



import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

Vue.component('app-navbar', Navbar)
Vue.component('app-footer', Footer)

Vue.config.productionTip = false

Vue.use(VueScrollmagic, {
  vertical: true,
  globalSceneOptions: {},
  loglevel: 2,
  refreshInterval: 100
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
