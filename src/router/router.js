let loadView = view => () => import(`@/views/${view}.vue`);
const FILES = [
  {
    file: "Top",
    text: "人別",
    icon: "fas fa-crown",
    meta: {
      nav: true,
      showWithoutUrl: false
    }
  },
  {
    file: "Horse",
    text: "馬別",
    icon: "fas fa-horse",
    meta: {
      nav: true,
      showWithoutUrl: false
    }
  },
  {
    file: "Recent",
    text: "直近レース",
    icon: "fas fa-space-shuttle",
    meta: {
      nav: true,
      showWithoutUrl: false
    }
  },
  {
    file: "Config",
    text: "設定",
    icon: "fas fa-cogs",
    meta: {
      nav: true,
      showWithoutUrl: true
    }
  },
  {
    file: "Each",
    text: "Each",
    icon: "",
    meta: {
      nav: false,
      showWithoutUrl: true
    }
  }
];
let routes = FILES.map(each => {
  return {
    path: `/${each.file}`,
    name: each.file,
    text: each.text,
    icon: each.icon,
    meta: each.meta,
    component: loadView(each.file)
  };
});
export default routes;
