<template>
    <div id="gitalk-container"></div>
</template>
<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import OAUTH from '../../../secret/oauth';
export default {
    name: 'haha',
    mounted() {
        console.log('当前路径',location.pathname)
        var gitalk = new Gitalk({
            clientID: OAUTH.id,
            clientSecret: OAUTH.secret,
            repo: 'take-sth-down',
            owner: 'HowAboutRyze',
            admin: ['HowAboutRyze'],
            id: location.pathname,      // Ensure uniqueness and length less than 50
            distractionFreeMode: false  // Facebook-like distraction free mode
        })

        gitalk.render('gitalk-container')
    }
}
</script>
<style scoped>

</style>