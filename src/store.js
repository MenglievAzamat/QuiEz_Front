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
    async register({ state, commit }, data) {
      return await axios
        .post(state.baseRegisterUrl, JSON.stringify(data), {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          commit("setResponse", response);
          alert("Успешно");
          this.$router.push("/");
        })
        .catch(error => {
          commit("setResponse", error);
          alert("Пользователь уже зарегистрирован!");
        });
    },
    async login({ state, commit }, data) {
      return await axios
        .post(state.baseLoginUrl, JSON.stringify(data), {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          commit("setResponse", response.data.key);
          localStorage.setItem('token', this.response);
        })
        .catch(error => {
          commit("setResponse", error);
          localStorage.removeItem("token");
          alert("Такого пользователя не существует!");
        });
    }
  }
});
