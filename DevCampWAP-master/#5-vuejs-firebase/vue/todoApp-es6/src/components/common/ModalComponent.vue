<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-header">
        <slot name="header">
            default header
        </slot>
        </div>

        <div class="modal-body">
        <slot name="body">
            default body
        </slot>
        </div>

        <!-- <div class="modal-footer">
        <slot name="footer">
            default footer
        </slot>
        </div> -->
        <button class="modal-default-button" @click="$emit('close')">close</button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity .3s ease;
  overflow: auto;
}


.modal-wrapper{
  position: relative;width: 400px;
  max-width: 100%;
  margin: 0px auto;  
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header{
  padding: 15px;
  background: #42b983;
  color: #fff
}
.modal-header h3{margin: 0;}

.modal-body {
  padding: 20px 15px;
}
.modal-footer{
    padding: 15px;
    border-top: 1px solid #ddd;
}

.modal-default-button {
    position: absolute;right: 0;top: 0;width: 54px;height: 54px;border: 0 none;background: none;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
