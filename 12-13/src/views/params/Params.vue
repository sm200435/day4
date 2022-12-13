<template>
  <div>
    <div class="params">
      <div
        data-v-043e2146=""
        role="alert"
        class="el-alert el-alert--warning is-dark"
      >
        <i class="el-alert__icon el-icon-warning"></i>
        <div class="el-alert__content">
          <span class="el-alert__title"
            >注意：只允许为第三级分类设置相关参数！</span
          ><i
            class="el-alert__closebtn el-icon-close"
            style="display: none"
          ></i>
        </div>
      </div>
      <p style="margin: 20px 0">
        选择商品分类<el-cascader
          v-model="goods_cat"
          :options="options"
          :props="{ value: 'cat_id', label: 'cat_name' }"
          @change="handleChange"
        ></el-cascader>
      </p>
      <el-tabs type="border-card" @tab-click="handoff">
        <el-tab-pane label="动态参数">
          <el-button type="primary" @click="add">添加参数</el-button>
          <el-table
            stripe
            ref="singleTable"
            :data="list"
            highlight-current-row
            style="width: 100%"
            border
          >
            <el-table-column type="expand">
              <!-- <template slot-scope="props"> </template> -->
            </el-table-column>
            <el-table-column
              type="index"
              width="50"
              label="#"
            ></el-table-column>
            <el-table-column property="attr_name" label="参数名称">
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
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态参数">
          <el-button type="primary" @click="add">添加参数</el-button>
          <el-table
            stripe
            ref="singleTable"
            :data="list"
            highlight-current-row
            style="width: 100%"
            border
          >
            <el-table-column type="expand">
              <!-- <template slot-scope="props"> </template> -->
            </el-table-column>
            <el-table-column
              type="index"
              width="50"
              label="#"
            ></el-table-column>
            <el-table-column property="attr_name" label="参数名称">
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
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <AddEdits v-if="visivle" ref="addedits" @confirm="confirm"></AddEdits>
  </div>
</template>

<script>
import { categories } from "@/untils/categories"
import {
  attributes,
  addAttributes,
  editAttributes,
  deleteAttributes
} from "@/untils/params"
import AddEdits from "./AddEdits.vue"
export default {
  data() {
    return {
      options: [],
      goods_cat: [],
      sel: "many",
      list: [],
      visivle: false,
      edit: -1
    }
  },
  methods: {
    getOptions() {
      categories().then((res) => {
        console.log(res)
        this.options = res.data.data.result
      })
    },
    // 选择商品分类数据
    handleChange() {
      attributes({ id: this.goods_cat[2], sel: this.sel }).then((res) => {
        console.log(res.data.data)
        this.list = res.data.data
      })
    },
    // 获取动态参数或者静态参数
    handoff(val) {
      if (val.paneName == 0) {
        this.sel = "many"
      } else {
        this.sel = "only"
      }
      this.handleChange()
    },
    // 切换动态参数还是静态参数
    add() {
      this.visivle = true
      this.edit = -1
      this.$nextTick(() => {
        this.$refs.addedits.info(this.edit)
      })
    },
    // 点击添加跳出模态框
    handleEdit(index, row) {
      console.log(row)
      this.visivle = true
      this.edit = row.attr_id
      this.$nextTick(() => {
        this.$refs.addedits.backfill(row)
      })
    },
    // 点击编辑弹出模态框并回填数据
    confirm(formName) {
      if (this.edit == -1) {
        addAttributes({
          id: this.goods_cat[2],
          attr_name: formName.attr_name,
          attr_sel: this.sel
        }).then((res) => {
          console.log(res.data.meta.status)
          if (res.data.meta.status == 201) {
            this.handleChange()
            this.$message({
              message: res.data.meta.msg,
              type: "success"
            })
          }
        })
      } else {
        editAttributes({
          id: this.goods_cat[2],
          attrid: this.edit,
          attr_name: formName.attr_name,
          attr_sel: this.sel
        }).then((res) => {
          if (res.data.meta.status == 200) {
            this.handleChange()
            this.$message({
              message: res.data.meta.msg,
              type: "success"
            })
          }
        })
      }
      this.visivle = false
    },
    // 确认添加或者编辑
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteAttributes({ id: this.goods_cat[2], attrid: row.attr_id }).then(
            (res) => {
              console.log(res)
              if (res.data.meta.status == 200) {
                this.$message({
                  message: res.data.meta.msg,
                  type: "success"
                })
              }
            }
          )
          this.getTable()
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    }
    // 点击删除
  },
  created() {
    this.getOptions()
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
.params {
  padding: 20px;
  background-color: white;
}
.el-alert--warning.is-dark {
  background-color: #e6a23c;
  color: #fff;
}
.el-alert {
  width: 100%;
  padding: 8px 16px;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  opacity: 1;
  display: flex;
}
</style>
