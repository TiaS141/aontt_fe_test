import { ITree } from '../Types/tree.ts'

const treeData: ITree = [
  {
    name: 'My Tree 1',
    children: [
      { name: 'dog' },
      { name: 'cat' },
      {
        name: 'child folder 1.1',
        children: [
          {
            name: 'child folder 1.2',
            children: [{ name: 'dog' }, { name: 'cat' }],
          },
          { name: 'hello' },
          { name: 'wat' },
          {
            name: 'child folder 1.3',
            children: [{ name: 'cat' }, { name: 'dog' }],
          },
        ],
      },
    ],
  },
  {
    name: 'My Tree 2',
    children: [
      { name: 'dog' },
      { name: 'cat' },
      {
        name: 'child folder 2.1',
        children: [
          {
            name: 'child folder 2.2',
            children: [{ name: 'dog' }, { name: 'cat' }],
          },
          { name: 'dog' },
          { name: 'cat' },
          {
            name: 'child folder 2.3',
            children: [{ name: 'dog' }, { name: 'cat' }],
          },
        ],
      },
    ],
  },
]

export default treeData
