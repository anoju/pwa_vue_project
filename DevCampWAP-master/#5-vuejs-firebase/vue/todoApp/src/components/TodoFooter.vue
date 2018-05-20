<template>
  <div class="clearAllContainer">
      <button class="clearAllBtn" @click="clearTodo">Clear All</button>
  </div>
</template>

<script>
export default {
    methods:{
        clearTodo: function(){
            //console.log('clear')
            //localStorage.clear();
            //this.todoItems = [];
            this.$emit('clearItem');
        }
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
