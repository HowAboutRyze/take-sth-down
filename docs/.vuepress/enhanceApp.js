import VueParticles from 'vue-particles'

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    import('./lib/copy').then(module => {
        let copy = module.default;
        copy();
    })
    import('./lib/titlechange').then(module => {
        let titlechange = module.default;
        titlechange();
    })
    
    // vue的粒子背景组件
    Vue.use(VueParticles)
}