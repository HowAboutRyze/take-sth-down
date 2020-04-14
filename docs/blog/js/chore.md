---
tags:
- js
abstract: 做一些比较杂的记录
---

# js 杂项

<TagGroup/>

## nvs指令

- nvs install 安装 nvs 环境
- nvs add 添加node版本，latest 最新版本，lts 添加最新的 lts 版本node
- nvs link 讲一个版本设置未默认使用版本
-  nvs upgrade 升级到主要版本的最新补丁
- nvs ls 列出本地的node版本列表
- nvs rm 删除node版本



## npm

### 报错集

####  Error: EPERM: operation not permitted, unlink 'D:\Sources**\node_modules\fsevents\node_modules\abbrev\package.json'

背景：克隆egg项目后，运行 `npm install` ，报错如题。清除缓存 `npm cache clean` 也没用。

解决办法：尝试使用 `--no-optional` 运行，即 `npm install --no-optional` 。

其他未尝试办法：关闭vscode，通过管理员身份运行命令提示符，来运行 `npm install` 。



## 版本发布

使用 [standard-version](https://github.com/conventional-changelog/standard-version) 代替 `npm version` ，其优势是：

1. 根据 git log 自动生成 changelog
2. 根据 commit message 的 type 生成符和semver的版本号
3. 自动打 tag 和提交 changelog

安装

```bash
npm i --save-dev standard-version
```

使用

```js
"scripts": {
    "release": "standard-version",
}
```

## npx

npm 从5.2版本开始，增加了 npx 命令

npx 能够避免全局安装的模块。比如，create-react-app 这个模块是全局安装，npx 可以运行它，而且不进行全局安装。

```bash
$ npx create-react-app my-react-app
```

参考：[npx 使用教程](http://www.ruanyifeng.com/blog/2019/02/npx.html) 

<Gitalk/>