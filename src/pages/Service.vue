<template>
  <q-page class="bg-grey-2">
    <div class="row">
      <q-card class="service-card q-ma-md" >
        <!--<q-card-section class="bg-grey-3 q-pa-md" style="height:120px"></q-card-section>-->
        <q-card-section align="center">
          <q-btn flat icon="arrow_back" color="grey" v-go-back=" '/' " round class="back-btn"></q-btn>
          <img :src="'statics/logos/'+service.logo" class="logo q-ma-lg">
          <div class="text-h4 q-my-md">{{service.name}}</div>
          <div class="text-subtitle2">
            <q-btn rounded outlined dense clickable color="grey" size="sm" outline v-for="label in service.labels" :key="label" :to="'/tags/'+label" class="q-px-sm q-mt-sm service-label">{{label}}</q-btn>
          </div>
          <q-btn fab color="primary" class="visit-btn" title="Visit website" icon="open_in_new" @click="visit(service.url)" >
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
        <q-separator inset v-if="service.nexttier" />
        <q-card-section v-if="service.nexttier">
          <div class="text-overline">
            Next tier
          </div>
          {{ service.nexttier }}
        </q-card-section>
      </q-card>
    </div>
    <!--<div class="gitter-panel">-->
      <!--<iframe class="gitter-frame" :src="gitter" frameborder="0"></iframe>-->
    <!--</div>-->
  </q-page>
</template>

<script>
import services from '../../data/services.json'

export default {
  name: 'PageService',
  data () {
    return {
      serviceName: '',
      url: '',
      pricingUrl: '',
      description: '',
      freeplan: ''
    }
  },
  computed: {
    service: function () {
      return services.find(s => s.slug === this.$route.params.slug)
    },
    gitter: function () {
      return `https://gitter.im/free-saas/${this.service.slug}/~embed`
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
