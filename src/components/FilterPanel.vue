<template>
  <q-dialog ref="dialog" @hide="onDialogHide" position="left" full-height>
    <q-card>
      <q-list>
        <q-item-label header>Filter</q-item-label>
        <q-item dense v-for="(count, tag) in tags" :key="'sidebar-filter-'+tag">
          <q-btn flat :label="tag" :to="'/tags/'+tag">
            <q-badge class="q-ml-sm">{{count}}</q-badge>
          </q-btn>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
</template>

<script>
import services from '../../data/services.json'

export default {
  name: 'FilterPanel',
  props: {
    // ...your custom props
  },
  computed: {
    tags () {
      const tags = {}
      services.forEach(s => {
        (s.labels || []).forEach(l => {
          if (tags[l]) {
            tags[l]++
          } else {
            tags[l] = 1
          }
        })
      })
      // sort the object by inserting the keys by order
      const keys = Object.keys(tags).sort()
      const retTags = {
        All: services.length
      }
      keys.forEach(k => {
        retTags[k] = tags[k]
      })
      return retTags
    }
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
