<template>
  <div>
    <TodoList />
    <AddTodo />
  </div>
</template>

<script>
import AddTodo from './todos/AddTodo'
import TodoList from './todos/TodoList'

export default {
  name: 'Dashboard',
  components: {
    AddTodo, TodoList
  }
}
</script>
