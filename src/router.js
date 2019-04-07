import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import Register from "./views/Register";
import Logout from "./views/Logout";
import Quiz_Home from "./views/Quiz_Home";
import Quiz_Create from "./views/Quiz_Create";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if(localStorage.token !== undefined) {
          next("/");
        }else {
          next();
        }
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/quiz",
      name: "quiz_home",
      component: Quiz_Home
    },
    {
      path: "/quiz/new",
      name: "quiz_create",
      component: Quiz_Create
    }
  ]
});
