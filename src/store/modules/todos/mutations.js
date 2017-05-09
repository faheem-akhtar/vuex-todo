import * as types from '../../types'

export const mutations = {

  [types.ADD_TODO] (state, { id, text }) {
    state.items.push({
      id,
      text,
      completed: false
    })
  },

  [types.TOGGLE_TODO] (state, { id }) {
    const todo = state.items.filter(item => item.id === id)[0]
    todo.completed = !todo.completed
  },

  [types.FETCH_TODOS_SUCCESS] (state, { response }) {
    state.items = response
  }

}
