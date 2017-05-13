// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import { sync } from 'vuex-router-sync'

import App from '@/components/App'

import { createRouter } from './router'
import configureStore from './store'

// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'

// Vue.use(VueMaterial)

import VueMaterialDesign from './material'
Vue.use(VueMaterialDesign)

Vue.config.productionTip = false

const store = configureStore()

// sync(store, router)

export const createApp = () => {
  const router = createRouter()

  const app = new Vue({
    store,
    router,
    // template: '<App/>',
    // components: { App }
    render: h => h(App)
  })

  return { app, router }
}
