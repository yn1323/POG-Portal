let loadView = view => () => import(`@/views/${view}.vue`);
const FILES = [
  {
    file: "Top",
    text: "人別",
    icon: "fas fa-crown"
  },
  {
    file: "Horse",
    text: "馬別",
    icon: "fas fa-horse"
  },
  {
    file: "Recent",
    text: "直近レース",
    icon: "fas fa-space-shuttle"
  },
  {
    file: "Config",
    text: "設定",
    icon: "fas fa-cogs"
  }
];
let routes = FILES.map(each => {
  return {
    path: `/${each.file}`,
    name: each.file,
    text: each.text,
    icon: each.icon,
    component: loadView(each.file)
  };
});
export default routes;
