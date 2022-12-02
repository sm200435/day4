<template>
  <div>
    <!-- <h1>{{item.title}}</h1>
    <ul>
        <li>{{item.name1}}</li>
        <li>{{item.name2}}</li>
        <li>{{item.name3}}</li>
        <li>{{item.name4}}</li>
    </ul>
    不用插槽
    -->
    <!-- <slot></slot>
    匿名插槽 -->
    <!-- <slot name="header"></slot> -->
    <!-- 具名插槽 -->
    <input type="text">
    <!-- <slot name="footer"></slot> -->
    <!-- 具名插槽 -->
    <slot :user="username" name="zuoyongyu"></slot>
 </div>
</template>

<script>
export default {
    // props:{
    //     item:Object
    // },
  data () {
    return {
        username:{
            name:'小白',
            age:11
        }
    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

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
</style>
