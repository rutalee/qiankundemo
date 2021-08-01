import { registerMicroApps, start } from "qiankun";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

registerMicroApps([
  {
    name: "projectManagement",
    entry:
      process.env.NODE_ENV === "production"
        ? "/projectManagement/"
        : "//localhost:9000/projectManagement/",
    container: "#project_management_container",
    activeRule: "/appIndex/develop/projectManagement",
  },
  {
    name: "productTree",
    // entry:
    //   process.env.NODE_ENV === "production"
    //     ? "/productTree/"
    //     : "//localhost:9001/productTree/",
    entry: '/productTree/',
    container: "#product_tree_container",
    activeRule: "/appIndex/develop/productTree",
  },
]);
// 启动 qiankun
start();
