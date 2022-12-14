<template>
  <div>
    <div class="roles" style="padding: 15px; background-color: white">
      <el-button type="primary" @click="add">添加角色</el-button>
      <el-table
        stripe
        ref="singleTable"
        :data="list"
        highlight-current-row
        style="width: 100%"
        border
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <div class="roles-slot">
              <el-row
                v-for="item in props.row.children"
                :key="item.id"
                style="border: 1px solid #ccc"
              >
                <el-col :span="5" style="border-left: 1px solid #ccc">
                  <el-button type="primary"
                    >{{ item.authName }}
                    <i
                      class="el-icon-close"
                      @click="delRoles(props.row.id, item.id)"
                    ></i
                  ></el-button>
                  <i class="el-icon-caret-right"></i>
                </el-col>
                <el-col :span="16">
                  <el-row v-for="ele in item.children" :key="ele.id">
                    <el-col :span="8">
                      <el-button type="success"
                        >{{ ele.authName }}
                        <i
                          class="el-icon-close"
                          @click="delRoles(props.row.id, ele.id)"
                        ></i
                      ></el-button>
                      <i class="el-icon-caret-right"></i>
                    </el-col>
                    <el-col :span="12">
                      <el-button
                        v-for="i in ele.children"
                        :key="i.id"
                        type="warning"
                        >{{ i.authName }}
                        <i
                          class="el-icon-close"
                          @click="delRoles(props.row.id, i.id)"
                        ></i></el-button
                    ></el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </template>
        </el-table-column>
        <el-table-column type="index" width="50" label="#"></el-table-column>
        <el-table-column property="roleName" label="角色名称">
        </el-table-column>
        <el-table-column property="roleDesc" label="角色描述">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              ><i class="el-icon-edit">编辑</i></el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              ><i class="el-icon-delete">删除</i></el-button
            >
            <el-button
              size="mini"
              type="warning"
              @click="handleAssign(scope.row)"
              ><i class="el-icon-setting">分配权限</i></el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <AddEdits v-if="visivle" ref="addedits" @confirm="confirm"></AddEdits>
      <Assign v-if="visivleAssign" ref="assign" @upAssign="upAssign"></Assign>
    </div>
  </div>
</template>

<script>
import {
  roles,
  addRoles,
  editRoles,
  deleteRoles,
  rightRoles,
  deleteRight
} from "@/untils/roles"
import AddEdits from "./AddEdits.vue"
import Assign from "./Assign.vue"
export default {
  data() {
    return {
      list: [],
      visivle: false,
      visivleAssign: false,
      edit: -1,
      roleid: -1
      // 当前修改权限的id
    }
  },
  methods: {
    getTable() {
      roles().then((res) => {
        console.log(res)
        this.list = res.data.data
      })
    },
    // 获取角色列表数据
    add() {
      this.visivle = true
      this.edit = -1
      this.$nextTick(() => {
        this.$refs.addedits.info()
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
        addRoles(ruleForm).then((res) => {
          if (res.data.meta.status == 201) {
            this.getTable()
            this.$message({
              message: res.data.meta.msg,
              type: "success"
            })
          }
        })
      } else {
        editRoles({
          id: this.edit,
          roleName: ruleForm.roleName,
          roleDesc: ruleForm.roleDesc
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
      console.log(row.id)
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteRoles({ id: row.id }).then((res) => {
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
    handleAssign(row) {
      // console.log(row)
      // 获取权限数据
      this.visivleAssign = true
      let res = []
      this.roleid = row.id
      row.children.forEach((item) => {
        item.children.forEach((ele) => {
          ele.children.forEach((i) => {
            res.push(i.id)
          })
        })
      })
      this.$nextTick(() => {
        this.$refs.assign.info(res)
      })
    },
    // 点击分配权限显示并显示拥有的权限
    upAssign(treeAll) {
      rightRoles({ roleid: this.roleid, rids: treeAll }).then((res) => {
        if (res.data.meta.status == 200) {
          this.$message({
            message: res.data.meta.msg,
            type: "success"
          })
        }
        this.getTable()
        this.visivleAssign = false
      })
    },
    // 确认更新权限
    delRoles(roleid, rightid) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteRight({ roleid, rightid }).then((res) => {
            if (res.data.meta.status == 200) {
              this.$message({
                message: res.data.meta.msg,
                type: "success"
              })
            }
            this.getTable()
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    }
  },
  created() {
    this.getTable()
  },
  mounted() {},
  components: {
    AddEdits,
    Assign
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.roles-slot {
  width: 100%;
  padding: 20px 40px;
}
::v-deep .el-button {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
}
::v-deep .el-icon-caret-right {
  margin-left: 20px;
}
</style>
