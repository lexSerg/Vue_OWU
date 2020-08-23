import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

export const eventBus = new Vue();
export const eventBusInpCurrentVal = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
