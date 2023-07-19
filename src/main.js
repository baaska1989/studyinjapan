import Vue from 'vue'
import App from './App.vue'
import router from "./routes/index";
import VueI18n from "vue-i18n";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(VueI18n);
Vue.config.devtools = true;
Vue.config.productionTip = false
import messages from "../src/helper/translate";

const i18n = new VueI18n({
  lazy: true,
  locale: "mn",
  messages,
});

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
