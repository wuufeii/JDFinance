import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Money from '@/pages/makeMoney/makeMoney'
import Borrow from '@/pages/borrowMoney/borrowMoney'
import Save from '@/pages/saveMoney/saveMoney'

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
    },
    {
      path: '/borrow',
      name: 'borrowMoney',
      component: Borrow
    },
    {
      path: '/save',
      name: 'saveMoney',
      component: Save
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
