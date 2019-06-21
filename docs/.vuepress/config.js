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
            }
        ],
        repo: 'HowAboutRyze/take-sth-down',
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
                        '/blog/vue/',
                        '/blog/vue/one.md'
                    ]
                }
            ],
        },
        editLinks: true,
        lastUpdated: '上次更新',
        editLinkText: '在 GitHub 上编辑此页',
    },

}