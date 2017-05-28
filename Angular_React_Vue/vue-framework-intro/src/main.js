import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import User from './components/User.vue'
import Blog from './components/Blog.vue'
import Account from './components/Account.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: User },
  { path: '/blog', component: Blog },
  { path: '/account', component: Account },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
