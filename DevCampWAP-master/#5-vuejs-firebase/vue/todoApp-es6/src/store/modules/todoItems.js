const storage = {
    fetch(){
        const arr = [];
        for(var i=0; i<localStorage.length; i++){
            arr.push(localStorage.key(i));
        }
        return arr;
    }
}

const state = { 
	todoItems: storage.fetch()
};
const getters = { 
	getMessage(state) {
		return state.message;
	}
};
const mutations = {
	addTodoItem (state, item) {
		state.todoItems.push(item);
		localStorage.setItem(item,item);
	},
	removeTodoItem (state, obj){
		//console.log('del');
		state.todoItems.splice(obj.index,1);
		localStorage.removeItem(obj.item);
	},
	clearTodoItem (state) {
		state.todoItems = [];
		localStorage.clear();
	}	
};
export default{
	namespaced: true,
	state,
	getters,
	mutations
}