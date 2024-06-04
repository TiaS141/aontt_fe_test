<template>
  <Modal v-if="opened" @closeModal="close">
    <template v-slot:header> Дерево папок </template>
    <template v-slot:body>
      <ul>
        <Tree v-for="(item, index) in treeData" :key="index" class="item" :item="item" />
      </ul>
    </template>
  </Modal>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Tree from '../UI/Tree.vue'
  import Modal from '../UI/Modal.vue'
  import treeData from '../../helper/consts.ts'
  import { useTreeStore } from '../../Store/tree.ts'

  export default defineComponent({
    name: 'TreeDialog',
    components: { Modal, Tree },
    props: {
      opened: Boolean,
    },
    data() {
      return {
        treeData: treeData,
        selected: null,
      }
    },
    setup() {
      const treeStore = useTreeStore()
      return { treeStore }
    },
    methods: {
      close(val: Boolean) {
        if (val) {
          this.$emit('select', this.treeStore.getSelected)
        } else this.$emit('close')
      },
    },
    mounted() {},
  })
</script>

<style scoped lang="scss">
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
