<template>
  <md-menu-item :disabled="isActive" @click.native="onClick(filter)">
    <slot></slot>
  </md-menu-item>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FilterLink',
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters('todos', {
      activeFilter: 'getFilter'
    }),
    isActive () {
      return this.activeFilter === this.filter
    }
  },
  methods: {
    onClick (filter) {
      // this.setFilter({filter})
      this.$router.push({ name: 'dashboard', params: { filter } })
    },
    ...mapActions('todosFilter', [
      'setFilter'
    ])
  }
}
</script>

<style scoped>
.md-list-item.md-disabled {
  background-color: hsla(0,0%,60%,.2);
}
</style>
