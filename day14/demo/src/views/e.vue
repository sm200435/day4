<template>
  <div>
    <h2>你好</h2>

    <ul>
        <li v-for="l in messageList" :key="l.id">
          <!-- 跳转路由并携带query参数，to的字符串写法 -->
          <router-link :to="`/b?id=${l.id}=${l.title}`">{{l.title}}</router-link>
           <!-- 跳转路由并携带query参数，to的对象写法 -->
            <!-- <router-link :to="{
                path:'/b',
                query:{
                    id:l.id,
                    title:l.title
                }
             }">
             {{l.title}}
             </router-link>  -->
    <button @click="pushs(l)">push查看</button>
    <button @click="replaces(l)">replace查看</button>
        </li>
    </ul>
 </div>
</template>

<script>
export default {
  data () {
    return {
        messageList:[
            {
                id:1,
                title:'试点范围士大夫'
            },
            {
                id:2,
                title:'阿斯顿盖饭撒旦发个的法国哈'
            }
        ]
    }
  },
  methods: {
    pushs(l){
        this.$router.push({
            name:'b',
            query:{
                id:l.id,
                title:l.title
            }
        })
    },
    replaces(l){
         this.$router.replace({
            name:'b',
            query:{
                id:l.id,
                title:l.title
            }
        })
    }
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
