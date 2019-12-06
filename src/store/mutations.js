export default {
  urls(state, payload) {
    state.urls = payload;
  },
  setUrlFromName(state, name) {
    let target = state.urls.filter(obj => obj.name === name);
    state.url = target[0].url;
  },
  setTable(state, payload) {
    state.table[payload.page] = payload.data;
  },
  setTableBody(state, payload) {
    // ポインタの書き換え
    let copied = {};
    Object.assign(copied, state.table[payload.page]);
    if (!copied.tbody) {
      copied.tbody = [];
    }
    payload.tbody.map(obj => copied.tbody.push(obj));
    state.table[payload.page] = copied;
  },
  delTable(state, tableName) {
    if (state.table[tableName].tbody) {
      state.table[tableName].tbody = [];
    }
  },
  setCounter(state, cnt) {
    state.cnt = cnt;
  },
  decrement(state) {
    state.cnt--;
  }
};
