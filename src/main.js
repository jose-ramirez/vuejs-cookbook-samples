import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Card from "@/components/Card.vue";

Vue.config.productionTip = false;
Vue.component('Card', Card);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
