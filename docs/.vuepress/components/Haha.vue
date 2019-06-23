<template>
    <div>全局vue组件尝试：{{haha.title}}和{{haha.text}}</div>
</template>
<script>
import haha from '../../../secret/hh';
export default {
    name: 'haha',
    data() {
        return {
            haha
        }
    },
}
</script>
<style scoped>
div {
    color: #58bc58;
}
</style>
