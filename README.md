# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## 我的疑问、记录、想法

- 如何更好的管理路由，react-router-dom
- 怎么组织项目的结构（目录）
- 一些库
  - 处理时间的库：day.js。
  - 处理数据的库：lodash。
  - 处理表单的库：formik。
  - 处理数据请求的库：SWR、axios。
  - 大而全：react-use
  - 组件库：antd（组件库抽象了一些常见的交互和样式模式，并提供了可重用的组件）
- 尝试在本项目中使用原子化 css，比如 tailwindcss（特别适用于 C 端）
- 拦截器
- 和 Vue 的区别？为什么很多人选择了 React
- TypeScript 的实践，为什么如此多的人选择 TypeScript
- 原则
  - 不要过度封装
  - 不要过度设计
  - 不要过度优化
  - 不要过度抽象 （以上 4 点是ai生成的😄）
  - 高内聚、低耦合、可扩展
  - 分离关注点，降低心智负担
  - 持续降低复杂度
- 全局状态管理，redux？
- Hooks（应用状态管理容器） 是什么，为什么存在，怎么用
- react 的上下文 context？
- react 如何操作 dom（react-dom？）
- 组件之间如何通信，父子组件通信？
- 什么时候获取数据，什么时候渲染？
- css 模块、css in js、styled-components、emotion（？）
- 组件类型？暂定
  - 容器组件？
  > 负责获取数据，处理业务逻辑，通常在 render() 函数内返回展示型组件
  - 展示型组件?
  > 负责渲染 UI，通常在 render() 函数内返回 React 元素
  - 布局型组件？
  > 负责 UI 布局，通常在 render() 函数内返回展示型组件
- 数据流
  > React是自上而下的单向组件数据流，容器组件&展示组件（也叫傻瓜组件&聪明组件）是最常用的React组件设计方案，容器组件负责处理复杂的业务逻辑以及数据，展示组件负责处理UI层，通常我们会将展示组件抽出来进行复用或者组件库的封装，容器组件自身通过state来管理状态，setState更新状态，从而更新UI，通过props将自身的state传递给展示组件实现通信。

  > 当业务需求不复杂，页面较简单时，我们通常会用上面的方式来管理项目中的数据流。但如果需要实现跨组件通信、状态同步以及状态共享时，通过状态提升至最近的共同父组件来实现。
- react-router 和 react-router-dom 有什么区别？
  > react-router专注于提供强大的路由功能和简单的API，适合需要高度定制化和复杂路由逻辑的场景。而react-router-dom则在react-router的基础上进一步扩展了浏览器环境的使用体验，使其更适合需要通过操作DOM来控制路由的场景11
