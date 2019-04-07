import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    response: "",
    baseLoginUrl: "https://quiez-api.herokuapp.com/api/auth/login/",
    baseRegisterUrl:
      "https://quiez-api.herokuapp.com/api/auth/register/?format=json"
  },
  mutations: {
    setResponse(state, resp) {
      state.response = resp;
    }
  },
  actions: {
    register({ state, commit }, data) {
      axios
        .post(state.baseRegisterUrl, JSON.stringify(data), {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          commit("setResponse", response);
        })
        .catch(error => {
          commit("setResponse", error);
        });
    },
    login({ state, commit }, data) {
      axios
        .post(state.baseLoginUrl, JSON.stringify(data))
        .then(response => {
          commit("setResponse", response);
        })
        .catch(error => {
          commit("setResponse", error);
        });
    }
  }
});
