import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export const createRouter = () =>
  new Router({
    mode: 'history',
    routes: [
      {
        path: '/:filter?',
        name: 'dashboard',
        component: Dashboard
      }
    ]
  })
