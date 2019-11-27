<template>
  <v-content>
    <v-col
      wrap
      justify="justify-space-around"
      v-for="(url, index) in urls"
      :key="index"
    >
      <v-row>
        <v-text-field
          :label="nameText"
          v-model="urls[index].name"
          @input="save"
          color="primary"
        />
      </v-row>
      <v-row>
        <v-text-field
          :label="urlText"
          v-model="urls[index].url"
          @input="save"
          color="primary"
          solo
        />
      </v-row>
      <v-divider></v-divider>
    </v-col>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      nameText: "ページ名",
      urlText: "POG-PORTAL URL"
    };
  },
  computed: {
    urls: {
      get() {
        return this.$store.getters.urls;
      },
      set(x) {
        this.$store.commit("urls", x);
      }
    }
  },
  methods: {
    save() {
      localStorage.setItem(
        this.$store.state.lsKey.url,
        JSON.stringify(this.urls)
      );
    }
  }
};
</script>
