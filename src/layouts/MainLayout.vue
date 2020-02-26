<template>
  <q-layout view="lHr LpR fFf">

    <q-header bordered class="bg-blue-grey-10 text-white">
      <q-toolbar>
        <q-toolbar-title >
          <q-img src="~assets/free-saas-logo.svg" class="logo q-mx-sm"></q-img>
          <span class="text-h5 q-my-none q-mr-md">Free SaaS</span>
          <span class="text-subtitle1 q-mt-none text-italic">Services that offer a plan with no monthly fee.</span>
        </q-toolbar-title>
        <q-input dark v-model="search" @blur="searching=false" @focus="searching=true" rounded standout clearable type="search" placeholder="Search" class="search-bar q-ma-md" :style="searchbar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn dense flat round icon="eco" @click="right = !right" />
      </q-toolbar>
      <!--<q-toolbar>-->
        <!--<q-btn dense flat round icon="menu" @click="left = !left" />-->

        <!--<q-toolbar-title>-->
          <!--Free SaaS-->
        <!--</q-toolbar-title>-->
      <!--</q-toolbar>-->
    </q-header>

    <q-drawer :width="350" v-model="left" side="left" bordered class="chat-panel">
      <!-- drawer content -->
    </q-drawer>
    <q-drawer v-model="right" side="right" bordered>
      <q-list>
        <q-item-label header>
          <div class="text-subtitle1">This website is running completely for free, using the following services</div>
        </q-item-label>
        <template v-for="service in services">
          <q-separator inset :key="'SERVICE.'+service.name" />
          <q-item clickable v-ripple :key="service.name">
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
export default {
  data () {
    return {
      searching: false,
      left: true,
      right: false,
      search: '',
      services: [
        {
          name: 'Google analytics',
          category: 'Web analytics'
        },
        {
          name: 'Form-Data',
          category: 'Forms backend'
        },
        {
          name: 'Airtable',
          category: 'Collaborative database'
        },
        {
          name: 'Github pages',
          category: 'Web hosting'
        },
        {
          name: 'Github',
          category: 'Code version control'
        }
      ]
    }
  },
  computed: {
    searchbar () {
      return { width: this.searching ? 250 + 'px' : '150px' }
    }
  }
}
</script>
<style scoped>
  .search-bar {
    transition: all 0.3s ease-out;
  }
  .logo {
    height: 30px;
    width: 30px;
  }
</style>
