<template>
  <div id="app">
    <md-toolbar class="md-accent">
      <h1 class="md-title" style="flex: 1">Redro</h1>
      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.md-accent {
  background-color: #e2e2e2 !important;
}
h1, .md-icon-button {
  text-transform: uppercase;
  color: Red !important;
}
</style>
