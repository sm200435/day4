import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import './util/flexible'
// 屏幕自适应分成24份

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
