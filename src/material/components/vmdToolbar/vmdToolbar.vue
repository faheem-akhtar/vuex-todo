<template>
  <div class="mdc-toolbar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
// $mdc-theme-primary: #9c27b0;
// $mdc-theme-accent: #ffab40;
// $mdc-theme-background: #fff;
@import '@material/toolbar/mdc-toolbar';
.menu-wrap {
  padding-right: 24px;
  text-decoration: none;
}
a {
  text-decoration: none;
}
</style>
