<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle(item!)">
      {{ item?.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <Tree class="item" v-for="(child, index) in item?.children" :key="index" :item="child" />
    </ul>
  </li>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { useTreeStore } from '../../Store/tree.ts'

  interface ITreeItem {
    name: string
    children: Array<ITreeItem>
  }

  export default defineComponent({
    name: 'Tree',
    props: {
      item: Object as PropType<ITreeItem>,
    },
    data() {
      return {
        isOpen: false,
        selected: {} as ITreeItem,
      }
    },
    setup() {
      const treeStore = useTreeStore()
      return { treeStore }
    },
    computed: {
      isFolder() {
        return this.item?.children && this.item.children.length
      },
    },
    methods: {
      toggle(item: ITreeItem) {
        if (this.isFolder) {
          this.isOpen = !this.isOpen
          if (this.isOpen) this.treeStore.setSelected(item)
        }
      },
    },
  })
</script>

<style scoped lang="scss">
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
