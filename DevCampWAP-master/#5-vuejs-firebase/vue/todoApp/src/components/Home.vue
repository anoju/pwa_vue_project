<template>
  <div>
    <input type="text" v-model="inputValue">
    <ul>
        <li v-for="item in items">
          {{item}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      inputValue:'2',
      items : ['a','b','c','d']
    }
  }
}
</script>

<style>

</style>
