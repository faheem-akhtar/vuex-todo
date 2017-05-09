<template>
  <div>
    <md-dialog md-open-from="#fab" md-close-to="#fab" ref="addTodoDialog">
      <md-dialog-title>Add todo</md-dialog-title>

      <md-dialog-content>
        <form>
          <md-input-container>
            <label>Text</label>
            <md-textarea v-model="text"></md-textarea>
          </md-input-container>
        </form>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeDialog('addTodoDialog')">Close</md-button>
        <md-button class="md-primary" @click.native="addOnClick(text)">Create</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-button class="md-fab md-fab-bottom-right" id="fab" @click.native="openDialog('addTodoDialog')">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    ...mapActions('todos', [
      'addTodo'
    ]),
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    addOnClick (text) {
      this.addTodo({text})
      this.text = ''
      // this.closeDialog('addTodoDialog')
    }
  }
}
</script>
