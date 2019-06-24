<template>
    <div class="tag-group">
        <span 
            v-for="tag in tags"
            :key="tag"
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
<style lang="stylus">
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
        background-color: #F1F5FC;
        border: 1px solid #CCD9FC;
        border-radius: 22px;
    }
}
</style>
