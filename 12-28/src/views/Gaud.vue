<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script src="https://webapi.amap.com/loader.js"></script>
<script type="text/javascript">
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
  data() {
    return {}
  },
  methods: {
    getGaud() {
      AMapLoader.load({
        key: "1f21c2e76115a92e4b556f4edf228274", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        AMapUI: {
          // 是否加载 AMapUI，缺省不加载
          version: "1.1", // AMapUI 版本
          plugins: ["overlay/SimpleMarker"] // 需要加载的 AMapUI ui插件
        },
        Loca: {
          // 是否加载 Loca， 缺省不加载
          version: "2.0" // Loca 版本
        }
      })
        .then((AMap) => {
          var map = new AMap.Map("container")
          map.addControl(new AMap.Scale())
        })
        .catch((e) => {
          console.error(e) //加载错误提示
        })
    }
  },
  created() {
		this.getGaud()
	},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100vh;
}
</style>
