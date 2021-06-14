import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import "./assets/css/tailwind.css"
// import "./assets/css/style.css"
import Notie from "notie";

Vue.config.productionTip = false

Vue.prototype.$notie = Notie;

new Vue({
  router,
  // store,
  render: function (h) { return h(App) }
}).$mount('#app')
