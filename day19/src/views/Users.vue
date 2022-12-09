<template>
  <div>
    <div class="users">
      <div class="header">
        <div>
          <el-input placeholder="请输入内容" v-model="value" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
        </div>
        <el-button type="primary" @click="add">添加用户</el-button>
      </div>
      <el-table ref="singleTable" :data="list" highlight-current-row style="width: 100%" border>
        <el-table-column type="index" label="#" width="50"></el-table-column>
        <el-table-column property="username" label="姓名"> </el-table-column>
        <el-table-column property="email" label="邮箱"> </el-table-column>
        <el-table-column property="mobile" label="电话"> </el-table-column>
        <el-table-column property="role_name" label="角色"> </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.mg_state"
              @change="switchType(scope.row)"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
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
            <el-button size="mini" type="warning" @click="handleAssign(scope.$index, scope.row)"
              ><i class="el-icon-setting"></i
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageCurrent"
        :page-sizes="[1, 2, 3, 4, 5]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
      <el-dialog :title="edit == -1 ? '添加用户' : '编辑用户'" :visible.sync="dialogFormVisible">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" :prop="edit != -1 ? ' ' : 'username'">
            <el-input v-model="ruleForm.username" :disabled="edit != -1"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" v-if="edit == -1">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="mobile">
            <el-input v-model="ruleForm.mobile"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="分配角色" :visible.sync="dialogFormVisible2">
        <p style="margin-bottom: 10px">当前的用户: {{ role_name }}</p>
        <p style="margin-bottom: 10px">当前的角色: {{ username }}</p>
        <el-cascader v-model="title" :options="options"></el-cascader>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="upPermissions">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role_name: "",
      username: "",
      title: "",
      options: [],
      value: "",
      pageCurrent: 1,
      roleId: 0,
      pageSize: 5,
      list: [],
      total: 0,
      dialogFormVisible: false,
      dialogFormVisible2: false,
      edit: -1,
      ruleForm: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        mobile: [{ required: true, message: "请输入电话", trigger: "blur" }]
      }
    }
  },
  methods: {
    add() {
      this.edit = -1
      this.ruleForm = {}
      this.dialogFormVisible = true
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getTable()
    },
    handleCurrentChange(val) {
      this.pageCurrent = val
      this.getTable()
    },
    getTable(required = "") {
      this.$http({
        url: this.$http.apis("/users"),
        methods: "get",
        params: { query: required, pagenum: this.pageCurrent, pagesize: this.pageSize }
      }).then((res) => {
        console.log(res)
        this.list = res.data.data.users
        this.total = res.data.data.total
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.edit == -1) {
            this.$http({ url: this.$http.apis("/users"), method: "post", data: this.ruleForm }).then((res) => {
              if (res.data.meta.status == 201) {
                this.getTable()
                this.$message({
                  message: res.data.meta.msg,
                  type: "success"
                })
              }
            })
          } else {
            this.$http({
              url: this.$http.apis(`/users/${this.ruleForm.id}`),
              method: "put",
              data: { email: this.ruleForm.email, mobile: this.ruleForm.mobile }
            }).then((res) => {
              if (res.data.meta.status == 200) {
                this.getTable()
                this.$message({
                  message: res.data.meta.msg,
                  type: "success"
                })
              }
            })
          }

          this.dialogFormVisible = false
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true
      this.edit = index
      this.ruleForm = row
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({ url: this.$http.apis(`users/${row.id}`), method: "delete" }).then((res) => {
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
    switchType(row) {
      this.$http({ url: this.$http.apis(`/users/${row.id}/state/${row.mg_state}`), method: "put" }).then((res) => {
        console.log(res)
        if (res.data.meta.status == 200) {
          this.$message({
            message: res.data.meta.msg,
            type: "success"
          })
        }
      })
      this.getTable()
    },
    search() {
      this.getTable(this.value)
    },
    handleAssign(index, row) {
      this.dialogFormVisible2 = true
      // console.log(row)
      this.role_name = row.role_name
      this.username = row.username
      this.roleId = row.id
      this.getRoles()
    },
    getRoles() {
      this.options = []
      this.$http({ url: this.$http.apis("/roles"), methods: "get" }).then((res) => {
        // console.log(res)
        res.data.data.forEach((item) => {
          this.options.push({ label: item.roleName, value: item.id })
        })
      })
    },
    // 获取权限列表
    upPermissions() {
      this.$http({
        url: this.$http.apis(`/users/${this.roleId}/role`),
        method: "put",
        data: { rid: this.title[0] }
      }).then((res) => {
        console.log(res)
        if (res.data.meta.status == 200) {
          this.$message({
            message: res.data.meta.msg,
            type: "success"
          })
        }
        this.dialogFormVisible2 = false
        this.title = ""
      })
    }
  },
  created() {
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
