<template>
  <div class="box">
    <el-container>
      <el-aside :width="isCollapse == false ? '200px' : '64px'" style="background-color: #333744">
        <div class="header">
          <img src="../../../b6a88f71a4dc9303c5e05068a666189d46b35d3c.jpg@336w_190h_1c.jpg" alt="" />
          <p class="title" v-show="isCollapse == false">电商后台管理系统</p>
        </div>
        <el-menu
          :collapse="isCollapse"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu v-for="item in leftList" :key="item.id" :index="item.path">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item-group v-for="ele in item.children" :key="ele.id">
              <el-menu-item :index="ele.path" @click="bread(item.authName, ele.authName)">{{
                ele.authName
              }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <i
              :class="isCollapse == false ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
              @click="isCollapse = !isCollapse"
            ></i>
          </div>
          <div>
            <el-button type="info" @click="quit">退出</el-button>
          </div>
        </el-header>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/index' }"><span @click="authName = []">首页</span></el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in authName" :key="index">{{ item }}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { removeToken } from "../untils/auth"
export default {
  data() {
    return {
      leftList: [],
      isCollapse: false,
      authName: []
    }
  },
  methods: {
    getLeftList() {
      this.$http({ url: this.$http.apis("/menus"), method: "get" }).then((res) => {
        console.log(res)
        this.leftList = res.data.data
      })
    },
    quit() {
      removeToken()
      this.$router.push({ path: "/login" })
    },
    bread(item, ele) {
      this.authName = [item, ele]
    }
  },
  created() {
    this.getLeftList()
  },
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
  ::v-deep .el-container {
    width: 100%;
    height: 100%;
  }
  ::v-deep .el-header {
    height: 90px !important;
    background: #333744;
    display: flex;
    line-height: 90px;
    justify-content: space-between;
    i {
      font-size: 24px;
      color: white;
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    color: white;
    margin-top: 15px;
    margin-bottom: 15px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .tops {
    width: 100%;
    height: 60px;
  }
}
</style>
