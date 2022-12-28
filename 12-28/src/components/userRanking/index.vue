<template>
  <div class="userRanking">
    <p class="text">地区商家销售排行</p>
    <ul>
      <li>
        <p>合肥</p>
        <div class="huise"></div>
        <div id="myCharts1"></div>
      </li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {}
  },
  methods: {
    getChart() {
      var myChart = echarts.init(document.getElementById("myCharts1"))
      var option = {
        backgroundColor: "#2c2c2c",
        color: ["#D3ec9b", "#4d4d4d"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["100%", "75%"],
            avoidLabelOverlap: false,
            hoverAnimation: false, //关闭放大动画
            selectedOffset: 0, //选中块的偏移量
            label: {
              show: false,
              position: "center",
              formatter: "{d}%"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "10",
                fontWeight: "bold",
                color: "#D3ec9b"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 100,
                name: "直接访问",
                selected: true, //默认选中第一块
                label: {
                  show: true, //默认显示第一块
                  fontSize: "10",
                  color: "#D3ec9b"
                }
              },
              { value: 100, name: "邮件营销" }
            ]
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  created() {

	},
  mounted() {
		this.getChart()
	},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.userRanking {
  width: 100%;
  height: 100%;
  background-color: #363636;
  padding-top: 10px;
  .text {
    font-size: 17px;
    color: white;
    padding-left: 25px;
    padding-bottom: 10px;
  }
  ul {
    width: 100%;
    height: 90%;
    display: flex;
    li {
      flex: 1;
      margin-left: 10px;
      background: #2c2c2c;
      color: white;
      p {
        margin-left: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
      }
      .huise {
        width: 100%;
        height: 20px;
        background-color: #5c5c5c;
				margin-bottom: 15px;
      }
      #myCharts1 {
        width: 100%;
        height: 80px;
      }
    }
  }
}
</style>
