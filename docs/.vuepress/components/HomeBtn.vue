<template>
    <div class="home-btn">
        <ClientOnly>
            <ParticleBoom>
                <div class="home-btn-box">
                    <a v-show="isShow" class="home-btn-link" @click="go">
                        <slot/>
                    </a>
                </div>
            </ParticleBoom>
        </ClientOnly>
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
                this.$router.push('/blog/intro/intro');
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:30px 0;
    .home-btn-box {
        width: 190px;
        height: 50px;
    }
    .home-btn-link {
        display: inline-block;
        width: 190px;
        height: 50px;
        text-align: center;
        font-size: 20px;
        color: #fff;
        background: #409EFF;
        border-radius: 6px;
        line-height: 50px;
        cursor: pointer;
    }
}
</style>
