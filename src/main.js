import Vue from 'vue';
import { PiniaVuePlugin } from 'pinia';
import App, { pinia } from './App.vue';

Vue.config.productionTip = false;

Vue.use(PiniaVuePlugin);
new Vue({
  pinia,
  render: (h) => h(App),
}).$mount('#app');
