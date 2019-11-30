export default {
  urls(state, payload) {
    state.urls = payload;
  },
  setUrlFromName(state, name) {
    let target = state.urls.filter(obj => obj.name === name);
    state.url = target[0].url;
  }
};
