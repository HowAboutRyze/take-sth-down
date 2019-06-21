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
                text: '文章文章',
                link: '/blog/FirstBlog.md'
            }
        ],
        repo: 'HowAboutRyze/take-sth-down',
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '文章文章']
        ]
    }

}