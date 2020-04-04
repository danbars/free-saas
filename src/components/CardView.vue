<template>
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
            <q-btn rounded outlined dense clickable color="grey" size="sm" outline v-for="label in service.labels" :key="label" :to="'/tags/'+label" class="q-px-sm service-label">{{label}}</q-btn>
            <!--<q-chip clickable color="grey" outline v-for="label in service.labels" :key="label" :to="'/tags/'+label">{{label}}</q-chip>-->
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
        <q-separator inset v-if="service.freeplan"/>
        <q-card-section v-if="service.freeplan">
          <div class="text-overline">Free tier:</div>
          {{ service.freeplan }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardView',
  props: {
    services: Array
  },
  data () {
    return {}
  },
  methods: {
    visit (url) {
      window.open(url + '?ref=freesaas.monster', '_blank')
    }
  }
}
</script>

<style scoped>
  .service-card {
    width: 100%;
    max-width: 250px;
    transition: box-shadow 0.2s ease-out;
  }
  .service-card:hover {
    transition: box-shadow 0.2s ease-out;
    /*transform: scale(1.03);*/
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.17);
  }

  @media (max-width: 480px) {
    .service-card {
      height: auto;
      width: calc(100% - 32px);
      max-width: inherit;
    }
  }

  .logo {
    max-height: 50px;
    max-width: 170px;
    width: auto;
    height: auto;
  }
  .service-label {
    margin: 3px 4px;
  }
</style>
