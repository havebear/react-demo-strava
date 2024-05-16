## 技术栈
- React
- TypeScript
- Vite

## Records

2024.05.08
- 自定义组件不能通过 className 传入类名（误）
- 如何使用静态资源
- 全局样式变量，考虑 css var
- 通过属性传递参数
- 关于列表的命名，组件采用 List 结尾，目录采用 s 结尾，前则保证可读性，后者保证命名精简

2024.05.16
- 定义 props 的 interface
- 条件渲染
  - { blo ? (dom1) : null }
- 如何复用 interface
  - 通过 export interface Xxx 导出，通过 import { Xxx } from 'xxx' 导入
- type 和 interface
- interface 合并
  - interface A extends B, C {}
- className 绑定多个 module 提供的值
