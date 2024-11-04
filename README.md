<p align="center">
    <br>
    <img src="./assets/GitHub-Logo.png" width="100%"/>
    <br>
</p>

<h1 align="center">SSY-UI-VITE</h1>
<p align="center">
  基于 Vite 栈的前端工程化实践
</p>

<p align="center">
<img src="https://img.shields.io/github/license/XUANRUSHI/SSR-invis-ui">
<img alt="NPM Version" src="https://img.shields.io/npm/v/%40xuanrushi%2Fssy-ui-vite?logoColor=pink&labelColor=skyblue&color=pink">
<img alt="NPM Downloads" src="https://img.shields.io/npm/dw/%40xuanrushi%2Fssy-ui-vite?style=flat-square&labelColor=%20">

<a href="https://codecov.io/gh/XUANRUSHI/SSR-invis-ui" >
 <img src="https://codecov.io/gh/XUANRUSHI/SSR-invis-ui/graph/badge.svg?token=9INKIVFSFS"/>
 </a>

</p>

## Features
- 基于 Vue 框架
- 支持 JSX与 Vue 单文件组件
- Jest + Vue3 plugins实现单元测试
- Eslint + Prettier + Husky 语法检查
- 采用 Rollup 构建
- Vitepress + Vercel 文档网站搭建
- 基于Action CI 实现持续集成与交付

## Inatall
```bash
npm i ssy-ui-vite
```

## Quick Start
```bash
import Vue from 'vue'
import SSYUI from 'ssy-ui'

const App = {
    template:`
    SButton color="blue">主要按钮</SButton>
    `,
    };

createApp(App)
    .use(SSYUI)
    .mount("#app");
```

## Quick Start2
如果希望尽快上手，可以访问 [Getting Starting](https//ssy-ui-vite.vercel.app/)
