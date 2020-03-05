<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="bg-white add-service-card">
      <q-card-section>
        <div class="text-h6 q-my-md">Feed the monster. Add a service.</div>
        <div class="text-overtext text-red-6 text-weight-bolder">Please read:</div>
        <blockquote class="text-overtext q-my-md text-blue-6 text-weight-medium">Qualified services are those that are offered in Software-as-a-Service model, have a free tier (and not just free trial), and are useful for more than just development phase</blockquote>
        <q-form
          action="https://www.form-data.com/_functions/submit/ptcsz435k2rqatafroapc"
          method="post"
          ref="addServiceForm"
          autocomplete="off"
          @submit="submitForm"
        >
          <q-input
            v-model="email"
            filled
            class="q-mb-sm"
            name="email"
            label="Your email"
            hint="Optional. Only if you want to get notified when your service is added."
          />

          <q-input
            v-model="serviceName"
            filled
            class="q-mb-sm"
            name="serviceName"
            label="Service Name"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            type="url"
            filled
            class="q-mb-sm"
            v-model="url"
            name="url"
            label="Service home page"
            placeholder="https://example.com"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            type="url"
            filled
            class="q-mb-sm"
            v-model="pricingUrl"
            name="pricingUrl"
            label="Service pricing page"
            placeholder="https://example.com/pricing"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            v-model="description"
            filled
            class="q-mb-sm"
            name="description"
            label="Short description"
            hint="You can copy the tag line from the website"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            v-model="freeplan"
            filled
            class="q-mb-sm"
            name="freeplan"
            label="Main benefits of free plan"
            hint="Copy the main benefits from the free-plan benefits page"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            v-model="nexttier"
            filled
            class="q-mb-sm"
            name="nexttier"
            label="What is the price of the next paid tier"
          />
          <div class="q-mt-md">
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Cancel" color="primary" flat class="q-ml-sm" @click="hide" />
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
