<template>
  <section id="container">
    <!-- <TodoInput v-on:addItem="addTodoItem"></TodoInput> -->
    <TodoInput></TodoInput>

    <!-- <TodoList v-bind:프롭스속성이름 =  "상위 컴포넌트의 데이터" v=on:아래컴포넌트 이벤트="상위 컴포넌트 메서드명"></TodoList> -->
    <!-- <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeTodoItem"></TodoList> -->
    <TodoList></TodoList>

    <!-- <TodoFooter v-on:clearItem="clearTodoItem"></TodoFooter> -->
    <TodoFooter></TodoFooter>
  </section>
</template>

<script>
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

//vuex 로 변경
export default {
  // data() {
  //   return {
  //     todoItems : []
  //   }
  // }, 
  // methods: {
  //   addTodoItem (item){
  //     this.todoItems.push(item);
  //     localStorage.setItem(item,item);
  //   },
  //   removeTodoItem (item, index){
  //     //console.log('del')
  //     this.todoItems.splice(index,1);
  //     localStorage.removeItem(item);
  //   },
  //   clearTodoItem (){
  //     this.todoItems = [];
  //     localStorage.clear();
  //   }
  // },
  // created (){
  //   for(var i=0; i<localStorage.length; i++){
  //       this.todoItems.push(localStorage.key(i));
  //   }
  // },
  components: {
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

