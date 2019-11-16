<template>
  <v-bottom-navigation
    background-color="primary"
    v-model="selection"
    :fixed="true"
    :dark="true"
    grow
  >
    <v-btn
      v-for="(router, index) in routes"
      :key="index"
      :value="router.path"
      height="100%"
    >
      <span>{{ router.text }}</span>
      <v-icon>{{ router.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import routes from "@/router/router";
export default {
  computed: {
    routes: {
      get() {
        return routes;
      }
    },
    selection: {
      get() {
        return routes[0].path;
      },
      set(x) {
        this.$router.push(x);
      }
    }
  }
};
</script>
