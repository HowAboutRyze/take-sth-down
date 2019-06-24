<template>
    <div class="home-btn">
        <ParticleBoom style="width:200px;height:50px;margin:0 auto;text-align:center;">
            <a v-show="isShow" class="home-btn-link" @click="go">点我就行了 →</a>
        </ParticleBoom>
    </div>
</template>
<script>
export default {
    name: 'HomeBtn',
    data() {
        return {
            isShow: true,
            timeout: null,
            timeout2: null
        };
    },
    methods: {
        go() {
            this.timeout = setTimeout(() => {
                this.isShow = false;
            }, 200);
            this.timeout2 = setTimeout(() => {
                this.$router.push('/blog/');
            }, 800);
        }
    },
    destroyed() {
        clearTimeout(this.timeout);
        clearTimeout(this.timeout2);
    }
}
</script>
<style lang="stylus">
.home-btn {
    padding:30px 0;
    .home-btn-link {
        display: inline-block;
        font-size: 20px;
        width: 190px;
        height: 50px;
        color: #fff;
        background: #409EFF;
        border-radius: 6px;
        line-height: 50px;
        cursor: pointer;
    }
}
</style>
