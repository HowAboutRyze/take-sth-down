---
tags:
- git
abstract: 本文主要讲使用 shell 文件自动运行 npm 命令
---

# shell 文件自动运行 npm 命令

<TagGroup/>

在使用 vuepress 搭建静态网站时，发现官网上有一个步骤（如下图）是创建 deploy.sh 文件，用以构建静态文件并上传 github 分支。地址：[vuepress 部署](https://v1.vuepress.vuejs.org/zh/guide/deploy.html#github-pages)

![shell](./img/git_shell.png)

::: tip
sh是UNIX/LINUX 操作系统的脚本文件。
sh 命令调用缺省 shell 并使用它的语法和标志。
链接到 /usr/bin/sh 路径的 shell 是缺省的 shell。
:::

于是去了解了一下，在这里做个记录。

## shell

`Shell` 是一个用 C 语言编写的程序，它是用户使用 `Linux` 的桥梁。`Shell` 既是一种命令语言，又是一种程序设计语言。

`Shell` 编程跟 `java`、`php` 编程一样，只要有一个能编写代码的文本编辑器和一个能解释执行的脚本解释器就可以了。

## git Bash

安装 `git` 时，自带的 `git Bash` 方便你在 `windows`下使用git命令的模拟终端（ `windows` 自带的 `cmd` 功能太弱）`linux`、`unix`可以直接使用`git`。

## 尝试

- 用 `webpack` 构建一个项目，使用 `HotModuleReplacementPlugin` 插件开启 `webpack-dev-server` ，在 `package.json` 文件中的 `scripts` 项增加 `"dev": "webpack-dev-server --open"`
- 在根目录下创建一个文件 `dev.sh`，代码如下：

``` bash
#!/usr/bin/env sh

# 运行 webpack-dev-server
npm run dev
```

运行该文件，即可看到 `git Bash` 开启，并运行 `webpack-dev-server --open` 代码。

<Gitalk/>