<template>
    <div id="gitalk-container"></div>
</template>
<script>
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';        // 引入Gitalk
import OAUTH from '../../../secret/oauth';
export default {
    name: 'haha',
    mounted() {
        console.log('当前路径',location.pathname)
        var gitalk = new Gitalk({
            clientID: OAUTH.id,             // GitHub Application Client ID
            clientSecret: OAUTH.secret,     // GitHub Application Client Secret
            repo: 'take-sth-down',          // GitHub 仓库
            owner: 'HowAboutRyze',
            admin: ['HowAboutRyze'],        // 管理员，可编辑的人员
            id: location.pathname,          // Ensure uniqueness and length less than 50
            distractionFreeMode: false      // Facebook-like distraction free mode
        })

        gitalk.render('gitalk-container')
    }
}
</script>
<style>
.gt-container .gt-meta {
    /* 评论层级不应高于菜单栏层级 */
    z-index: 9;
}
</style>