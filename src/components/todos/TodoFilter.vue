<template>
  <md-menu>
    <md-button md-menu-trigger class="md-icon-button">
      <md-icon>filter_list</md-icon>
    </md-button>
    <md-menu-content>
      <FilterLink filter="all">All</FilterLink>
      <FilterLink filter="active">Active</FilterLink>
      <FilterLink filter="completed">Completed</FilterLink>
    </md-menu-content>
  </md-menu>
</template>

<script>
import FilterLink from './FilterLink'

export default {
  name: 'TodoFilter',
  components: {
    FilterLink
  }
}
</script>
