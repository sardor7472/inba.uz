import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Vuelidate from 'vuelidate'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import vSelect from 'vue-select';

Vue.component('v-select', vSelect)

import 'vue-select/dist/vue-select.css';

// ============= style libs =============
import './assets/css/bootstrap-scss/bootstrap-grid.min.css'
import './assets/css/style.min.css'
import './assets/css/media.min.css'
// ============= style libs =============

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

// Vue.use(Vuelidate)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
