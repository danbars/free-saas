<template>
  <q-page class="bg-grey-2">
    <div class="row">
      <q-card class="service-card q-ma-md" >
        <q-card-section align="center">
          <div class="q-mt-lg">
            <q-chip size="lg" color="white">
              <q-avatar color="green" text-color="white" icon="check" />
              <span class="text-h5">Thank you!</span>
            </q-chip>
          </div>
          <div class="text-subtitle1 q-my-lg">
            We have received your request and we will review it soon.
          </div>
          <div class="q-my-lg">
            <q-btn color="primary" label="Return to home page" rounded to="/"></q-btn>
          </div>
          <!--<div class="text-subtitle1">-->
            <!--Subscribe to be notified about new services that we add-->
          <!--</div>-->
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'ServiceAdded',
  data () {
    return {}
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
  .service-card {
    margin: 50px auto;
    min-width: 540px;
    max-width: 100%;
    width: 540px;
  }
  .logo {
    max-height: 100px;
    max-width: 250px;
    width: auto;
    height: auto;
  }
  .visit-btn {
    position: absolute;
    top: 66px;
    right: -30px;
  }
  .gitter-btn {
    position: absolute;
    top: 136px;
    right: -30px;
  }
  .back-btn {
    top: 20px;
    left: 20px;
    position: absolute;
  }
  .service-label:not(:last-of-type) {
    margin-right: 8px;
  }
  .gitter-frame {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  .gitter-panel {
    position: absolute;
    left: 0;
    top: 0;
    width: 400px;
    height: 100%;
  }

  @media (max-width: 480px) {
    .service-card {
      height: auto;
      width: auto;
      max-width: inherit;
      min-width: inherit;
      margin: 16px;
    }
    .visit-btn {
      position: absolute;
      top: 15px;
      right: 15px;
    }
    .gitter-panel {
      position: relative;
      width: auto;
      height: 600px;
    }
  }
</style>
