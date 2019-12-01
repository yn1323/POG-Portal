<template>
  <v-content>
    <v-data-table
      :headers="headers"
      background-color="primary"
      :items="items"
      :items-per-page="50"
      class="elevation-2"
      :loading="!items.length"
      hide-default-footer
      :mobile-breakpoint="200"
      @click:row="hoge"
    ></v-data-table>
  </v-content>
</template>

<script>
export default {
  computed: {
    headers: {
      get() {
        return this.$store.state.table.Top.header || [];
      }
    },
    items: {
      get() {
        return this.$store.state.table.Top.tbody || [];
      }
    }
  },
  mounted() {
    this.fetch();
    // タブ切り替え
    this.watch = this.$store.watch(
      state => state.url,
      () => {
        this.$store.commit("delTable", "Top");
        this.fetch();
      }
    );
  },
  destroyed() {
    this.watch();
  },
  methods: {
    fetch() {
      this.$store.dispatch("pogTop", this.$store.state.url);
    },
    hoge(row) {
      this.$router.push({ path: "/Each", query: { url: row.url } });
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
</style>
