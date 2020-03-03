import Vue from 'vue'
import App from './App.vue'
import CustomButton from './CustomButton.vue'

Vue.config.productionTip = false
Vue.component('custBtn',CustomButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
