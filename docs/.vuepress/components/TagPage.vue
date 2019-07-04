<template>
    <div class="tag-page">
        <div class="tag-page-list">
            <span 
                @click="change('')"
                :class="tg ? '' : 'active'"
            >
                全部({{total}})
            </span>
            <span
                v-for="item in tags"
                @click="change(item.tag)"
                :class="item.tag === tg ? 'active' : ''"
            >{{item.tag}}({{item.number}})</span>
        </div>
        <div class="article-list">
            <TagArticle v-for="tag in info" :tag="tag" :tg="tg" @turnTo="change"/>
        </div>
    </div>
</template>
<script>
import TagArticle from './TagArticle';
export default {
    name: 'TagPage',
    data() {
        return {
            info: [],
            tg: ''
        };
    },
    computed: {
        tags() {
            //核心代码，整合markdown中tags的数目，即tags:{tag, number}
            let allTags = [];
            this.$site.pages.forEach(v => {
                if(v.frontmatter.tags) {
                    allTags.push(v.frontmatter.tags);
                } else if(v.frontmatter.tag) {
                    allTags.push(v.frontmatter.tag);
                }
            });
            allTags = allTags.join(',').split(',');
            let flatTags = Array.from(new Set(allTags));
            return flatTags.reduce((res, v) => {
                let o = {};
                o.tag = v;
                o.number = allTags.filter(value => value === v).length;
                res.push(o);
                return res;
            }, []);
        },
        total() {
            return this.$site.pages.filter(page => page.frontmatter.tags).length;
        }
    },
    methods: {
        change(tag) {
            //点击标签下面文章显示对应的内容
            this.tg = tag;
            if(this.tg) {
                this.info = this.$site.pages.filter(page => {
                    let tags = page.frontmatter.tags;
                    if(tags) {
                        return tags.some(v => v === tag);
                    }
                });
            } else {
                this.info = this.$site.pages.filter(page => page.frontmatter.tags);
            }
            this.info = this.info.sort((pre, next) => {
                if(pre.lastUpdated === undefined) return 1;
                if(next.lastUpdated === undefined) return -1;
                return (
                    new Date(next.lastUpdated).getTime() -
                    new Date(pre.lastUpdated).getTime()
                );
            });
        },
    },
    components: {
        TagArticle
    },
    mounted() {
        //当路由?tag='xxx'时能自动跳转到对应内容
        let tag = this.$route.query.tag;
        this.change(tag);
    }
};
</script>
<style lang="stylus">
.tag-page {
    .tag-page-list {
        padding: 1rem;
        & > span {
            display: inline-block;
            position: relative;
            height: 1.8rem;
            margin-right: .8rem;
            margin-bottom: .6rem;
            padding: 0 .8rem;
            line-height: 1.8rem;
            font-size: 1rem;
            vertical-align: top;
            color: #666;
            background-color: #ecf5ff;
            border: 1px solid #b3d8ff;
            border-radius: 1rem;
            transition: all .3s;
            cursor: pointer;
            &:hover, &.active {
                color: #fff;
                background-color: #409eff;
                border: 1px solid #409eff;
                transform: translateY(-.2rem) scale(1.1);
            }
        }
    }
}
</style>
