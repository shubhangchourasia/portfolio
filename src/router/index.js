import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Resume from "../views/Resume.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Shubhang Chourasia - Frontend Developer",
    },
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
    meta: {
      title: "Shubhang Chourasia - Frontend Developer",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFound,
    meta: {
      title: "Page Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
