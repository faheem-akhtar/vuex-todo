import { mutations } from './mutations'

describe('todos mutations', () => {

  it('should handle ADD_TODO', () => {
    const state = {items:[]}
    const args = {
      id: 'abc',
      text: 'The new todo'
    }
    const stateAfter = {items:[
      {
        id: 'abc',
        text: 'The new todo',
        completed: false
      }
    ]}
    mutations.ADD_TODO(state, args)
    expect(state)
      .to.eql(stateAfter)
  })

  it('should handle TOGGLE_TODO', () => {
    const state = {items: [
      {
        id: 'a',
        text: 'Apple',
        completed: false
      },
      {
        id: 'b',
        text: 'Banana',
        completed: false
      }
    ]}
    const args = { id: 'b' }
    const stateAfter = {items: [
      {
        id: 'a',
        text: 'Apple',
        completed: false
      },
      {
        id: 'b',
        text: 'Banana',
        completed: true
      }
    ]}
    mutations.TOGGLE_TODO(state, args)
    expect(state)
      .to.eql(stateAfter)
  })

  it('should handle FETCH_TODOS_SUCCESS', () => {
    const state = {items: []}
    const args = [
      {
        id: 'a',
        text: 'Apple',
        completed: false
      },
      {
        id: 'b',
        text: 'Banana',
        completed: false
      }
    ];
    const stateAfter = {items: [
      {
        id: 'a',
        text: 'Apple',
        completed: false
      },
      {
        id: 'b',
        text: 'Banana',
        completed: false
      }
    ]}
    mutations.FETCH_TODOS_SUCCESS(state, { response: args })
    expect(state)
      .to.eql(stateAfter)
  })

})

// describe('todos actions', () => {

// })
