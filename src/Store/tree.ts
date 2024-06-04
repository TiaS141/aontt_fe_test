import { defineStore } from 'pinia'
import { ITreeItem } from '../Types/tree.ts'

interface ITreeStore {
  selected: ITreeItem
}

export const useTreeStore = defineStore('tree', {
  state: (): ITreeStore => {
    return <ITreeStore>{
      selected: {},
    }
  },
  getters: {
    getSelected: (state: ITreeStore) => state.selected,
  },
  actions: {
    setSelected(val: ITreeItem) {
      this.selected = val
    },
  },
})
