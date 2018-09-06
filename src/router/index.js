import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Money from '@/pages/makeMoney/makeMoney'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/money',
      name: 'makeMoney',
      component: Money
    }
  ]
})
