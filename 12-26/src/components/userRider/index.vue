<template>
  <div class="userRider">
    <div class="user1">
      慕课外卖用户总数
      <div>User Total Count</div>
    </div>
		<div id="chartsRider">

		</div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {}
  },
  methods: {
    getMychart() {
      var myChart = echarts.init(document.getElementById("chartsRider"))
      var option = {
        backgroundColor: "#2a2b2d",
        color: ["#b7f497", "#86c5ee"],
        legend: {
          data: ["去年新增骑手", "今年新增骑手"],
          right: 10,
          top: 0,
          textStyle: {
            color: "#fff",
            fontSize: 10
          },
          icon: "rect", // 图例icon为方块
          itemWidth: 20,
          itemHeight: 10,
          itemGap: 35
        },
        grid: {
          left: "0%",
          right: "4%",
          bottom: "5%",
          top: "20%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisLine: {
              show: true,
              lineStyle: {
                color: "#626365",
                width: 1,
                type: "solid"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,

              textStyle: {
                color: "#626365"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            // name: '%',
            nameTextStyle: {
              color: "#626365"
            },
            offset: 0,
            axisLabel: {
              // formatter: '{value} %',
              color: "#626365"
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#626365",
                width: 1,
                type: "solid"
              }
            },
            splitLine: {
              lineStyle: {
                color: "#626365",
                width: 1,
                type: "dashed"
              }
            }
          }
        ],
        series: [
          {
            name: "去年新增骑手",
            type: "line",
            data: [190, 120, 130, 240, 350, 460, 500, 550, 440, 340, 240, 200],
            smooth: true,
            symbolSize: 0
          },
          {
            name: "今年新增骑手",
            type: "line",
            data: [110, 220, 330, 440, 550, 360, 400, 580, 340, 440, 200, 100],
            smooth: true,
            symbolSize: 0
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  created() {},
  mounted() {
		this.getMychart()
	},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.userRider {
  background: #2a2b2d;
  color: white;
  display: flex;
  flex-wrap: wrap;
  height: 2rem;
  padding: 0.2rem 0.2rem 0rem 0.2rem;
  .user1 {
    width: 100%;
    font-size: 0.1875rem;
    div {
      font-size: 0.03rem;
      margin-top: 0.02rem;
    }
  }
	#chartsRider{
		width: 100%;
		height: 1.25rem;
	}
}
</style>
