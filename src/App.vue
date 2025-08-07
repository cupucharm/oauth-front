<template>
  <v-app>
    <HeaderComponent />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  import HeaderComponent from './components/HeaderComponent.vue';

  components: {
    HeaderComponent,
  },
};
</script>
