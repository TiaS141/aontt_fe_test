<template>
  <div class="modal-mask">
    <div class="modal-container">
      <div class="modal-header">
        <slot name="header"> default header </slot>
      </div>

      <div class="modal-body">
        <slot name="body"> default body </slot>
      </div>

      <div class="modal-footer">
        <slot name="footer">
          <Button type="submit" value="Submit" class="modal-default-button" @click.prevent="$emit('closeModal', true)">
            Ок
          </Button>
          <Button class="modal-default-button" @click.prevent="$emit('closeModal', false)"> Закрыть </Button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Button from './Button.vue'

  export default defineComponent({
    name: 'Modal',
    components: { Button },
  })
</script>

<style scoped lang="scss">
  .modal-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease;
    .modal-container {
      min-width: 500px;
      margin: auto;
      padding: 20px 50px;
      border-radius: 15px;
      animation: scale-on 200ms forwards;
      transition: all 0.3s ease;
      font-family: Helvetica, Arial, sans-serif;
      max-height: 90vh;
      max-width: 500px;
      background-color: #fff;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 15px 30px 0 rgba(#000, 0.25);
      @media (max-width: 600px) {
        width: 90%;
      }
      .modal-header {
        margin-top: 0;
        font-size: 20px;
        text-align: center;
      }
      .modal-body {
        margin: 20px 0;
      }
      .modal-footer {
        display: flex;
        justify-content: end;
      }
    }
  }

  .modal-default-button {
    float: right;
  }

  @keyframes scale-on {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
