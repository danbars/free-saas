<template>
  <div v-masonry
       transition-duration="0.3s"
       item-selector=".service-card"
       class="masonry-container list-container"
  >
    <div class="row">
      <q-card v-masonry-tile class="service-card q-ma-md" v-for="service in services" :key="service.slug">
        <q-card-section horizontal >
          <q-btn flat unelevated :to="'/services/'+service.slug">
            <img :src="'statics/logos/'+service.logo" class="logo q-ma-sm">
          </q-btn>
          <q-separator vertical inset class="q-mr-md" />
          <div class="text-left card-main-wrapper">
            <div class="text-subtitle1">{{service.name}}</div>
            <div class="text-subtitle2">
              <q-btn rounded outlined dense clickable color="grey" size="sm" outline v-for="label in service.labels" :key="label" :to="'/tags/'+label" class="q-px-sm service-label">{{label}}</q-btn>
              <!--<q-chip clickable color="grey" outline v-for="label in service.labels" :key="label" :to="'/tags/'+label">{{label}}</q-chip>-->
            </div>
          </div>
          <q-space></q-space>
          <q-card-actions vertical class="actions-section">
            <q-btn unelevated dense round icon="chevron_right" :to="'/services/'+service.slug">
              <q-tooltip anchor="center left" self="center right">Read more</q-tooltip>
            </q-btn>
            <q-btn unelevated dense round icon="open_in_new" @click="visit(service.url)" >
              <q-tooltip anchor="center left" self="center right">Website</q-tooltip>
            </q-btn>
          </q-card-actions>
        </q-card-section>
        <q-separator />
        <q-card-section >
          {{ service.description }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  props: {
    services: Array
  },
  data () {
    return {}
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
    width: calc(100% - 32px);
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
  .list-container {
    /*border: 1px solid grey;*/
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    position: relative;
  }
  .card-main-wrapper {
    align-self: center;
  }
</style>
