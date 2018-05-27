import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import ChartPlugin from './chart-plugin.js'

//어느 컴포넌트에서든지 전역에 변수 지정
//Vue.prototype.myChart = Chart;
Vue.use(ChartPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
