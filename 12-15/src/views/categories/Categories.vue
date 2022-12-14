<template>
  <div>
    <div class="categories">
      <el-button size="mini" type="primary" @click="add">添加分类</el-button>
      <el-table
        :data="list"
        style="width: 100%"
        row-key="cat_id"
        border
        :tree-props="{ children: 'children' }"
      >
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
            <el-button
              v-else
              size="mini"
              type="danger"
              icon="el-icon-close"
              circle
            ></el-button>
          </template>
        </el-table-column>
        <el-table-column label="排序">
          <template slot-scope="scope">
            <el-button
              type="primary"
              v-if="scope.row.cat_level == 0"
              size="mini"
              >一级</el-button
            >
            <el-button
              type="success"
              v-if="scope.row.cat_level == 1"
              size="mini"
              >二级</el-button
            >
            <el-button
              type="warning"
              v-if="scope.row.cat_level == 2"
              size="mini"
              >三级</el-button
            >
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
    <AddEdits v-if="visivle" ref="addedits" @confirm="confirm"></AddEdits>
  </div>
</template>

<script>
import {
  categories,
  addCategories,
  editCategories,
  deleteCategories
} from "@/untils/categories"
import AddEdits from "./AddEdits.vue"
export default {
  data() {
    return {
      pagenum: 1,
      pagesize: 5,
      list: [],
      total: 0,
      visivle: false,
      edit: -1
    }
  },
  methods: {
    getTable(type = "") {
      categories({ type, pagenum: this.pagenum, pagesize: this.pagesize }).then(
        (res) => {
          console.log(res)
          this.total = res.data.data.total
          this.list = res.data.data.result
        }
      )
    },
    // 商品分类数据
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
      console.log(ruleForm)
      if (this.edit == -1) {
        addCategories(ruleForm).then((res) => {
          if (res.data.meta.status == 201) {
            this.getTable()
            this.$message({
              message: res.data.meta.msg,
              type: "success"
            })
          }
        })
      } else {
        editCategories(ruleForm).then((res) => {
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
          deleteCategories({ id: row.cat_id }).then((res) => {
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
    // 点击删除编辑
  },
  created() {
    this.getTable()
  },
  mounted() {},
  components: {
    AddEdits
  },
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
