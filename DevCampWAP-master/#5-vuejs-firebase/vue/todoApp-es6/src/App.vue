<template>
  <div id="app">
    <TodoHeader>
      <strong slot="pageTilte">ANOJU!!!</strong>
    </TodoHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';

export default {  
  components: {
    TodoHeader
  }
}
</script>

