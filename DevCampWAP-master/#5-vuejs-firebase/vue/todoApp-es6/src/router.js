import Vue from 'vue'
import VueRouter from 'vue-router'

//사용할 컴포넌트 로딩
import TodoBody from './components/TodoBody.vue'
import BarChart from './components/charts/BarChart.vue'
import Store from './components/store.vue'

Vue.use(VueRouter);

const routes = [
    {
      path:'/',
      component:TodoBody
    },
    {
      path:'/chart',
      component:BarChart
    },
    {
      path:'/store',
      component:Store
    }
];

export default new VueRouter({
  mode:'history',
  routes
});