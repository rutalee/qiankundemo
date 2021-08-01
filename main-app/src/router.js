import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import ProjectManagement from "./views/ProjectManagement.vue";
import ProductTree from "./views/ProductTree.vue";
import Develop from "./views/Develop.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: { name: "AppIndex" },
    },
    {
      path: "/appIndex",
      name: "AppIndex",
      component: Index,
      redirect: { name: "Home" },
      children: [
        {
          path: "home",
          name: "Home",
          component: () => import("./views/Home.vue"),
        },
        // 涉及到需要加载微应用的路由，不可以使用懒加载去加载组件，否则页面刷新后会导致加载微应用先于组件加载，微应用无法进入对应的组件容器
        {
          path: "develop",
          name: "Develop",
          component: Develop,
          children: [
            // 用于加载微应用容器组件的路由
            {
              path: "projectManagement",
              name: "ProjectManagement",
              component: ProjectManagement,
            },
            // 用于加载微应用的路由
            {
              path: "projectManagement/*",
              component: ProjectManagement,
            },
            {
              path: "productTree",
              name: "ProductTree",
              component: ProductTree,
            },
            {
              path: "productTree/*",
              component: ProductTree,
            },
          ],
        },
      ],
    },
    {
      path: "/404Error",
      name: "404Error",
      component: () => import("./views/404Error.vue"),
    },
  ],
});

export default router;
