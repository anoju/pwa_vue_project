<template>
    <section id="container">
        <p>{{addHeader}}</p>
        <p>{{this.$store.state.message}}</p>
        <p>{{this.$store.getters.getMessage}}</p>
    </section>
</template>

<script>
export default {
  data(){
    return{
      headerText:'data로 집어 넣은 텍스트!!'
    }
  },
  computed:{
    addHeader(){
      return this.headerText
    }
  },
  created(){
      console.log('aaa')
  }
}
</script>

<style>

</style>
