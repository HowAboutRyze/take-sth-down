---
tags:
- git
- webpack
abstract: 本文讲如何使用 GitHub Pages 部署 demo 展示网页，以及 webpack 打包路径的相关问题踩坑
---

# GitHub Pages 部署 demo 展示网页

<TagGroup/>

## 为什么要使用 GitHub Pages

[GitHub Pages](https://pages.github.com/)是从 `GitHub` 仓库托管的静态网站，每个 `GitHub` 帐户和组织都会有一个免费提供的 username.github.io 的域名站点，
并且拥有无限制的项目站点。

利用这一点，我们可以部署自己的静态网站到对应 `GitHub` 仓库的项目站点上，同时，仓库的代码和本地开发代码是可以同步的，也就可以在提交代码的同时自动部署新的代码到站点上，操作简单。

## 为项目创建 GitHub Pages

在说完 `GitHub Pages` 的好处，就让我们开始吧。

首先是创建 `GitHub` 仓库及提交代码，这一步我就默认大家都会了。

> 这一步我以自己的一个仓库做为例子，该仓库demo使用了 `vue` 脚手架搭建，也就是说构建工具为 `webpack`。[仓库地址](https://github.com/HowAboutRyze/mobile-pc)

在创建了仓库之后，可以开启该仓库的 `GitHub Pages` 了。来到项目仓库选择 `settings` 标签页，如下图

![settings](./github_pages_settings.png)

找到 `GitHub Pages` 的 `source` 选择 `master branch` 分支

![source](./github_pages_source.png)

更新页面之后就会看到如上图出现绿底文字，里面的链接即为仓库的 `GitHub Pages` 站点链接。

## 部署静态资源网站

### 初步部署

前面说到我们使用了 `vue` 的脚手架搭建项目，执行 `npm run build` 之后即可将项目打包到仓库根目录的 `dist` 文件夹里，而这个 `dist` 文件夹就是我们 `GitHub Pages` 的静态资源网页站点。打包后推送代码（请确保 `dist` 文件夹没被 `git` 忽略），然后打开浏览器输入你的 `GitHub Pages` 链接 `https://<用户名>.github.io/<仓库名>/dist` ，即可打开 `dist` 文件夹下的 `index.html` 的内容。

### 踩坑:调整项目路径

完成上述步骤查看链接时，你会发现页面报错无法找到 `/static/` 文件夹下的文件。这是因为 `webpack` 打包时设置的全局路径是绝对路径。

找到 `config/index.js` 文件，更改下面代码：

``` js
module.exports = {
    dev: {
        ...
    },

    build: {
        ...

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',      // 这行更改 '/' 为 './'
        ...
    }
}
```

再重新打包部署，会发现 `css` 文件里写的背景图片路径不对，需要改 `build/utils.js` 文件的配置

``` js
exports.cssLoaders = function (options) {
    ...
    
    // generate loader string to be used with extract text plugin
    function generateLoaders (loader, loaderOptions) {
        ...

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
        return ExtractTextPlugin.extract({
            use: loaders,
            fallback: 'vue-style-loader',

            /**
             * 添加开始
             */
            // 修复css文件中背景图片路径出错的问题
            publicPath: '../../'
            /**
             * 添加结束
             */
        })
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
        ...
    }
}
```

完成上述修改，大家就可以愉快的在 `https://<用户名>.github.io/<仓库名>/dist`上查看你的demo了。

## 调整站点路径

在我们的站点链接上有个 `dist` ，怪难看的，如果想去掉这个 `dist`，可以有两种方式。

### 开分支存放站点

在 `GitHub` 仓库里开一个分支 `gh-pages`，将打包好的代码推送到这个分支上，在仓库 `setting` 的 `GitHub Pages` 选择 `gh-pages branch` 即可。

### master branch/docs folder

在仓库 `setting` 标签页，`source` 的选项中有一个 `master branch/docs folder`，这个选项这个时候是灰色的，是因为你的仓库中没有 `docs` 文件夹。我们通过将 `webpack` 打包数据路径改为 `docs`，就可去除 `GitHub Pages` 链接中的 `dist`。

找到 `config/index.js` 文件，更改下面代码：

``` js
module.exports = {
    dev: {
        ...
    },

    build: {
        ...
        // Template for index.html
        index: path.resolve(__dirname, '../docs/index.html'),   // 这行更改 '../dist/index.html' 为 '../docs/index.html'

        // Paths
        assetsRoot: path.resolve(__dirname, '../docs'),   // 这行更改 '../dist' 为 '../docs'
        ...
    }
}
```


<Gitalk/>