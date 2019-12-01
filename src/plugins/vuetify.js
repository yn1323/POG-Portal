import Vue from "vue";
import Vuetify from "vuetify/lib";
import theme from "./theme";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify, {
  iconfont: "fa"
});

export default new Vuetify({
  theme: {
    theme,
    options: {
      customProperties: true
    }
  }
});
