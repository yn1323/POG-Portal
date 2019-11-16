<template>
  <v-app>
    <v-content>
      <transition mode="out-in">
        <router-view />
      </transition>
      <Nav />
    </v-content>
  </v-app>
</template>

<script>
import Nav from "@/components/Navigation";

export default {
  components: { Nav }
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>

<style>
* {
  user-select: none;
}
html {
  overflow: auto !important;
}
</style>
