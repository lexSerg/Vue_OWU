import Vue from 'vue'
import TodoVue from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(TodoVue),
}).$mount('#app')
