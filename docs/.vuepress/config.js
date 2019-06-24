const utils = require('./utils');
const blogMap = require('./sidebarMap/blogMap');
const awesomeMap = require('./sidebarMap/awesomeMap');

// 初始化博客侧边栏和导航栏下拉框
const sidebarBlog = utils.inferSiderbars(blogMap);
const navBlog = sidebarBlog.map(item => {
    return { text: item.title, link: item.children[0] }
});
navBlog.shift();        // 去掉介绍页，防止全部定位到介绍页
// 初始化收藏夹侧边栏和导航栏下拉框
const sidebarAwesome = utils.inferSiderbars(awesomeMap);
const navAwesome = sidebarAwesome.map(item => {
    return { text: item.title, link: item.children[0] }
});
navAwesome.shift();

module.exports = {
    base: '/take-sth-down/',
    title: 'take-sth-down',
    description: '记录学习生活中的点点滴滴',
    themeConfig: {
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '博客',
                items: navBlog
                // link: '/blog/' 
                // items: [
                //     {
                //         text: '博客',
                //         link: '/blog/'
                //     },
                //     {
                //         text: 'vue'
                //     }
                // ]
            },
            {
                text: '收藏夹',
                // link: '/awesome/'
                items: navAwesome
            },
            {
                text: '关于我',
                link: '/about-me/'
            }
        ],
        repo: 'HowAboutRyze/take-sth-down',
        sidebar: {
            '/blog/': sidebarBlog,
            '/awesome/': sidebarAwesome,
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
        lastUpdated: '上次更新',
        // editLinks: true,
        // editLinkText: '在 GitHub 上编辑此页',
        docsDir: 'docs',
    },
    markdown: {
        lineNumbers: true,
        //     config: md => {
        //         // use more markdown-it plugins!
        //         md.use(require('markdown-it-include'))   // 需要 markdown-it-include 插件，但是暂时用不了，很惨
        //     }
    }
}
