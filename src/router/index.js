import Vue from 'vue'
import Router from 'vue-router'

import routes from './router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'current'
})

export default router
