<template>
  <v-app>
    <v-content>
      <v-container>
        <transition mode="out-in">
          <router-view />
        </transition>
      </v-container>
      <Nav />
    </v-content>
  </v-app>
</template>

<script>
import Nav from "@/components/Navigation";

export default {
  components: { Nav },
  created() {
    // LSの設定値を取得
    let urls = localStorage.getItem(this.$store.state.lsKey.url);
    this.$store.commit("urls", JSON.parse(urls));
  }
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
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", "メイリオ", sans-serif;
}
html {
  overflow: auto !important;
}
</style>
