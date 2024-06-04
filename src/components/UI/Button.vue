<template>
  <button class="btn" v-bind="$attrs" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Btn',
  })
</script>

<style scoped lang="scss">
  @import '../../assets/scss/vars';

  .btn {
    border-radius: 5px;
    outline: 0;
    border: 0;
    padding: 0.6em 1em;
    font-size: 1em;
    font-weight: 600;
    margin: 0 0.35em;
    color: $btn-text-color;
    font-family: inherit;
    background-color: $btn-bg-color;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: background-color 400ms;
  }
  .btn:hover {
    background-color: $btn-active-bg-color;
  }
  .btn:active {
    background: $btn-bg-color;
    transition: background-color 0ms;
  }
</style>
