import axios from "axios";
// デバッグ用
const DEBUG = false;
const HOST = process.env.VUE_APP_HOST;

let showError = error => {
  // eslint-disable-next-line
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
      // eslint-disable-next-line
      if (DEBUG) console.log(response.data);
      callback(response.data);
    })
    .catch(error => {
      showError(error);
    });
};
export default {
  pogTop: ({ commit }, url) => {
    post("/pogTop", { url: url }, r =>
      commit("setTable", { page: "Top", data: r })
    );
  },
  pogEachP: ({ commit }, url) => {
    post("/pogEachP", { url: url }, r =>
      commit("setTable", { page: "EachPerson", data: r })
    );
  },
  pogHorse: ({ commit }, url) => {
    post("/pogHorse", { url: url }, r =>
      commit("setTable", { page: "Horse", data: r })
    );
  },
  // Herokuのタイムアウト回避
  pogRace: ({ commit }, url) => {
    post("/pogRace", { url: url }, r => {
      commit("setTable", { page: "Recent", data: r });
      commit("setCounter", r.urls.length);
      r.urls.forEach(raceUrl => {
        post("/pogRaceEach", { url: raceUrl, horse: r.names }, running => {
          let toRun = running.raceHorse.filter(horse => horse.detail);
          commit("setTableBody", { page: "Recent", tbody: toRun });
          commit("decrement");
        });
      });
    });
  }
};
