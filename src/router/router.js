let loadView = view => () => import(`@/views/${view}.vue`);
const FILES = [
  {
    file: "Top",
    text: "人別",
    icon: "fas fa-crown",
    meta: {
      showWithoutUrl: false
    }
  },
  {
    file: "Horse",
    text: "馬別",
    icon: "fas fa-horse",
    meta: {
      showWithoutUrl: false
    }
  },
  {
    file: "Recent",
    text: "直近レース",
    icon: "fas fa-space-shuttle",
    meta: {
      showWithoutUrl: false
    }
  },
  {
    file: "Config",
    text: "設定",
    icon: "fas fa-cogs",
    meta: {
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
