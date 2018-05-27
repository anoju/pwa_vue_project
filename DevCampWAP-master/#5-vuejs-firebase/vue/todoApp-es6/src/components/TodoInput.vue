<template>
    <div class="inp_box">
        <input type="text" class="input" v-model="newTodoTtem" v-on:keyup.enter="addTodo" placeholder="할 일을 입력 해주세요">
        <button @click="addTodo" class="button"><i class="fa fa-plus"></i><span class="blind">등록</span></button>
        <!-- <span class="button" @click="addTodo">
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>
        </span> -->

        <ModalComponent v-if="showModal" @close="showModal = false">
            <h3 slot="header">알림</h3>
            <div slot="body"><br>입력값이 없습니다.<br><br></div>
        </ModalComponent>
    </div>
</template>

<script>
import ModalComponent from './common/ModalComponent'
export default {
    data(){
        return{
            newTodoTtem : '',
            showModal: false
        }
    },
    methods:{
        addTodo(){
            console.log(this.newTodoTtem);
            if(this.newTodoTtem !== ''){
                const value = this.newTodoTtem.trim(); //trim 으로 공백 제거
                //localStorage.setItem(value, value); //로컬스토리지 저장

                //this.$emit('addItem',value);
                this.$store.commit('addTodoItem',value);
                
                this.clearInput(); //다른 이벤트 호출 (input 초기화)
            }else{
                //alert('입력해주세요');
                this.showModal = !this.showModal;                
            }
        },
        clearInput(){
            this.newTodoTtem = '';
        }
    },
    components: {
        ModalComponent
    }
}
</script>

<style scoped>
.inp_box{position:relative}
.inp_box .input{width:100%;height:44px;line-height:40px;box-sizing:border-box;padding: 0 70px 0 10px;border: 2px solid #ddd;text-align: center;font-weight: 600;outline:none;border-radius:7px;transition: 0.3s ease;}
.inp_box .input:focus{border-color: #000}
.inp_box .button{position:absolute;right:2px;top:2px;background:#dd0000;width:60px;line-height:40px;border: 0 none;color: #fff;padding: 0;cursor: pointer;border-radius:0 5px 5px 0;}
</style>
