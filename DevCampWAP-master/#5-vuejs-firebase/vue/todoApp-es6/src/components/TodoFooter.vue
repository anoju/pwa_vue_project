<template>
  <div class="clearAllContainer">
      <button class="clearAllBtn" @click="clearTodo">Clear All</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    methods:{        
        /*
        clearTodo(){
            //this.$emit('clearItem');
            this.$store.commit('clearTodoItem');
        }
        */

       //화면에서 특정 이벤트 발생 -> 현재 컴포넌트의 메서드로 연결 -> 메서드와 연결된 Vuex의 Mutations
        ...mapMutations({
            clearTodo : 'clearTodoItem'
        })
    }
}
</script>

<style scoped>
  .clearAllContainer {
      text-align: right;
  }
  .clearAllBtn {
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    border: 0 none;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
    color: #e20303;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }
</style>
