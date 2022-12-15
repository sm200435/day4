<template>
  <div>
    <div class="goods">
      <div class="header">
        <myInput v-model="value" @search="search"></myInput>
        <el-button type="primary" @click="add">添加用户</el-button>
      </div>
      <el-table
        ref="singleTable"
        :data="list"
        highlight-current-row
        style="width: 100%"
        border
      >
        <el-table-column type="index" label="#" width="50"></el-table-column>
        <el-table-column property="goods_name" label="商品名称" width="615px">
        </el-table-column>
        <el-table-column property="goods_price" label="商品价格">
        </el-table-column>
        <el-table-column property="goods_number" label="商品重量">
        </el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            {{ scope.row.add_time | times }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              ><i class="el-icon-edit"></i
            ></el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              ><i class="el-icon-delete"></i
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
    </div>
  </div>
</template>

<script>
import myInput from "@/components/Backgroundpublic/input"
import { goods, deleteGoods } from "@/untils/goods"
export default {
  data() {
    return {
      value: "",
      pagenum: 1,
      pagesize: 5,
      list: [],
      total: 0,
      edit: -1
    }
  },
  methods: {
    getTable(query = "") {
      goods({
        query: query,
        pagenum: this.pagenum,
        pagesize: this.pagesize
      }).then((res) => {
        console.log(res)
        this.list = res.data.data.goods
        this.total = res.data.data.total
      })
    },
    // 获取商品列表数据
    handleSizeChange(val) {
      this.pagesize = val
      this.getTable()
    },
    // 当每页数量发生变化时候生效,返回当前每页数量
    handleCurrentChange(val) {
      this.pagenum = val
      this.getTable()
    },
    // 当页码发生变化时候生效,返回当前页码
    search() {
      this.getTable(this.value)
    },
    // 点击搜素数据
    add() {
      this.edit = -1
      this.$router.push({ name: "add", params: { edit: this.edit } })
    },
    // 添加数据
    handleEdit(index, row) {
      console.log(row)
      this.edit = row.goods_id
      this.$router.push({ name: "add", params: { row, edit: this.edit } })
    },
    // 点击编辑跳转数据回填
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteGoods({ id: row.goods_id }).then((res) => {
            console.log(res)
            if (res.data.meta.status == 200) {
              this.$message({
                message: res.data.meta.msg,
                type: "success"
              })
            }
          })
          this.getTable()
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    }
    // 删除商品
  },
  created() {
    this.getTable()
  },
  mounted() {},
  components: {
    myInput
  },
  filters: {
    times(val) {
      return new Date(val).toLocaleString()
    }
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.header {
  width: 610px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.goods {
  padding: 15px;
  background: white;
}
</style>
