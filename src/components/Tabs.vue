<template>
  <v-tabs background-color="primary" centered dark fixed-tabs>
    <v-tabs-slider></v-tabs-slider>
    <v-tab
      v-for="label in labels"
      :key="label"
      @click="setUrl(label)"
      class="ellipsis"
    >
      {{ label }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  computed: {
    labels: {
      get() {
        return this.$store.getters.name;
      }
    }
  },
  methods: {
    setUrl(name) {
      this.$store.commit("setUrlFromName", name);
    }
  }
};
</script>

<style>
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
