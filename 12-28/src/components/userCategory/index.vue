<template>
  <div class="userCategory">
    <div class="box">
      <div class="user1">
        当前热卖品类
        <div>Hot Categoin</div>
      </div>
      <div class="user2">最后更新时间: 2022-12-25 14:25:50</div>
    </div>
		<div id="chartsCategory">

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
      var myChart = echarts.init(document.getElementById("chartsCategory"))
      var option = {
        color: ["#D7f595"],
        backgroundColor: "#2a2b2d",
        xAxis: {
          type: "category",
          data: ["番茄", "榴莲", "红薯", "菠萝", "雪莲", "梨", "苹果"],
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
        },
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
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)"
            },
            barWidth: 20
          }
        ],
				grid: {
          left: "0%",
          right: "4%",
          bottom: "0%",
          top: "10%",
          containLabel: true
        },
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
.userCategory {
  height: 2.025rem;
  background: #2a2b2d;
  padding: 0.2rem 0.2rem 0rem 0.2rem;
  .box {
    display: flex;
    color: white;
    .user1 {
      width: 46%;
      font-size: 0.1875rem;
      div {
        font-size: 0.03rem;
        margin-top: 0.02rem;
      }
    }
    .user2 {
      width: 54%;
      margin-top: 0.03rem;
      font-size: 0.03rem;
    }
  }
	#chartsCategory{
		width: 100%;
		height: 110px;
	}
}
</style>
