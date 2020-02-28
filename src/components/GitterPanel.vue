<template>
  <q-dialog ref="dialog" @hide="onDialogHide" persistent seamless position="left" full-height>
    <iframe class="gitter-frame" src="https://gitter.im/gitterHQ/gitter/~embed" frameborder="0"></iframe>
  </q-dialog>
</template>

<script>
export default {
  name: 'GitterPanel',
  props: {
    // ...your custom props
  },

  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show () {
      this.$refs.dialog.show()
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide () {
      this.$refs.dialog.hide()
    },

    onDialogHide () {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit('hide')
    },

    onOKClick () {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit('ok')
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide()
    },

    onCancelClick () {
      // we just need to hide dialog
      this.hide()
    }
  }
}
</script>

<style scoped>
  .gitter-frame {
    width: 100%;
    height: 100%;
    margin: 0;
    z-index: 9999999;
  }
</style>
