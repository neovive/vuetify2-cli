<template>
  <v-app>
    <v-app-bar app elevate-on-scroll>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">Material</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed small color="primary"
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank">
          Latest
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
      <List/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import List from './components/List';

export default {
  name: 'App',
  components: {
    HelloWorld,
    List
  },
  data: () => ({
    //
  }),
};
</script>
