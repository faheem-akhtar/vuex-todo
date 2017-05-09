import * as types from '../../types'
import * as api from '../../../api'

export const addTodo = ({ commit }, { text }) => {
  return api.addTodo(text).then(
    response => {
      commit(
        types.ADD_TODO,
        response
      )
    }
  )
}

export const toggleTodo = ({ commit }, { id }) => {
  return api.toggleTodo(id).then(
    response => {
      commit(
        types.TOGGLE_TODO,
        { id }
      )
    }
  )
}

export const fetchTodos = ({ commit }, filter) => {
  return api.fetchTodos(filter).then(
    response => {
      commit(
        types.FETCH_TODOS_SUCCESS,
        { filter, response }
      )
    },
    error => {
      commit(
        types.FETCH_TODOS_FAILURE,
        { filter, message: error.message || 'Something went wrong.' }
      )
    }
  )
}
