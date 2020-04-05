<template>
  <q-layout view="lHr LpR fFf">
    <q-header bordered class="bg-blue-grey-10 text-white">
      <q-toolbar>
        <q-toolbar-title >
          <q-btn flat unelevated dense to="/">
            <img src="~assets/monster.svg" class="logo q-mx-sm" />
          </q-btn>
          <span class="text-h5 q-my-none q-mr-md text-yellow-5">Free SaaS Monster</span>
          <span class="text-subtitle1 q-mt-none text-italic gt-xs">Services that offer a plan with no monthly fee.</span>
        </q-toolbar-title>
        <!--<q-input dark v-model="search" @blur="searching=false" @focus="searching=true" rounded standout clearable type="search" placeholder="Search" class="search-bar q-ma-md" :style="searchbar">-->
          <!--<template v-slot:append>-->
            <!--<q-icon name="search" />-->
          <!--</template>-->
        <!--</q-input>-->
        <q-btn class="q-px-sm" dense outline rounded label="Add site" icon="add" @click="addService" />
        <q-btn dense flat round icon="eco" @click="right = !right" />
      </q-toolbar>
      <!--<q-toolbar>-->
        <!--<q-btn dense flat round icon="menu" @click="left = !left" />-->

        <!--<q-toolbar-title>-->
          <!--Free SaaS-->
        <!--</q-toolbar-title>-->
      <!--</q-toolbar>-->
    </q-header>

    <!--<q-drawer :width="350" v-model="left" side="left" bordered class="chat-panel">-->
      <!--<iframe class="gitter-frame" src="https://gitter.im/gitterHQ/gitter/~embed" frameborder="0"></iframe>-->
    <!--</q-drawer>-->
    <q-drawer v-model="right" side="right" bordered>
      <q-list>
        <q-item-label header>
          <div class="text-subtitle1">This website is running completely for free, using the following services</div>
        </q-item-label>
        <template v-for="service in services">
          <q-separator inset :key="'SERVICE.'+service.name" />
          <q-item clickable v-ripple :key="service.name" :to="'/services/'+service.slug">
            <q-item-section>
              <q-item-label lines="1">{{service.name}}</q-item-label>
              <q-item-label caption>{{service.category}}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import AddService from '../components/AddService.vue'

export default {
  data () {
    return {
      searching: false,
      left: true,
      right: false,
      search: '',
      services: [
        {
          name: 'Yandex metrica',
          category: 'Web analytics',
          slug: 'yandex-metrica'
        },
        {
          name: 'Form-Data',
          category: 'Forms backend',
          slug: 'form-data'
        },
        {
          name: 'FlatIcon',
          category: 'SVG Logo',
          slug: 'flaticon'
        },
        {
          name: 'Github pages',
          category: 'Web hosting',
          slug: 'github-pages'
        },
        {
          name: 'Github',
          category: 'Code version control',
          slug: 'github'
        }
      ]
    }
  },
  computed: {
    searchbar () {
      return { width: this.searching ? 250 + 'px' : '150px' }
    }
  },
  methods: {
    addService: function () {
      this.$q.dialog({
        component: AddService,
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
  .search-bar {
    transition: all 0.3s ease-out;
  }
  .logo {
    height: 46px;
    width: 46px;
  }
  .gitter-frame {
    width: 100%;
    height: 100%;
    margin: 0;
  }
</style>
