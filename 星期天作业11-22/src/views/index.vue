<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" default-active="/manage" background-color="#545c64" text-color="#fff"
          active-text-color="#ffd04b" router>
          <el-menu-item index="/manage" @click="select('首页','首页')">
            <i class="el-icon-menu"></i>
            <span slot="title" >首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/userList" @click="select('数据管理','用户列表')">用户列表</el-menu-item>
              <el-menu-item index="/shopList" @click="select('数据管理','商家列表')">商家列表</el-menu-item>
              <el-menu-item index="/foodList" @click="select('数据管理','食品列表')">食品列表</el-menu-item>
              <el-menu-item index="/orderList" @click="select('数据管理','订单列表')">订单列表</el-menu-item>
              <el-menu-item index="/adminList" @click="select('数据管理','管理员列表')">管理员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-circle-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/addShop" @click="select('添加数据','添加商铺')">添加商铺</el-menu-item>
              <el-menu-item index="/addGoods" @click="select('添加数据','添加商品')">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              <span>图表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/visitor" @click="select('图表','用户分布')">用户分布</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/vueEdit" @click="select('编辑','文本编辑')">文本编辑</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/adminSet" @click="select('设置','管理员设置')">管理员设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>说明</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/explain" @click="select('说明','说明设置')">说明</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-breadcrumb separator="">
            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a>{{names.val1}}</a></el-breadcrumb-item>
            <el-breadcrumb-item>{{names.val2}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      names:{},
    }
  },
  methods: {
    select(val1,val2){
      // console.log(title:val1,ele:val2);
      if(val1=='首页'){
        this.names={}
      }
      else{
        this.names={val1,val2}
      }
      
    }
  },
  created() {

  },
  mounted() {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
.header{
  background-color: #eff2f7;
  padding-top: 25px
}
</style>
