<template>
  <v-content>
    <v-data-table
      :headers="headers"
      background-color="primary"
      :items="items"
      :items-per-page="50"
      class="elevation-2"
      :loading="!items.length"
      :mobile-breakpoint="200"
      hide-default-footer
    ></v-data-table>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      url: this.$route.query.url
    };
  },
  computed: {
    headers: {
      get() {
        return this.$store.state.table.EachPerson.header || [];
      }
    },
    items: {
      get() {
        return this.$store.state.table.EachPerson.tbody || [];
      }
    }
  },
  mounted() {
    this.$store.commit("delTable", "EachPerson");
    this.fetch();
    // タブ切り替え
    this.watch = this.$store.watch(
      state => state.url,
      () => {
        this.$router.push("/Top");
      }
    );
  },
  destroyed() {
    this.watch();
  },
  methods: {
    fetch() {
      this.$store.dispatch("pogEachP", this.url);
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
</style>
