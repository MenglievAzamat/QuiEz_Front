import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import title from "./components/SiteTitle";

Vue.config.productionTip = false;

Vue.component("vue-title", title);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
