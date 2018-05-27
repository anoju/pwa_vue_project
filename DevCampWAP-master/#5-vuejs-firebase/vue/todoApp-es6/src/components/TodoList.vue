<template>
    <div>
    <transition-group name="list" tag="ul">
        <!-- <li v-for="(todoItem,index) in propsdata" class="shadow" v-bind:key="todoItem"> -->
          <li v-for="(todoItem,index) in this.$store.state.todoItems" class="shadow" v-bind:key="todoItem">
            <i class="checkBtn fa fa-check" aria-hidden="true"></i>
            {{index}} - {{todoItem}}
            <!-- <button class="removeBtn" type="button" @click="removeTodo(todoItem,index)">
                <i class="far fa-trash-alt" aria-hidden="true"></i>
            </button> -->
            <button class="removeBtn" type="button" @click="removeTodo({todoItem,index})">
                <i class="far fa-trash-alt" aria-hidden="true"></i>
            </button>
        </li>
    </transition-group>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    //props:['propsdata'],    
    methods: {
        ...mapMutations({
          removeTodo:'removeTodoItem'
        })
        //removeTodo(item,index){
            //this.$emit('removeItem',item, index);

            // const obj = {
            //   item: item,
            //   index: index
            // }
            // const obj = {
            //   item,
            //   index
            // }
            // this.$store.commit('removeTodoItem',obj)
            //this.$store.commit('removeTodoItem',{item,index});
        //}
    }
}
</script>

<style scoped>
  ul{
    list-style-type: none;
    padding-left: 0px;
    margin-top: 1.5em;
    text-align: left;
  }
  ul li {
    display: flex;
    min-height: 40px;
    height: 40px;
    line-height: 40px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 40px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn {
    background: none;
    border: 0 none;
    margin-left: auto;
    color: #de4343;
    font-size: 1.15em;
    cursor: pointer;
  }

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
