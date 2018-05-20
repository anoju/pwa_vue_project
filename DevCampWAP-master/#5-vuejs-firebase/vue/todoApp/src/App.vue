<template>
  <div id="app">
    <TodoHeader>
      <strong slot="pageTilte">TODO APP!!!</strong>
    </TodoHeader>
    <section id="container">
      <TodoInput v-on:addItem="addTodoItem"></TodoInput>
      <!-- <TodoList v-bind:프롭스속성이름 =  "상위 컴포넌트의 데이터" v=on:아래컴포넌트 이벤트="상위 컴포넌트 메서드명"></TodoList> -->
      <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeTodoItem"></TodoList>
      <TodoFooter v-on:clearItem="clearTodoItem"></TodoFooter>
    </section>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
  data: function(){
    return {
      todoItems : []
    }
  },
  methods: {
    addTodoItem: function(item){
      this.todoItems.push(item);
      localStorage.setItem(item,item);
    },
    removeTodoItem: function(item, index){
      //console.log('del')
      this.todoItems.splice(index,1);
      localStorage.removeItem(item);
    },
    clearTodoItem: function(){
      this.todoItems = [];
      localStorage.clear();
    }
  },
  created: function(){
    for(var i=0; i<localStorage.length; i++){
        this.todoItems.push(localStorage.key(i));
    }
  },
  components: {
    //'local-cmp':localCmp
    'TodoHeader':TodoHeader,
    'TodoInput':TodoInput,
    'TodoList':TodoList,
    'TodoFooter':TodoFooter
  }
}
</script>

<style>
body{background:#eee;margin: 0;font:1em/1.3 'Noto Sans KR';}
#header{padding:15px;box-shadow: 0 0 10px #ddd;text-align: center;background:#fff;}
#header h1 {margin: 0}
#header h1 img{width: 30px;vertical-align: middle;margin-right:0.5em}
#container{padding: 20px 15px;}

.blind{display: none}
.shadow {box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)}
</style>
