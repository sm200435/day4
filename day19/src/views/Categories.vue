<template>
  <div>
    <div class="categories">
      <el-button size="mini" type="primary" @click="add">添加分类</el-button>
      <el-table :data="list" style="width: 100%" row-key="cat_id" border :tree-props="{ children: 'children' }">
        <el-table-column prop="cat_name" label="分类名称"> </el-table-column>
        <el-table-column label="是否有效">
          <template slot-scope="scope">
            <el-button
              size="mini"
              v-if="scope.row.cat_deleted == false"
              type="success"
              icon="el-icon-check"
              circle
            ></el-button>
            <el-button v-else size="mini" type="danger" icon="el-icon-close" circle></el-button>
          </template>
        </el-table-column>
        <el-table-column label="排序">
          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.cat_level == 0" size="mini">一级</el-button>
            <el-button type="success" v-if="scope.row.cat_level == 1" size="mini">二级</el-button>
            <el-button type="warning" v-if="scope.row.cat_level == 2" size="mini">三级</el-button>
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

      <el-dialog :title="edit == -1 ? '添加商品分类' : '修改数据'" :visible.sync="dialogFormVisible">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="分类名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="父级分类" v-if="edit == -1">
            <el-cascader
              v-model="ruleForm.region"
              :options="options"
              :props="{ checkStrictly: true }"
              clearable
            ></el-cascader>
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
      edit: -1,
      total: 0,
      pagenum: 1,
      pagesize: 5,
      options: [],
      children: [],
      list: [],
      dialogFormVisible: false,
      ruleForm: {
        name: "",
        region: ""
      },
      rules: {
        name: [{ required: true, message: "分类名称不能为空", trigger: "blur" }]
      }
    }
  },
  methods: {
    getOptions() {
      this.$http({
        url: this.$http.apis("/categories"),
        methos: "get",
        params: { type: [1, 2] }
      }).then((res) => {
        console.log(res)
        res.data.data.forEach((item, index) => {
          this.options.push({
            label: item.cat_name,
            value: item.cat_id,
            id: index,
            children: []
          })
          if (item.children instanceof Array) {
            item.children.forEach((ele) => {
              this.options[index].children.push({ label: ele.cat_name, value: ele.cat_id, id: index })
            })
          }
        })
      })
    },
    // 获取父级分类列表数据
    getTable() {
      this.$http({
        url: this.$http.apis("/categories"),
        methos: "get",
        params: { pagenum: this.pagenum, pagesize: this.pagesize }
      }).then((res) => {
        console.log(res)
        this.total = res.data.data.total
        this.list = res.data.data.result
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
    add() {
      this.dialogFormVisible = true
      this.edit = -1
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.edit == -1) {
            console.log(111)
            let level = this.ruleForm.region.length
            let pid = level == 0 ? 0 : level == 1 ? this.ruleForm.region[0] : this.ruleForm.region[1]
            this.$http({
              url: this.$http.apis("/categories"),
              method: "post",
              data: { cat_level: level, cat_name: this.ruleForm.name, cat_pid: pid }
            }).then((res) => {
              this.getTable()
              this.getOptions()
              if (res.data.meta.status == 201) {
                this.$message({
                  message: res.data.meta.msg,
                  type: "success"
                })
              }
              this.dialogFormVisible = false
              this.ruleForm = {}
            })
          } else {
            this.$http({
              url: this.$http.apis(`/categories/${Number(this.edit)}`),
              method: "put",
              data: { cat_name: this.ruleForm.name }
            }).then((res) => {
              if (res.data.meta.status == 200) {
                this.$message({
                  message: res.data.meta.msg,
                  type: "success"
                })
              }
              this.getTable()
              this.getOptions()
              this.dialogFormVisible = false
            })
          }
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    handleEdit(index, row) {
      this.edit = row.cat_id
      // console.log(this.edit)
      this.ruleForm.name = row.cat_name
      this.dialogFormVisible = true
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({ url: this.$http.apis(`categories/${row.cat_id}`), method: "delete" }).then((res) => {
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
  },
  created() {
    this.getTable()
    this.getOptions()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.categories {
  padding: 15px;
  background: white;
}
</style>
