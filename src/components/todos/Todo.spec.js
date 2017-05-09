import Vue from 'vue'
import { v4 } from 'node-uuid'
// import VueMaterial from 'vue-material'

import Todo from './Todo'

// Vue.use(VueMaterial)

// helper function that mounts and returns the rendered text
const getRenderedEle = (Component, propsData) => {
  const Ctor = Vue.extend(Component)
  return new Ctor({ propsData: propsData })
}

describe('Todo.vue', () => {
  it('should handle props', () => {
    const before = {
      id: v4(),
      text: 'A testing todo',
      completed: false
    }
    const after = before
    const vm = getRenderedEle(Todo, {
      todo: before
    })
    //.$mount()

    // expect(vm.$el.querySelector('h1').textContent)
    //   .to.equal('Redro')
    // expect($elem.querySelector('td').textContent)
    //   .to.equal('A testing todo')
    expect(vm.todo)
      .to.equal(after)
  })
})
