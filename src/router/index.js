import Vue from "vue";
import Router from "vue-router";
import routes from "@/router/router";

Vue.use(Router);
let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat([{ path: "*", redirect: "/Top" }])
});

export default router;
