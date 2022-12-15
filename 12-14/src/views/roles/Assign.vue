<template>
  <div>
    <el-dialog title="分配权限" :visible.sync="dialogFormVisible">
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
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="upTree">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { treeRoles } from "@/untils/roles"
export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        // 指定子树
        label: "authName"
        // 指定节点标签
      },
      treeList: [],
      // 分配权限
      dialogFormVisible: false
    }
  },
  methods: {
    getTable() {
      treeRoles({ type: "tree" }).then((res) => {
        this.treeList = res.data.data
      })
    },
    // 权限数据
    info(res) {
      this.dialogFormVisible = true
      // if (res == []) {
      //   let trueTree = this.$refs.tree.getCheckedKeys()
      //   let trueTreeban = this.$refs.tree.getHalfCheckedKeys()
      //   let treeAll = trueTreeban.concat(trueTree)
      //   this.$nextTick(() => {
      //     this.$refs.tree.setCheckedKeys(treeAll)
      //   })
      // } else {
      setTimeout(() => {
        this.$refs.tree.setCheckedKeys(res)
      }, 200)

      // }
    },
    // 控制对话框的显示和隐藏
    upTree() {
      let trueTree = this.$refs.tree.getCheckedKeys().join(",")
      let trueTreeban = this.$refs.tree.getHalfCheckedKeys().join(",")
      let treeAll = trueTreeban + "," + trueTree
      this.$emit("upAssign", treeAll)
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

<style lang="scss" scoped></style>
