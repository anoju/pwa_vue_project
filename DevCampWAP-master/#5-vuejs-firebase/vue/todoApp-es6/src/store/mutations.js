const addTodoItem = (state, item) => {
	state.todoItems.push(item);
	localStorage.setItem(item,item);
};
const removeTodoItem = (state, obj) =>{
	//console.log('del');
	state.todoItems.splice(obj.index,1);
	localStorage.removeItem(obj.item);
};
const clearTodoItem = (state) =>{
	state.todoItems = [];
	localStorage.clear();
};

export{addTodoItem,removeTodoItem,clearTodoItem}