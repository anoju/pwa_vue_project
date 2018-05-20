<template>
    <div>
    <transition-group name="list" tag="ul">
        <li v-for="(todoItem,index) in propsdata" class="shadow" v-bind:key="todoItem">
            <i class="checkBtn fa fa-check" aria-hidden="true"></i>
            {{index}} - {{todoItem}}
            <button class="removeBtn" type="button" @click="removeTodo(todoItem,index)">
                <i class="far fa-trash-alt" aria-hidden="true"></i>
            </button>
        </li>
    </transition-group>
    </div>
</template>

<script>
export default {
    props:['propsdata'],    
    methods: {
        removeTodo: function(item,index){
            // console.log(item,index);
            // this.propsdata.splice(index,1);
            // localStorage.removeItem(item);

            //App 컾노넌트의 할일 아이템 하나 지워줘
            this.$emit('removeItem',item, index);
        }
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
