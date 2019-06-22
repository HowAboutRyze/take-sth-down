const utils = require('./utils');
const blogMap = require('./sidebarMap/blogMap');
const awesomeMap = require('./sidebarMap/awesomeMap');
module.exports = {
    base: '/take-sth-down/',
    title: 'take-sth-down',
    description: '欢迎来看我的这些东西',
    themeConfig: {
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '博客',
                link: '/blog/'
            },
            {
                text: '收藏夹',
                link: '/awesome/'
            }
        ],
        repo: 'HowAboutRyze/take-sth-down',
        sidebar: {
            '/blog/': utils.inferSiderbars(blogMap),
            '/awesome/': utils.inferSiderbars(awesomeMap),
            // '/blog/': [
            //     {
            //         title: '博客',
            //         collapsable: false,
            //         children: [
            //             '/blog/'
            //         ]
            //     },
            //     {
            //         title: 'Vue',
            //         collapsable: false,
            //         children: [
            //             '/blog/vue/home.md',
            //             '/blog/vue/one.md'
            //         ]
            //     }
            // ],
        },
        editLinks: true,
        lastUpdated: '上次更新',
        editLinkText: '在 GitHub 上编辑此页',
        docsDir: 'docs',
    },
    // markdown: {
    //     config: md => {
    //         // use more markdown-it plugins!
    //         md.use(require('markdown-it-include'))   // 需要 markdown-it-include 插件，但是暂时用不了，很惨
    //     }
    // }
}
