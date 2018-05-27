import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        for(var i=0; i<localStorage.length; i++){
            arr.push(localStorage.key(i));
        }
        return arr;
    }
}
//storage.fetch();

export default new Vuex.Store({
    state:{
        message:'Vuex state로 넣은 message!!',
        todoItems: storage.fetch()
    },
    getters: {
        getMessage(state) {
            return state.message;
        }
    },
    mutations: {
        addTodoItem (state, item){
            state.todoItems.push(item);
            localStorage.setItem(item,item);
        },
        removeTodoItem (state, obj){
            console.log('del');
            state.todoItems.splice(obj.index,1);
            localStorage.removeItem(obj.item);
        },
        clearTodoItem (state){
            state.todoItems = [];
            localStorage.clear();
        }
    }
    // actions
});
