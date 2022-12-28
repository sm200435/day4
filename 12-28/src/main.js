import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import './util/flexible'
// 屏幕自适应分成24份
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'default-passive-events';
Vue.use(ElementUI);
Vue.config.productionTip = false
import jquery from "jquery";
 	Vue.prototype.$ = jquery;
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
