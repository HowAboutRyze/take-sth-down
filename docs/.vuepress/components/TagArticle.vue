<template>
    <div class="tag-article">
        <div class="article-title">
            <router-link :to="tag.path">{{tag.title}}</router-link>
        </div>
        <div 
            class="article-abstract" 
            v-if="tag.frontmatter.abstract"
        >
            {{tag.frontmatter.abstract}}
        </div>
        <!-- <div class="article-fulltext">
            <router-link :to="tag.path">查看全文</router-link>
        </div> -->
        <div class="article-footer">
            <div class="footer-tags">
                <span
                    v-for="item in tag.frontmatter.tags"
                    :class="{ active: item === tg }"
                    @click="$emit('turnTo', item)"
                >
                    {{ item }}
                </span>
            </div>
            <div class="footer-time">
                {{ tag.lastUpdated | justGetDate }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TagArticle',
    props: {
        tag: {
            type: Object,
            default: () => {}
        },
        tg: ''
    },
    filters: {
        justGetDate(value) {
            if(value) {
                let _date = value.split(',')[0].split('/');
                _date.unshift(_date[2]);
                _date = _date.slice(0,-1).join('/');
                return _date;
            } else {
                return '暂无更新时间'
            }
        }
    }
}
</script>
<style lang="stylus">
.tag-article {
    margin: 0 auto 1.2rem;
    padding: 1rem 1.2rem;
    width: 100%;
    overflow: hidden;
    border-radius: .3rem;
    box-sizing: border-box;
    box-shadow: 0 0.25rem 1.2rem 0 hsla(0,0%,56.9%,.21);
    background-color: #fff;
    position: relative;
    transition: box-shadow .6s ease-out;
    transition-delay: .1s;
    &:hover {
        box-shadow: 0 0.25rem 1.2rem 0 hsla(0,0%,56.9%,.8);
    }
    .article-title {
        margin-bottom: .6rem;
        & > a {
            font-size: 1.5rem;
            line-height: 2.2rem;
            font-weight: bold;
            position: relative;
            &:hover {
                text-decoration: none;
            }
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 2px;
                background-color: #409eff;
                transform: scaleX(0);
                transition: transform 0.5s ease;
                transform-origin: center right;
            }
            &:hover::after {
                transform-origin: center left;
                transform: scaleX(1);
            }
        }
    }
    .article-abstract {
        padding: 0 0 1.5rem 0;
        color: #666;
    }
    .article-fulltext {
        display: flex;
        justify-content: flex-end;
        padding: .6rem 0;
        & > a {
            display: inline-block;
            padding: .2rem .5rem;
            font-size: .9rem;
            color: #999;
            background: #eee;
            border: 1px solid #999;
            border-radius: 2.2rem;
            cursor: pointer;
            &:hover {
                text-decoration: none;
            }
        }
    }
    .article-footer {
        display: flex;
        padding: .6rem 0 0 0;
        font-size: .8rem;
        border-top: 1px solid #ccc;
        .footer-tags {
            flex: 1;
            & > span {
                display: inline-block;
                position: relative;
                z-index: 1;
                overflow: hidden;
                height: 1.3rem;
                margin-right: .5rem;
                padding: 0 .7rem;
                line-height: 1.3rem;
                vertical-align: top;
                color: #666;
                background-color: #ecf5ff;
                border: 1px solid #b3d8ff;
                border-radius: 1.1rem;
                cursor: pointer;
                &:hover {
                    animation: jelly 0.5s;
                }
                &.active {
                    color: #fff;
                    background-color: #409eff;
                    border: 1px solid #409eff;
                }
                &::after {
                    content: '';
                    z-index: -1;
                    background-color: rgba(255, 255, 255, .8);
                    position: absolute;
                    top: -50%;
                    bottom: -50%;
                    left: -2em;
                    width: 1.25em;
                    transform: rotate(35deg);
                }
                &:hover::after {
                    transition: left 0.45s ease-in-out;
                    left: 150%;
                }
            }
        }
        .footer-time {
            line-height: 1.3rem;
            color: #999;
        }
    }
}
@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>
