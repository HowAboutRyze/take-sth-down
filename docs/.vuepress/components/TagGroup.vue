<template>
    <div class="tag-group">
        <span 
            v-for="tag in tags"
            :key="tag"
            @click="$router.push({ path: '/tags/', query: { tag } })"
        >
            {{tag}}
        </span>
    </div>
</template>
<script>
export default {
    name: 'TagGroup',
    computed: {
        tags() {
            return this.$page.frontmatter.tags;
        }
    }
}
</script>
<style lang="stylus" scoped>
.tag-group {
    & > span {
        display: inline-block;
        position: relative;
        height: 22px;
        margin-right: 10px;
        margin-bottom: 8px;
        padding: 0 15px;
        line-height: 20px;
        font-size: 12px;
        vertical-align: top;
        color: #666;
        background-color: #ecf5ff;
        border: 1px solid #b3d8ff;
        border-radius: 22px;
        cursor: pointer;
        &:hover {
            color: #fff;
            background-color: #409eff;
            border: 1px solid #409eff;
        }
    }
}
</style>
