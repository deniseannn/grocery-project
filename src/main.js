import Vue from 'vue'
import App from './App.vue'
import PageContent from './components/PageContent.vue'
import AddItem from './components/AddItem.vue'

//Step 1 -- Import and use VueRouter
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

//Step 3 - Register Routes
const myRouter = new VueRouter({
  routes: [
    { path: '/', component: PageContent},
    { path: '/add', component: AddItem}
],
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')
