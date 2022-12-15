<template>
  <div>
    <div id="main" style="width: 1200px; height: 400px"></div>
  </div>
</template>

<script>
import { reports } from "@/untils/reports"
import * as echarts from "echarts"
export default {
  data() {
    return {}
  },
  methods: {
    getOpen() {
      var chartDom = document.getElementById("main")
      var myChart = echarts.init(chartDom)
      // var oplist = {}
      reports().then((res) => {
        // console.log(res)
        console.log(res.data.data)
        // console.log(res.data.data.legend.data)
        // oplist = res.data.data
        var option = {
          title: {
            text: "用户来源"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985"
              }
            }
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          ...res.data.data
        }
        myChart.setOption(option)
      })
    }
  },
  created() {},
  mounted() {
    this.getOpen()
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
