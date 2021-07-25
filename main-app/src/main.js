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
    name: "productManagement",
    entry: "//localhost:9000",
    container: "#project_management_container",
    activeRule: "/appIndex/develop/projectManagement",
  },
]);
// 启动 qiankun
start();
