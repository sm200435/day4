<template>
  <div>
    <div class="box">
      <div class="login">
        <div class="login-img">
          <img
            src="../../../b6a88f71a4dc9303c5e05068a666189d46b35d3c.jpg@336w_190h_1c.jpg"
            alt=""
          />
        </div>
        <div class="login-form">
          <el-form
            :rules="rules"
            ref="ruleForm"
            :model="form"
            label-width="80px"
          >
            <el-form-item label="" prop="name">
              <el-input
                v-model="form.name"
                prefix-icon="el-icon-user-solid"
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="pass">
              <el-input
                v-model="form.pass"
                show-password
                prefix-icon="el-icon-s-goods"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('ruleForm')"
                >登录</el-button
              >
              <el-button type="info">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setToken } from "@/untils/auth"
import { login } from "@/untils/login"
export default {
  data() {
    return {
      form: {
        name: "",
        pass: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          { pattern: "admin", message: "登录账号错误", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          { pattern: "123456", message: "登录密码错误", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login({
            username: this.form.name,
            password: this.form.pass
          }).then((res) => {
            console.log(res)
            if (res.data.meta.status == 200) {
              this.$notify({
                title: res.data.meta.msg,
                message: `欢迎用户${res.data.data.username}`,
                duration: 2000
              })
              setToken(res.data.data.token)
              this.$router.push({ path: "/wecome" })
            } else {
              this.$notify({
                title: res.data.meta.msg,
                duration: 2000
              })
            }
          })
        } else {
          console.log("error submit!!")
          return false
        }
      })

      // this.$http.send("/login", this.form, "post", "from").then((res) => {
      //   console.log(res)
      // })
    }

    // http://localhost:10000/api/loginn?username=admin&password=123456
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  background: url("../../../6.webp") 100% 100% no-repeat;
  background-size: 100% 100%;
  .login {
    width: 450px;
    height: 304px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    .login-img {
      width: 130px;
      height: 130px;
      // padding: 10px;
      border: 1px solid #efefef;
      border-radius: 50%;
      position: absolute;
      top: -76px;
      left: 50%;
      transform: translate(-50%, 0%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .login-form {
      width: 90%;
      position: absolute;
      bottom: 0;
      left: 25px;
      ::v-deep .el-form-item__content {
        margin: 0 !important;
      }
      ::v-deep .el-form-item__content {
        text-align: right !important;
      }
    }
  }
}
</style>
