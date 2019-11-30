export default {
  urls: state => state.urls,
  name: state => state.urls.filter(obj => obj.name).map(obj => obj.name),
  url: state => state.urls.map(obj => obj.url).map(obj => obj.url)
};
