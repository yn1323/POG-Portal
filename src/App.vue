<template>
  <v-app>
    <v-content>
      <Tabs />
      <v-container class="px-8">
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
import Tabs from "@/components/Tabs";

export default {
  components: { Nav, Tabs },
  created() {
    // LSの設定値を取得
    let urls = JSON.parse(localStorage.getItem(this.$store.state.lsKey.url));
    if (urls && urls.length) {
      this.$store.commit("urls", urls);
      this.$store.commit("setUrlFromName", urls[0].name);
    } else {
      this.$router.push({ path: "/Config" });
    }
  }
};
</script>

<style lang="scss">
* :not(.v-icon) {
  font-family: "Hiragino Kaku Gothic Pro", "メイリオ", sans-serif !important;
}
</style>

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
* :not(.v-icon) {
  user-select: none;
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", "メイリオ", sans-serif !important;
}
html {
  overflow: auto !important;
}
</style>
