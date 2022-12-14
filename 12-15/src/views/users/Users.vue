<template>
  <div>
    <div class="users">
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
            <el-button
              size="mini"
              type="warning"
              @click="handleAssign(scope.$index, scope.row)"
              ><i class="el-icon-setting"></i
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
      <AddEdits v-if="visivle" ref="addedits" @confirm="confirm"></AddEdits>
      <roles v-if="visivleRole" ref="roles" @confirmRole="confirmRole"></roles>
    </div>
  </div>
</template>

<script>
import {
  users,
  addUsers,
  editUser,
  deleteUser,
  typeUser,
  role
} from "@/untils/users"
import roles from "./role.vue"
import myInput from "@/components/Backgroundpublic/input"
import AddEdits from "./AddEdits.vue"
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
      visivleRole: false
    }
  },
  methods: {
    getTable(query = "") {
      users({
        query: query,
        pagenum: this.pagenum,
        pagesize: this.pagesize
      }).then((res) => {
        console.log(res)
        this.list = res.data.data.users
        this.total = res.data.data.total
      })
    },
    // 获取用户列表数据
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
    add() {
      this.visivle = true
      this.edit = -1
      this.$nextTick(() => {
        this.$refs.addedits.info(this.edit)
      })
    },
    // 点击添加跳出模态框
    handleEdit(index, row) {
      this.visivle = true
      this.edit = row.id
      this.$nextTick(() => {
        this.$refs.addedits.backfill(row)
      })
    },
    // 点击编辑弹出模态框并回填数据
    confirm(ruleForm) {
      if (this.edit == -1) {
        addUsers(ruleForm).then((res) => {
          if (res.data.meta.status == 201) {
            this.getTable()
            this.$message({
              message: res.data.meta.msg,
              type: "success"
            })
          }
        })
      } else {
        editUser({
          id: this.edit,
          email: ruleForm.email,
          mobile: ruleForm.mobile
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
      this.visivle = false
    },
    // 确认添加或者确认编辑
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteUser(row.id).then((res) => {
            console.log(res)
            if (res.data.meta.status == 200) {
              this.$message({
                message: res.data.meta.msg,
                type: "success"
              })
            }
          })
          setTimeout(() => {
            this.getTable()
          }, 100)
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    // 点击删除数据
    switchType(row) {
      typeUser({ uid: row.id, type: row.mg_state }).then((res) => {
        console.log(res)
        if (res.data.meta.status == 200) {
          this.$message({
            message: res.data.meta.msg,
            type: "success"
          })
        }
      })
      setTimeout(() => {
        this.getTable()
      }, 100)
    },
    // 点击修改用户状态
    search() {
      this.getTable(this.value)
    },
    // 点击搜素数据
    handleAssign(index, row) {
      this.visivleRole = true
      // console.log(this.$refs.roles)
      this.$nextTick(() => {
        this.$refs.roles.info(row)
      })
    },
    // 点击弹出分配权限并回填数据
    confirmRole(data) {
      role({ id: data.id, rid: data.rid }).then((res) => {
        if (res.data.meta.status == 200) {
          this.$message({
            message: res.data.meta.msg,
            type: "success"
          })
        }
        this.visivleRole = false
      })
    }
    // 点击确认修改用户角色
  },
  created() {
    this.getTable(this.value)
  },
  mounted() {},
  components: {
    myInput,
    AddEdits,
    roles
  },
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
  width: 610px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
</style>
