const utils = require('./utils');
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
        // sidebar: utils.inferSiderbars(),   // 由于 markdown-it-include 插件用不了，就不用这个了
        sidebar: {
            '/blog/': [
                {
                    title: '博客',
                    collapsable: false,
                    children: [
                        '/blog/'
                    ]
                },
                {
                    title: 'Vue',
                    collapsable: false,
                    children: [
                        '/blog/vue/home.md',
                        '/blog/vue/one.md'
                    ]
                }
            ],
            '/awesome/': [
                {
                    title: '收藏夹',
                    collapsable: false,
                    children: [
                        '/awesome/'
                    ]
                }
            ]
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