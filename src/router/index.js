import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Home")
  },
  {
    path: "/about",
    component: () => import("../views/About")
  },
  {
    path: "/cabinet",
    component: () => import("../views/Cabinet")
  },
  {
    path: "/order",
    component: () => import("../views/Order")
  },
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
