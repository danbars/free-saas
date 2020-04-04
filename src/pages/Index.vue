<template>
  <q-page class="bg-grey-2">
    <q-toolbar class="bg-blue-grey-7 fixed filter-toolbar" >
      <q-btn icon="filter_list" flat round color="white" @click="showFilter"></q-btn>
      <!--<q-separator dark vertical inset class="q-mx-md gt-sm" ></q-separator>-->
      <!--<q-btn-toggle-->
        <!--v-model="viewModel"-->
        <!--class="view-toggle gt-sm"-->
        <!--size="md"-->
        <!--rounded-->
        <!--unelevated-->
        <!--color="blue-grey-7"-->
        <!--text-color="white"-->
        <!--toggle-color="white"-->
        <!--toggle-text-color="black"-->
        <!--:options="[-->
          <!--{icon: 'dashboard', value: 'cards'},-->
          <!--{icon: 'view_list', value: 'list'}-->
        <!--]"-->
      <!--/>-->
      <q-separator dark vertical inset class="q-mx-md" v-if="tag"/>
      <q-breadcrumbs class="text-yellow-4" active-color="white" v-if="tag">
        <q-breadcrumbs-el label="Home" icon="home" to="/" />
        <q-breadcrumbs-el :label="tag"  />
      </q-breadcrumbs>
      <q-separator dark vertical inset class="q-mx-md gt-sm" v-if="relatedTags.length && tag"/>
      <div v-if="relatedTags.length" class="gt-sm">
        <span class="text-caption text-white">Related:</span>
        <q-btn rounded outlined dense clickable color="white" size="sm" outline v-for="label in relatedTags" :key="'related-'+label" :to="'/tags/'+label" class="q-px-sm service-label">{{label}}</q-btn>
      </div>
    </q-toolbar>
    <!--<component :is="viewComponent" :services="services"></component>-->
    <list-view :services="services"></list-view>
  </q-page>
</template>

<script>
import services from '../../data/services.json'
import FilterPanel from '../components/FilterPanel.vue'
// import CardView from '../components/CardView.vue'
import ListView from '../components/ListView.vue'

export default {
  name: 'PageIndex',
  components: {
    ListView
  },
  data () {
    return {
      viewModel: 'list'
    }
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
        return []
      }
      const allTags = []
      this.services.map(s => s.labels).forEach(a => allTags.push(...a))
      const o = {}
      allTags.forEach(i => { if (i !== this.tag) { o[i] = i } })
      return Object.keys(o).sort()
    }
    //    viewComponent () {
    //      return this.viewModel === 'cards' ? CardView : ListView
    //    }
  },
  methods: {
    showFilter () {
      this.$q.dialog({
        component: FilterPanel,
        parent: this
      }).onOk(() => {
        console.log('OK')
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('Called on OK or Cancel')
      })
    }
  }
}
</script>

<style scoped>
  .view-toggle {
    border: 1px solid white;
  }
  .service-label {
    margin: 3px 4px;
  }
  .filter-toolbar {
    z-index: 5;
  }
</style>
