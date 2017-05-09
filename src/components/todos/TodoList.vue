<template>
  <div class="wrapper">
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">Todo List</h1>
        <TodoFilter />
      </md-toolbar>
      <md-table v-if="todos.length" md-sort="text" @sort="onSort">
        <md-table-header>
          <md-table-row>
            <md-table-head md-sort-by="text">Text</md-table-head>
            <md-table-head md-sort-by="completed">Status</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import Todo from './Todo'
import TodoFilter from './TodoFilter'

export default {
  name: 'TodoList',
  components: {
    Todo, TodoFilter
  },
  computed: {
    ...mapGetters('todos', {
      filter: 'getFilter'
    }),
    ...mapState('todos', {
      todos: 'items'
    })
  },
  methods: {
    ...mapActions('todos', [
      'fetchTodos'
    ]),
    onSort (sorting) {
      this.sortTodos(sorting.name, sorting.type)
    },
    sortTodos (name, type) {
      this.todos.sort((a, b) => {
        const valueA = typeof a[name] === 'string' ? a[name].toUpperCase() : a[name]
        const valueB = typeof b[name] === 'string' ? b[name].toUpperCase() : b[name]
        if (type === 'asc') {
          return valueA === valueB ? 0 : (valueA < valueB ? -1 : 1)
        } else {
          return valueA === valueB ? 0 : (valueA < valueB ? 1 : -1)
        }
      })
    }
  },
  watch: {
    filter () {
      this.fetchTodos(this.filter)
    }
  },
  mounted () {
    this.fetchTodos(this.filter)
  }
}
</script>

<style scoped>
.wrapper {
  padding: 10px;
}
</style>
