<template>
  <q-layout view="lHr LpR fFf">

    <q-header bordered class="bg-orange text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <h5>Free SaaS</h5>
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar inset>
        <q-toolbar-title>
          <q-input v-model="search" filled type="search" placeholder="Search" class="search-bar q-ma-md">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar-title>
      </q-toolbar>
      <!--<q-toolbar>-->
        <!--<q-btn dense flat round icon="menu" @click="left = !left" />-->

        <!--<q-toolbar-title>-->
          <!--Free SaaS-->
        <!--</q-toolbar-title>-->
        <!--<q-btn dense flat round icon="menu" @click="right = !right" />-->
      <!--</q-toolbar>-->
    </q-header>

    <!--<q-drawer show-if-above v-model="left" side="left" bordered>-->
      <!--&lt;!&ndash; drawer content &ndash;&gt;-->
    <!--</q-drawer>-->
    <!--<q-drawer show-if-above v-model="right" side="right" bordered>-->
      <!--<q-list>-->
        <!--<q-item-label header> This website is using the following free services</q-item-label>-->
        <!--<template v-for="service in services">-->
          <!--<q-separator inset :key="service.name" />-->
          <!--<q-item clickable v-ripple :key="service.name">-->
            <!--<q-item-section>-->
              <!--<q-item-label lines="1">{{service.name}}</q-item-label>-->
              <!--<q-item-label caption>{{service.category}}</q-item-label>-->
            <!--</q-item-section>-->
          <!--</q-item>-->
        <!--</template>-->
      <!--</q-list>-->
    <!--</q-drawer>-->

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
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
  }
}
</script>
<style scoped>
  .search-bar {
    max-width: 600px;
  }
</style>
