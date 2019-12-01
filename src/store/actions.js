import axios from "axios";
// デバッグ用
const DEBUG = false;
// TODO: productionでの切り替え
const HOST = "http://0.0.0.0:5000";

let showError = error => {
  console.error(error);
};
let post = (path, x, callback) => {
  axios
    .post(`${HOST}${path}`, x)
    .then(response => {
      if (response.data.ERROR) {
        showError(response.data.ERROR);
        return false;
      }
      if (DEBUG) console.log(response.data);
      callback(response.data);
    })
    .catch(error => {
      showError(error);
    });
};
export default {
  // eslint-disable-next-line
  pogTop: ({commit}, url) => {
    post("/pogTop", { url: url }, r =>
      commit("setTable", { page: "Top", data: r })
    );
  },
  // eslint-disable-next-line
  pogEachP: ({ commit }, url) => {
    post("/pogEachP", { url: url }, r =>
      commit("setTable", { page: "EachPerson", data: r })
    );
  }
};
