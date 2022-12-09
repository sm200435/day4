<template>
  <div>
    <div class="box">
      <div class="login">
        <div class="login-img">
          <img src="../../../微信图片_20221207150518.jpg" alt="" />
        </div>
        <div class="login-form">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="">
              <el-input v-model="form.name" prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="form.pass" show-password prefix-icon="el-icon-s-goods"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">登录</el-button>
              <el-button type="info">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui"
import { setToken } from "../untils/auth"
export default {
  data() {
    return {
      form: {
        name: "",
        pass: ""
      }
    }
  },
  methods: {
    onSubmit() {
      if (this.form.name != "" && this.form.pass != "") {
        if (this.form.name == "admin" && this.form.pass == "123456") {
          this.$http({
            methods: "post",
            url: this.$http.apis("/login"),
            params: { username: this.form.name, password: this.form.pass }
          }).then((res) => {
            console.log(res)
            if (res.data.meta.status == 200) {
              Message.success(res.data.meta.msg)
              setToken(res.data.data.token)
              this.$router.push({ path: "/wecome" })
            }
          })
          // this.$http.send("/login", this.form, "post", "from").then((res) => {
          //   console.log(res)
          // })
        } else {
          Message.error("账号或者密码错误")
        }
      } else {
        Message.warning("账号或者密码不能为空")
      }
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
