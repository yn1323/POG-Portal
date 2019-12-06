<template>
  <v-content>
    <v-data-table
      :headers="headers"
      background-color="primary"
      :items="items"
      :items-per-page="1000"
      class="elevation-2"
      :loading="loading"
      hide-default-footer
    ></v-data-table>
  </v-content>
</template>

<script>
export default {
  computed: {
    loading: {
      get() {
        return this.$store.state.cnt ? true : false;
      }
    },
    headers: {
      get() {
        return this.$store.state.table.Recent.header || [];
      }
    },
    items: {
      get() {
        return this.$store.state.table.Recent.tbody || [];
      }
    }
  },
  mounted() {
    this.fetch();
    // タブ切り替え
    this.watch = this.$store.watch(
      state => state.url,
      () => {
        this.$store.commit("delTable", "Recent");
        this.fetch();
      }
    );
  },
  destroyed() {
    this.watch();
  },
  methods: {
    fetch() {
      this.$store.dispatch("pogRace", this.$store.state.url);
    }
  }
};
</script>

<style>
/* v-data-table */
.v-data-table-header {
  background: var(--v-primary-base);
}
.v-data-table thead tr:last-child th {
  color: white;
}
/* .v-data-table tbody td {
    font-size: 12px !important;
} */
.v-data-table-header-mobile {
  display: none;
}
</style>
