<template>
  <div id="app">
    <vmd-toolbar>
      <vmd-toolbar-row>
        <vmd-toolbar-section align="start">
          <span class="menu-wrap">
            <a href="#" class="material-icons">menu</a>
          </span>
          <span class="mdc-toolbar__title">Todo App</span>
        </vmd-toolbar-section>
      </vmd-toolbar-row>
    </vmd-toolbar>
    <!--
    <md-toolbar class="md-accent">
      <h1 class="md-title" style="flex: 1">Redro</h1>
      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>
    -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
body
  margin: 0
</style>
