import VmdToolbar from './components/vmdToolbar'

import '@material/typography/mdc-typography.scss'
// import 'material-components-web/material-components-web.scss'

const components = {
  VmdToolbar
}

export default {
  install (Vue, options = { components: ['VmdToolbar'] }) {
    console.log('Installing vue material design ...')

    options.components.forEach(item => {
      const componentInstaller = components[item]
      if (componentInstaller) {
        Vue.use(componentInstaller)
      }
    })
  }
}
