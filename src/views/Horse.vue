<template>
  <v-content>
    <v-data-table
      :headers="headers"
      background-color="primary"
      :items="items"
      :items-per-page="1000"
      class="elevation-2"
      :loading="!items.length"
      hide-default-footer
      :mobile-breakpoint="200"
    ></v-data-table>
  </v-content>
</template>

<script>
export default {
  computed: {
    headers: {
      get() {
        return this.$store.state.table.Horse.header || [];
      }
    },
    items: {
      get() {
        let ret = [];
        try {
          ret = this.$store.state.table.Horse.tbody.map((obj, i) => {
            obj.order = i + 1;
            return obj;
          });
        } catch {
          return ret;
        }
        return ret;
      }
    }
  },
  mounted() {
    this.fetch();
    // タブ切り替え
    this.watch = this.$store.watch(
      state => state.url,
      () => {
        this.$store.commit("delTable", "Horse");
        this.fetch();
      }
    );
  },
  destroyed() {
    this.watch();
  },
  methods: {
    fetch() {
      this.$store.dispatch("pogHorse", this.$store.state.url);
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
