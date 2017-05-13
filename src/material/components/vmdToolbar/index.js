import vmdToolbar from './vmdToolbar'
import vmdToolbarRow from './vmdToolbarRow'
import vmdToolbarSection from './vmdToolbarSection'

export default (Vue) => {
  console.log('Installing vmdToolbar ...')
  Vue.component('vmd-toolbar', vmdToolbar)
  Vue.component('vmd-toolbar-row', vmdToolbarRow)
  Vue.component('vmd-toolbar-section', vmdToolbarSection)
}
