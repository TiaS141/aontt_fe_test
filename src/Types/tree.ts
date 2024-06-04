export type ITree = Array<ITreeItem>

export interface ITreeItem {
  name: string
  children?: Array<ITreeItem>
}
