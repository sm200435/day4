<template>
    <div>
        <el-table :data="resList" style="width: 100%" border>
            <el-table-column label="#">
                <template slot-scope="scope">
                    {{ scope.$index + 1 }}
                </template>
            </el-table-column>
            <el-table-column prop="registe_time" label="注册日期">
            </el-table-column>
            <el-table-column prop="username" label="用户姓名">
            </el-table-column>
            <el-table-column prop="city" label="注册地址">
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-sizes="[1, 2, 3, 4,5]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="list.length">
        </el-pagination>
    </div>
</template>

<script>

export default {
    data() {
        return {
            list: [],
            currentPage: 1,
            pageSize: 5
        }
    },
    methods: {
        getList() {
            this.$axios.get('https://elm.cangdu.org/v1/users/list?offset=20&limit=20').then((res) => {
                console.log(res);
                this.list = res.data
            })
        },
        handleSizeChange(val) {
            this.pageSize=val
        },
        handleCurrentChange(val) {
           this.currentPage=val
        }
    },
    created() {
        this.getList()
    },
    mounted() {

    },
    components: {

    },
    computed: {
        resList(){
            return this.list.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
        }
    },
    watch: {

    },
}
</script>

<style lang='scss' scoped>

</style>
