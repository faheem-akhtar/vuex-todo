import * as types from '../../types'

const actionsInjector = require('inject-loader!./actions')

const actions = actionsInjector({
  '../../types': types,
  '../../../api': {
    addTodo (text) {
      return new Promise(resolve => setTimeout(resolve, 100))
    },
    toggleTodo (id) {
      return new Promise(resolve => setTimeout(resolve, 100))
    },
    fetchTodos (filter) {
      return new Promise(resolve => setTimeout(() => {
        return resolve({})
      }, 100))
    }
  }
})

const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]
    expect(mutation.type).to.equal(type)
    if (payload) {
      expect(mutation.payload).to.deep.equal(payload)
    }
    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({ commit, state }, payload)

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}



describe('todos actions', () => {

  it('should handle addTodo', done => {
    const state = {items: []}
    const args = { text: 'Mango' }
    const stateAfter = [
      { type: 'ADD_TODO', response: {} }
    ]
    testAction(actions.addTodo, args, state, stateAfter, done)
  })

  it('should handle toggleTodo', done => {
    const state = {items: [
      {
        id: 'a',
        text: 'Apple',
        completed: false
      }
    ]}
    const args = { id: 'a' }
    const stateAfter = [
      { type: 'TOGGLE_TODO', payload: {id: 'a'} }
    ]
    testAction(actions.toggleTodo, args, state, stateAfter, done)
  })

  it('should handle fetchTodos', done => {
    const state = {items: []}
    const args = 'all'
    const stateAfter = [
      { type: types.FETCH_TODOS_SUCCESS, payload: { filter: 'all', response: {}}}
    ]
    testAction(actions.fetchTodos, args, state, stateAfter, done)
  })

})
