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
          <div class="text-h6 card-main-wrapper">
            {{service.name}}
          </div>
          <q-space></q-space>
          <q-card-actions class="actions-section">
            <q-btn flat rounded color="white" class="bg-primary q-px-sm" label="Visit" icon-right="open_in_new" @click="visit(service.url)" >
              <q-tooltip>Visit website</q-tooltip>
            </q-btn>
            <q-btn flat rounded label="more" color="white" class="bg-grey-6"  icon-right="chevron_right" :to="'/services/'+service.slug" >
              <q-tooltip>Read more</q-tooltip>
            </q-btn>

          </q-card-actions>
        </q-card-section>
        <q-card-section>
          <div class="q-ml-sm">
            <div class="text-subtitle1">
              <q-btn rounded outlined dense clickable color="grey" size="sm" outline v-for="label in service.labels" :key="label" :to="'/tags/'+label" class="q-px-sm service-label">{{label}}</q-btn>
            </div>
          </div>
          <q-space></q-space>
          <!--<div class="on-right">-->
            <!--<span class="text-bold">Added:</span>-->
            <!--{{ formattedDate(service.added) }}-->
          <!--</div>-->
        </q-card-section>
        <q-separator />
        <q-card-section class="text-body1">
          {{ service.description }}
        </q-card-section>
        <q-separator inset v-if="service.freeplan || service.nexttier"/>
        <q-card-section v-if="service.freeplan || service.nexttier">
          <div  v-if="service.freeplan">
            <span class="text-bold">Free tier:</span>
            {{ service.freeplan }}
          </div>
          <div  v-if="service.nexttier">
            <span class="text-bold">Next tier:</span>
            {{ service.nexttier }}
          </div>
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
    },
    formattedDate (date) {
      const d = new Date(date)
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
      const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d)
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
      return `${mo} ${da}, ${ye}`
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
