<template>
  <v-content>
    <v-col
      wrap
      justify="justify-space-around"
      v-for="(url, index) in urls"
      :key="index"
    >
      <v-row>
        <v-col>
          <v-text-field
            :label="nameText"
            v-model="urls[index].name"
            :maxLength="maxLenName"
            @input="save"
            color="primary"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10">
          <v-text-field
            :label="urlText"
            v-model="urls[index].url"
            :maxLength="maxLenUrl"
            @input="save"
            color="primary"
            solo
          />
        </v-col>
        <v-col cols="2" v-if="index !== 0">
          <v-btn
            class="mx-3"
            dark
            color="primary"
            @click="changeOrder(index)"
          >
            <v-icon dark>fas fa-angle-up</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-col>
    <v-col>
      <v-row justify="end">
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          @click="addEmptyTextbox(urls)"
        >
          <v-icon dark>fas fa-plus</v-icon>
        </v-btn>
      </v-row>
    </v-col>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      nameText: "ページ名",
      urlText: "POG-PORTAL URL",
      maxLenName: 20,
      maxLenUrl: 255
    };
  },
  computed: {
    urls: {
      get() {
        // 中身があるものだけ表示
        let urls = this.$store.getters.urls;
        // 空オブジェクトも表示する
        if (!urls.length) {
          this.addEmptyTextbox(urls);
        }
        return urls;
      },
      set(x) {
        this.$store.commit("urls", x);
      }
    }
  },
  methods: {
    save() {
      // 中身があるものだけstoreに保存
      let urls = this.filterUrl(this.urls);
      this.urls = urls;
      // ローカルストレージ
      localStorage.setItem(this.$store.state.lsKey.url, JSON.stringify(urls));
      // 1つしかない場合はすぐに追加
      if (urls.length === 1) {
        this.$store.commit("setUrlFromName", urls[0].name);
      }
    },
    addEmptyTextbox(obj) {
      obj.push({ name: "", url: "" });
    },
    filterUrl(urls) {
      return urls.filter(obj => obj.name || obj.url);
    },
    // URLの順番変更
    changeOrder(index){
      this.$store.commit("changeUrlOrder", index)
      // LSに反映
      this.save();
    }
  }
};
</script>
