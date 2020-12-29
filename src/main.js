/*
 入口js
 */
import Vue from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router'
// 引入store
import store from './store'


new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store //使用vuex
})
