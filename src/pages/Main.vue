<template>
  <div class="wrapper">
    <Button @click="open">Открыть</Button>
    <TreeDialog :title="title" v-model:opened="opened" @select="select" @close="close" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Button from '../components/UI/Button.vue'
  import Modal from '../components/UI/Modal.vue'
  import TreeDialog from '../components/Layouts/TreeDialog.vue'
  import { ITreeItem } from '../Types/tree.ts'

  export default defineComponent({
    name: 'Main',
    components: { TreeDialog, Modal, Button },
    data() {
      return {
        opened: false,
        title: 'Дерево папок',
      }
    },
    methods: {
      select(item: ITreeItem) {
        this.close()
        alert(item.name ?? 'Папка не выбрана')
      },
      open() {
        this.opened = true
      },
      close() {
        this.opened = false
      },
    },
  })
</script>

<style scoped lang="scss">
  .wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
