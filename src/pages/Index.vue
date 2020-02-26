<template>
  <q-page class="bg-grey-2">
    <div v-masonry
         transition-duration="0.3s"
         item-selector=".service-card"
         class="masonry-container"
    >
      <div class="row">
        <q-card v-masonry-tile class="service-card q-ma-md" v-for="service in services" :key="service.slug">
          <q-card-section align="center">
            <q-btn flat unelevated :to="'/services/'+service.slug">
              <img :src="'statics/logos/'+service.logo" class="logo q-ma-sm">
            </q-btn>
            <div class="text-h6">{{service.name}}</div>
            <div class="text-subtitle2">
              <q-chip clickable color="grey" outline v-for="label in service.labels" :key="label">{{label}}</q-chip>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions align="around">
            <q-btn flat label="Read more" color="primary" :to="'/services/'+service.slug"/>
            <q-btn flat icon-right="open_in_new" label="Visit" @click="visit(service.url)" />
          </q-card-actions>
          <q-separator inset />
          <q-card-section >
            {{ service.description }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import services from '../../data/services.json'
export default {
  name: 'PageIndex',
  data () {
    return {
      services: services
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
    width: 100%;
    max-width: 250px;
  }
  .logo {
    max-height: 50px;
    width: auto;
    height: auto;
  }
</style>
