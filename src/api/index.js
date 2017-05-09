import { v4 } from 'node-uuid'

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: 'Apple',
      completed: false
    },
    {
      id: v4(),
      text: 'Orange',
      completed: false
    },
    {
      id: v4(),
      text: 'Banana',
      completed: true
    },
    {
      id: v4(),
      text: 'Kiwi',
      completed: false
    },
    {
      id: v4(),
      text: 'Pineapple',
      completed: false
    }
  ]
}

const delay = ms =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodos = filter =>
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.todos.slice()
      case 'active':
        return fakeDatabase.todos.filter(todo => !todo.completed).slice()
      case 'completed':
        return fakeDatabase.todos.filter(todo => todo.completed).slice()
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  })

export const addTodo = text =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false
    }
    fakeDatabase.todos.push(todo)
    return todo
  })

export const toggleTodo = id =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(todo => todo.id === id)
    // todo.completed = !todo.completed
    return {
      ...todo,
      completed: !todo.completed
    }
  })
