import axios from "axios";
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
      callback(response.data);
    })
    .catch(error => {
      showError(error);
    });
};
export default {
  // eslint-disable-next-line
  pogTop: ({commit}, url, callback) => {
    post("/pogTop", { url: url }, r =>
      commit("setTable", { page: "Top", data: r })
    );
  }
};
