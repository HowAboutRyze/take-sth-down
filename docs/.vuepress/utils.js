const path = require('path')
const fs = require('fs')

exports.inferSiderbars = sidebarMap => {
    const sidebar = []
    sidebarMap.forEach(({ title, dirname }) => {
        const dirpath = path.resolve(__dirname, '../' + dirname)
        const children = fs
            .readdirSync(dirpath)
            .filter(
                item =>
                    item.endsWith('.md') && fs.statSync(path.join(dirpath, item)).isFile()
            )
            .sort((prev, next) => (next.includes('README.md') ? 1 : 0))
            .map(item => '/' + dirname + '/' + item.replace(/(README)?(.md)$/, ''))    // 凭借成 '/blog/vue/one' 的字符串

        sidebar.push({
            title,
            children,
            collapsable: false
        })
            
    })
    console.log('inferSiderbars.sidebar:',sidebar)
    return sidebar
}