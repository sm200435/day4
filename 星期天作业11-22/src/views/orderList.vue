<template>
    <div>
        <el-table :data="resList" style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="食品名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="食品地址">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                        <el-form-item label="食品介绍">
                            <span>{{ props.row.description }}</span>
                        </el-form-item>
                        <el-form-item label="食品 ID">
                            <span>{{ props.row.id }}</span>
                        </el-form-item>
                        <el-form-item label="联系电话">
                            <span>{{ props.row.phone }}</span>
                        </el-form-item>
                        <el-form-item label="评分">
                            <span>{{ props.row.rating }}</span>
                        </el-form-item>
                        <el-form-item label="销售量">
                            <span>{{ props.row.recent_order_num }}</span>
                        </el-form-item>
                        <el-form-item label="分类">
                            <span>{{ props.row.category }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="订单ID" prop="id">
            </el-table-column>
            <el-table-column label="总价格" prop="total_amount">
            </el-table-column>
            <el-table-column label="订单状态">
                <template slot-scope="props">
                    支付超时
                </template>
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
            this.$axios.get('https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined').then((res) => {
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
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
