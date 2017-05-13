<template>
  <section class="mdc-toolbar__section" :class="alignment">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ['align'],
  computed: {
    alignment () {
      return this.align ? `mdc-toolbar__section--align-${this.align}` : `mdc-toolbar__section--align-start`
    }
  }
}
</script>
