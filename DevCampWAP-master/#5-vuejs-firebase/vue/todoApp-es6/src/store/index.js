import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js'
import * as mutations from './mutations.js'
import todoItems from './modules/todoItems.js'

Vue.use(Vuex);

export default new Vuex.Store({
   modules:{
    todoItems
   }
});
