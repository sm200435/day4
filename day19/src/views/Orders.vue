<template>
  <div>
    <div class="users">
      <div class="header">
        <div>
          <el-input placeholder="请输入内容" v-model="value" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
        </div>
      </div>
      <el-table ref="singleTable" :data="list" highlight-current-row style="width: 100%" border>
        <el-table-column type="index" label="#" width="50"></el-table-column>
        <el-table-column property="order_number" label="订单编号"> </el-table-column>
        <el-table-column property="order_price" label="订单价格"> </el-table-column>
        <el-table-column property="mobile" label="是否付款">
          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.order_pay == 1">已付款</el-button>
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
            <el-button size="mini" type="primary" @click="handleEdit()"><i class="el-icon-edit"></i></el-button>
            <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)"
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
      <el-dialog title="修改地址" :visible.sync="dialogFormVisible">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="详细地址" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="省市区/县" prop="city">
            <el-cascader :options="cityOptions" v-model="ruleForm.city" change-on-select> </el-cascader>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="查看物流信息" :visible.sync="dialogFormVisible2">
        <el-timeline>
          <el-timeline-item v-for="(activity, index) in kuaidi" :key="index" :timestamp="activity.time">
            {{ activity.context }}
          </el-timeline-item>
        </el-timeline>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import cityOptions from "@/assets/city_data2017_element"
export default {
  data() {
    return {
      list: [],
      dialogFormVisible: false,
      dialogFormVisible2: false,
      pagesize: 5,
      pagenum: 1,
      value: "",
      total: 0,
      ruleForm: {
        name: "",
        city: ""
      },
      rules: {
        name: [{ required: true, message: "请输入详情地址", trigger: "blur" }],
        city: [{ required: true, message: "请选择省市区", trigger: "blur" }]
      },
      kuaidi: []
    }
  },
  methods: {
    getTable() {
      this.$http({
        url: this.$http.apis("/orders"),
        method: "get",
        params: {
          pagesize: this.pagesize,
          pagenum: this.pagenum
        }
      }).then((res) => {
        console.log(res)
        this.list = res.data.data.goods
        this.total = res.data.data.total
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
    search() {
      this.$http({
        url: this.$http.apis("/orders"),
        method: "get",
        params: {
          query: this.value,
          pagesize: this.pagesize,
          pagenum: this.pagenum
        }
      }).then((res) => {
        console.log(res)
        this.list = res.data.data.goods
        this.total = res.data.data.total
      })
    },
    handleEdit() {
      this.dialogFormVisible = true
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    handleDelete(index, row) {
      this.dialogFormVisible2 = true
      this.$http({ url: this.$http.apis(`/kuaidi/${row.id}`) }).then((res) => {
        console.log(res)
        this.kuaidi = res.data.data
      })
    }
  },
  created() {
    this.cityOptions = cityOptions
    this.getTable()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.users {
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
