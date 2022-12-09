<template>
  <div>
    <div class="goods">
      <div class="header">
        <div>
          <el-input placeholder="请输入内容" v-model="value" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
        </div>
        <el-button type="primary">添加商品</el-button>
      </div>
      <el-table ref="singleTable" :data="list" highlight-current-row style="width: 100%" border>
        <el-table-column type="index" label="#" width="50"></el-table-column>
        <el-table-column property="goods_name" label="商品名称" width="615px"> </el-table-column>
        <el-table-column property="goods_price" label="商品价格"> </el-table-column>
        <el-table-column property="goods_number" label="商品重量"> </el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            {{ scope.row.add_time | times }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)"
              ><i class="el-icon-edit"></i
            ></el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"
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
      <el-dialog title="编辑用户" :visible.sync="dialogFormVisible">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="商品名称" prop="goods_name">
            <el-input v-model="ruleForm.goods_name"></el-input>
          </el-form-item>
          <el-form-item label="价格" prop="goods_price">
            <el-input v-model="ruleForm.goods_price"></el-input>
          </el-form-item>
          <el-form-item label="数量" prop="goods_number">
            <el-input v-model="ruleForm.goods_number"></el-input>
          </el-form-item>
          <el-form-item label="重量" prop="goods_weight">
            <el-input v-model="ruleForm.goods_weight"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      pagenum: 1,
      pagesize: 5,
      total: 0,
      value: "",
      dialogFormVisible: false,
      ruleForm: {
        goods_name: "",
        goods_price: "",
        goods_number: "",
        goods_weight: ""
      },
      rules: {
        goods_name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        goods_price: [{ required: true, message: "请输入价格", trigger: "blur" }],
        goods_number: [{ required: true, message: "请输入数量", trigger: "blur" }],
        goods_weight: [{ required: true, message: "请输入重量", trigger: "blur" }]
      }
    }
  },
  methods: {
    getTable(query = "") {
      this.$http({
        url: this.$http.apis("goods"),
        method: "get",
        params: { query: query, pagenum: this.pagenum, pagesize: this.pagesize }
      }).then((res) => {
        console.log(res)
        this.total = res.data.data.total
        this.list = res.data.data.goods
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({
            url: this.$http.apis(`goods/${this.ruleForm.goods_id}`),
            method: "put",
            data: {
              goods_name: this.ruleForm.goods_name,
              goods_price: this.ruleForm.goods_price,
              goods_number: this.ruleForm.goods_number,
              goods_weight: this.ruleForm.goods_weight
            }
          }).then((res) => {
            console.log(res)
            this.dialogFormVisible = false
          })
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    handleSizeChange(val) {
      this.pagesize = val
      this.getTable()
    },
    handleCurrentChange(val) {
      this.pagenum = val
      this.getTable()
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({ url: this.$http.apis(`goods/${row.goods_id}`), method: "delete" }).then((res) => {
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
    },
    search() {
      this.getTable(this.value)
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true
      this.ruleForm = row
    }
  },
  created() {
    this.getTable()
  },
  filters: {
    times(val) {
      return new Date(val).toLocaleString()
    }
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.goods {
  padding: 15px;
  background: white;
}
.header {
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  ::v-deep .el-input__inner {
    width: 430px !important;
  }
}
</style>
