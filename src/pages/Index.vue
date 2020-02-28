<template>
  <q-page class="bg-grey-2">
    <q-toolbar class="bg-blue-grey-7" v-if="tag">
      <q-breadcrumbs class="text-yellow-4" active-color="white">
        <q-breadcrumbs-el label="Home" icon="home" to="/" />
        <q-breadcrumbs-el :label="tag"  />
      </q-breadcrumbs>
      <q-separator dark vertical inset class="q-mx-md" v-if="relatedTags.length"/>
      <q-toolbar-section>
        <span class="text-caption text-white" v-if="relatedTags.length">Related:</span>
        <q-btn rounded outlined dense clickable color="white" size="sm" outline v-for="label in relatedTags" :key="'related-'+label" :to="'/tags/'+label" class="q-px-sm q-ml-sm service-label">{{label}}</q-btn>
      </q-toolbar-section>
    </q-toolbar>
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
              <q-btn rounded outlined dense clickable color="grey" size="sm" outline v-for="label in service.labels" :key="label" :to="'/tags/'+label" class="q-px-sm q-mt-sm service-label">{{label}}</q-btn>
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
    return {}
  },
  computed: {
    services () {
      if (!this.tag) {
        return services
      }
      return services.filter(s => s.labels && s.labels.includes(this.tag))
    },
    tag () {
      return this.$route.params.tag
    },
    relatedTags () {
      if (!this.tag) {
        return null
      }
      const allTags = []
      this.services.map(s => s.labels).forEach(a => allTags.push(...a))
      const o = {}
      allTags.forEach(i => { if (i !== this.tag) { o[i] = i } })
      return Object.keys(o).sort()
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
    /*transition: all 0.1s ease-out;*/
  }
  .service-card:hover {
    transition: all 0.1s ease-out;
    transform: scale(1.03);
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);
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
  .service-label:not(:last-of-type) {
    margin-right: 8px;
  }
</style>
