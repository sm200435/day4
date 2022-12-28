<template>
  <div class="userTrend">
    <div class="left">
      <div class="user1">实时订单趋势图</div>
      <div class="user2">User Total Count</div>
      <div class="user3">23,242</div>
      <div class="user4">看看咱班就业率</div>
      <div class="user5">2.32%</div>
    </div>
    <div class="right">
			<div id="chartsTrend">
			</div>
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
      var myChart = echarts.init(document.getElementById("chartsTrend"))
			var option = {
        backgroundColor: "#424345",
        color: ["#b7f497"],
        legend: {
          // data: ["去年新增骑手", "今年新增骑手"],
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
          bottom: "26%",
          top: "15%",
          containLabel: true
        },
        dataZoom: [
    {
      show: true,
      realtime: true,
      start: 0,
      end: 100,
      xAxisIndex: [0, 1]
    },
    {
      type: 'inside',
      realtime: true,
      start: 30,
      end: 70,
      xAxisIndex: [0, 1]
    }
  ],
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
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
                color: "#FFFFFF"
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
              color: "#FFFFFF"
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
                color: "black",
                width: 1,
                type: "solid"
              }
            }
          }
        ],
        series: [
          {
            // name: "去年新增骑手",
            type: "line",
            data: [1000, 500, 700, 1400, 700, 1200, 800, 1100, 600, 1000, 1200, 400,1000],
            smooth: true,
            symbolSize: 0
          },
          // {
          //   name: "今年新增骑手",
          //   type: "line",
          //   data: [110, 220, 330, 440, 550, 360, 400, 580, 340, 440, 200, 100],
          //   smooth: true,
          //   symbolSize: 0
          // }
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
.userTrend {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 180px;
    height: 100%;
    // background: #ccc;
    color: white;
    padding: 0.2rem 0.2rem 0rem 0.2rem;
    .user1 {
      width: 100%;
      font-size: 0.1875rem;
    }
    .user2 {
      width: 100%;
      font-size: 0.025rem;
    }
    .user3 {
      width: 100%;
      font-size: 0.3725rem;
      font-weight: bold;
      margin: 3px 0 3px 0;
    }
    .user4 {
      width: 100%;
      font-size: 0.025rem;
    }
    .user5 {
      width: 100%;
      font-size: 0.175rem;
      color: #c5f177;
    }
  }
  .right {
    flex: 1;
    height: 100%;
    // background: #424345;
		#chartsTrend{
			width: 100%;
			height: 100%;
		}
  }
}
</style>
