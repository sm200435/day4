<template>
  <div>
    <el-dialog
      :title="edit == -1 ? '添加角色' : '编辑角色'"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="ruleForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      ruleForm: {
        roleName: "",
        roleDesc: ""
      },
      rules: {
        roleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" }
        ],
        roleDesc: [
          { required: true, message: "请输入角色描述", trigger: "blur" }
        ]
      },
      edit: -1
    }
  },
  methods: {
    info() {
      this.dialogFormVisible = true
    },
    // 控制对话框的显示和隐藏
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit("confirm", this.ruleForm)
          this.dialogFormVisible = false
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    // 点击确认表单不为空就把数据传给父
    backfill(row) {
      console.log(row)
      this.edit = row.id
      this.dialogFormVisible = true
      this.ruleForm = row
    }
    // 点击编辑数据回填对话框显示
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
