<template>
  <md-table-row @click.native="onClick(todo.id)" v-bind:class="{completed: todo.completed}">
    <md-table-cell>{{todo.text}}</md-table-cell>
    <md-table-cell>{{status}}</md-table-cell>
  </md-table-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Todo',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('todos', [
      'toggleTodo'
    ]),
    onClick (id) {
      this.toggleTodo({id})
    }
  },
  computed: {
    status () {
      return this.todo.completed ? 'Completed' : 'Active'
    }
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
