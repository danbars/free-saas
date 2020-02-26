<template>
  <q-page class="bg-grey-2">
    <div class="row">
      <q-card class="service-card q-ma-md" >
        <!--<q-card-section class="bg-grey-3 q-pa-md" style="height:120px"></q-card-section>-->
        <q-card-section align="center">
          <q-btn flat icon="arrow_back" color="grey" to="/" round class="back-btn"></q-btn>
          <img :src="'statics/logos/'+service.logo" class="logo q-ma-lg">
          <div class="text-h4 q-my-md">{{service.name}}</div>
          <div class="text-subtitle2">
            <q-chip clickable color="grey" outline v-for="label in service.labels" :key="label">{{label}}</q-chip>
          </div>
          <q-btn fab color="primary" class="visit-btn" title="Visit website" icon-right="open_in_new" @click="visit(service.url)" >
          </q-btn>
        </q-card-section>
        <q-separator />
        <q-card-section >
          <div class="text-overline">
            Description
          </div>
          {{ service.description }}
        </q-card-section>
        <q-separator inset v-if="service.freeplan" />
        <q-card-section v-if="service.freeplan">
          <div class="text-overline">
            Free plan includes
          </div>
          {{ service.freeplan }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import services from '../../data/services.json'

export default {
  name: 'PageService',
  data () {
    return {}
  },
  computed: {
    service: function () {
      return services.find(s => s.slug === this.$route.params.slug)
    }
  },
  methods: {
    visit (url) {
      window.open(url + '?ref=free-saas', '_blank')
    }
  }
}
</script>

<style scoped>
  .service-card {
    margin: -50px auto;
    z-index: 9999;
    min-width: 540px;
    max-width: 100%;
    width: 540px;
  }
  .logo {
    max-height: 100px;
    width: auto;
    height: auto;
  }
  .visit-btn {
    position: absolute;
    top: 66px;
    right: -30px;
  }
  .back-btn {
    top: 20px;
    left: 20px;
    position: absolute;
  }
</style>
