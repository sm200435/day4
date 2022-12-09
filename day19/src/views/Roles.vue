<template>
  <div>
    <div class="roles" style="padding: 15px; background-color: white">
      <el-button type="primary" @click="add">添加角色</el-button>
      <el-table stripe ref="singleTable" :data="list" highlight-current-row style="width: 100%" border>
        <el-table-column type="expand">
          <template slot-scope="props">
            <div class="roles-slot">
              <el-row v-for="item in props.row.children" :key="item.id" style="border: 1px solid #ccc">
                <el-col :span="5" style="border-left: 1px solid #ccc">
                  <el-button type="primary"
                    >{{ item.authName }} <i class="el-icon-close" @click="delRoles(props.row.id, item.id)"></i
                  ></el-button>
                  <i class="el-icon-caret-right"></i>
                </el-col>
                <el-col :span="16">
                  <el-row v-for="ele in item.children" :key="ele.id">
                    <el-col :span="8">
                      <el-button type="success"
                        >{{ ele.authName }} <i class="el-icon-close" @click="delRoles(props.row.id, ele.id)"></i
                      ></el-button>
                      <i class="el-icon-caret-right"></i>
                    </el-col>
                    <el-col :span="12">
                      <el-button v-for="i in ele.children" :key="i.id" type="warning"
                        >{{ i.authName }} <i class="el-icon-close" @click="delRoles(props.row.id, i.id)"></i></el-button
                    ></el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </template>
        </el-table-column>
        <el-table-column type="index" width="50" label="#"></el-table-column>
        <el-table-column property="roleName" label="角色名称"> </el-table-column>
        <el-table-column property="roleDesc" label="角色描述"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)"
              ><i class="el-icon-edit">编辑</i></el-button
            >
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"
              ><i class="el-icon-delete">删除</i></el-button
            >
            <el-button size="mini" type="warning" @click="handleAssign(scope.row)"
              ><i class="el-icon-setting">分配权限</i></el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-dialog :title="edit == -1 ? '添加角色' : '编辑角色'" :visible.sync="dialogFormVisible">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="角色名称" prop="roleName">
            <el-input v-model="ruleForm.roleName"></el-input>
          </el-form-item>
          <el-form-item label="角色描述" prop="roleDesc">
            <el-input v-model="ruleForm.roleDesc"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="分配权限" :visible.sync="dialogFormVisible2">
        <el-tree
          :data="treeList"
          show-checkbox
          node-key="id"
          default-expand-all
          @getHalfCheckedKeys="trueTree(val)"
          :default-checked-keys="[5]"
          :props="defaultProps"
          ref="tree"
        >
        </el-tree>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="upTree">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roleid: -1,
      // 当前修改权限的id
      list: [],
      defaultProps: {
        children: "children",
        // 指定子树
        label: "authName"
        // 指定节点标签
      },
      treeList: [],
      // 分配权限
      dialogFormVisible: false,
      dialogFormVisible2: false,
      ruleForm: {
        roleName: "",
        roleDesc: ""
      },
      edit: -1,
      rules: {
        roleName: [{ required: true, message: "请输入角色名称", trigger: "blur" }],
        roleDesc: [{ required: true, message: "请输入角色描述", trigger: "blur" }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.edit == -1) {
            this.$http({ url: this.$http.apis("/roles"), method: "post", data: this.ruleForm }).then((res) => {
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
              url: this.$http.apis(`/roles/${this.ruleForm.id}`),
              method: "put",
              data: { roleName: this.ruleForm.roleName, roleDesc: this.ruleForm.roleDesc }
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
      this.edit = row.id
      this.ruleForm = row
      this.dialogFormVisible = true
    },
    add() {
      this.dialogFormVisible = true
      this.edit = -1
      this.ruleForm = {}
    },
    getTable() {
      this.$http({ method: "get", url: this.$http.apis("/roles") }).then((res) => {
        console.log(res)
        this.list = res.data.data
      })
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({ url: this.$http.apis(`roles/${row.id}`), method: "delete" }).then((res) => {
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
    handleAssign(row) {
      // console.log(row)
      // 获取权限数据
      this.dialogFormVisible2 = true
      let res = []
      this.roleid = row.id
      row.children.forEach((item) => {
        item.children.forEach((ele) => {
          ele.children.forEach((i) => {
            res.push(i.id)
          })
        })
      })
      console.log(res)
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(res)
      })
    },
    upTree() {
      let trueTree = this.$refs.tree.getCheckedKeys().join(",")
      let trueTreeban = this.$refs.tree.getHalfCheckedKeys().join(",")
      // console.log(this.trueTreeban + "," + this.trueTree)
      let treeAll = trueTreeban + "," + trueTree
      this.$http({
        url: this.$http.apis(`/roles/${this.roleid}/rights`),
        method: "post",
        data: { rids: treeAll }
      }).then((res) => {
        console.log(res)
        if (res.data.meta.status == 200) {
          this.$message({
            message: res.data.meta.msg,
            type: "success"
          })
        }
        this.getTable()
        this.dialogFormVisible2 = false
      })
    },
    delRoles(roleId, rightId) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({ url: this.$http.apis(`/roles/${roleId}/rights/${rightId}`), method: "delete" }).then((res) => {
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
    this.$http({ url: this.$http.apis("/rights/tree"), method: "get" }).then((res) => {
      console.log(res)
      this.treeList = res.data.data
    })
    // 权限数据
  },
  mounted() {},
  components: {},
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
