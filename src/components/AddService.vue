<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="bg-white add-service-card">
      <q-card-section>
        <div class="text-h6 q-my-md">Feed the monster. Add a service.</div>
        <blockquote class="text-overtext q-my-md text-blue-6 text-weight-medium">Qualified services are those that are offered in Software-as-a-Service model, have a free tier (and not just free trial), and are useful for more than just development phase</blockquote>
        <q-form
          action="https://www.form-data.com/_functions/submit/ptcsz435k2rqatafroapc"
          method="post"
          ref="addServiceForm"
          autocomplete="off"
          @submit="submitForm"
        >
          <q-input
            v-model="serviceName"
            name="serviceName"
            label="Service Name"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            type="url"
            v-model="url"
            name="url"
            label="Service home page"
            placeholder="https://example.com"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            type="url"
            v-model="pricingUrl"
            name="pricingUrl"
            label="Service pricing page"
            placeholder="https://example.com/pricing"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            v-model="description"
            name="description"
            label="Short description"
            hint="You can copy the tag line from the website"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            v-model="freeplan"
            name="freeplan"
            label="Main benefits of free plan"
            hint="Copy the main benefits from the free-plan benefits page"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            v-model="nexttier"
            name="nexttier"
            label="What is the price of the next paid tier"
          />

          <q-input
            v-model="email"
            name="email"
            label="Your email"
            hint="Not mandatory. Only if you want to get notified when your service is added (or rejected)"
          />

          <div class="q-mt-md">
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'AddService',
  props: {
    // ...your custom props
  },
  data () {
    return {
      serviceName: '',
      url: '',
      pricingUrl: '',
      description: '',
      freeplan: '',
      nexttier: '',
      email: ''
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
    },
    submitForm (evt) {
      evt.target.submit()
    }
  }
}
</script>

<style scoped>
  .add-service-card {
    max-width: 100%;
    width: 500px;
  }
</style>
