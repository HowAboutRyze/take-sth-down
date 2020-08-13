<h1 align="center">
    take-sth-down
</h1>

> 如上述，本项目纯粹是用来随时记录自己学习生活中的一些东西，开心开心就好

## 说明

该项目基于 `vuepress` 和 `github pages`完成。

[网站地址](https://howaboutryze.github.io/take-sth-down/)

如果你有好的想法或建议的话，可以提 issue 或者 pr 来告诉我，虽然我不一定看，哈哈。

## 构建步骤

``` bash
# 开启测试服务器 http://localhost:8080/take-sth-down/
npm run docs:dev

# 打包压缩的文件
npm run docs:build

# 发布到 gh-pages 上
npm run deploy
```

## 本地开发

### 新增博客类别文件夹

定位到 /docs/.vuepress/sidbarMap/blogMap.js

### 新增博客文章

在 /docs/blog/ 路径下的对应类别文件夹中添加 md 文件，重新启动本地服务器即可预览