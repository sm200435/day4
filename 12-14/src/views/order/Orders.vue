<template>
  <div>
    <div class="order">
      <div class="header">
        <myInput v-model="value" @search="search"></myInput>
      </div>
      <el-table
        ref="singleTable"
        :data="list"
        highlight-current-row
        style="width: 100%"
        border
      >
        <el-table-column type="index" label="#" width="50"></el-table-column>
        <el-table-column property="order_number" label="订单编号">
        </el-table-column>
        <el-table-column property="order_price" label="订单价格">
        </el-table-column>
        <el-table-column property="mobile" label="是否付款">
          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.order_pay == 1"
              >已付款</el-button
            >
            <el-button type="danger" v-else>未付款</el-button>
          </template>
        </el-table-column>
        <el-table-column property="is_send" label="是否发货"> </el-table-column>
        <el-table-column label="下单时间">
          <template slot-scope="scope">
            {{ new Date(scope.row.update_time).toLocaleString() }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.row)"
              ><i class="el-icon-edit"></i
            ></el-button>
            <el-button
              size="mini"
              type="success"
              @click="handleDelete(scope.row)"
              ><i class="el-icon-s-check"></i
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[1, 2, 3, 4, 5]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
      <KuaiDi v-if="visivle" ref="keaidi"></KuaiDi>
      <ProvincesOrders
        v-if="visivleProv"
        ref="provincesorders"
      ></ProvincesOrders>
    </div>
  </div>
</template>

<script>
import myInput from "@/components/Backgroundpublic/input"
import { orders } from "@/untils/order"
import KuaiDi from "./KuaiDi.vue"
import ProvincesOrders from "./ProvincesOrders.vue"
export default {
  data() {
    return {
      value: "",
      pagenum: 1,
      pagesize: 5,
      list: [],
      total: 0,
      visivle: false,
      edit: -1,
      visivleProv: false
    }
  },
  methods: {
    getTable(query = "") {
      orders({
        query: query,
        pagenum: this.pageCurrent,
        pagesize: this.pageSize
      }).then((res) => {
        console.log(res)
        this.list = res.data.data.goods
        this.total = res.data.data.total
      })
    },
    // 获取订单列表数据
    search() {
      this.getTable(this.value)
    },
    // 点击搜素数据
    handleSizeChange(val) {
      this.pageSize = val
      this.getTable()
    },
    // 当每页数量发生变化时候生效,返回当前每页数量
    handleCurrentChange(val) {
      this.pageCurrent = val
      this.getTable()
    },
    // 当页码发生变化时候生效,返回当前页码
    handleDelete(row) {
      this.visivle = true
      this.$nextTick(() => {
        this.$refs.keaidi.info(row.id)
      })
    },
    // 点击添加跳出模态框
    handleEdit() {
      this.visivleProv = true
      this.$nextTick(() => {
        this.$refs.provincesorders.info()
      })
    }
  },
  created() {
    this.getTable()
  },
  mounted() {},
  components: { myInput, KuaiDi, ProvincesOrders },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.order {
  padding: 15px;
  background: white;
}
.header {
  width: 610px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
</style>
