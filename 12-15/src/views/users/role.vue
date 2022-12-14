<template>
  <div>
    <el-dialog title="分配角色" :visible.sync="dialogFormVisible">
      <p style="margin-bottom: 10px">当前的用户: {{ role_name }}</p>
      <p style="margin-bottom: 10px">当前的角色: {{ username }}</p>
      <p>
        分配新角色:
        <el-cascader
          v-model="value"
          :options="options"
          :props="{ value: 'id', label: 'roleName', children: 'meiy' }"
        ></el-cascader>
      </p>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { roleList } from "@/untils/users"
export default {
  data() {
    return {
      value: "",
      options: [],
      dialogFormVisible: false,
      role_name: "",
      username: "",
      id: -1
      // 用户id
    }
  },
  methods: {
    getOption() {
      roleList().then((res) => {
        this.options = res.data.data
      })
    },
    // 获取分配权限列表
    info(row) {
      console.log(row)
      this.id = row.id
      this.role_name = row.role_name
      this.username = row.username
      this.dialogFormVisible = true
    },
    // 弹出对话框并数据回填
    confirm() {
      this.dialogFormVisible = false
      this.$emit("confirmRole", { id: this.id, rid: this.value })
    }
    // 确认把请求需要的数据传给父修改用户角色
  },
  created() {
    this.getOption()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
