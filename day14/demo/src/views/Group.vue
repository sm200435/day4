<template>
    <div>
        <!-- <div v-for="item in list" :key="item.id">
            <son :item=item></son>
        </div>
        不用插槽 -->
        <son>
            <!-- <div>1111</div>
            匿名插槽 -->
            <!-- <template #header>
                11111
            </template>
            <template #footer>
                2222
            </template> 
            具名插槽
        -->
        <template #zuoyongyu="{user}">
            {{user.name}}
        </template>
        </son>
    </div>
</template>

<script>
import mock from '../mock/list.json'
import son from './Son.vue'
console.log(mock);
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {

    },
    created() {
        this.list = mock
    },
    mounted() {

    },
    components: {
        son
    },
    computed: {

    },
    watch: {

    },
}
</script>

<style lang='scss' scoped>

</style>
