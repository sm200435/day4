<template>
  <div class="box">
    <div class="user1">慕课外卖用户总数</div>
    <div class="user2">User Total Count</div>
    <div class="user3">2,023,113</div>
    <div class="user4">
      每日增长率: 102.23% <span> 每月增长率: 152.79%</span>
    </div>
    <div id="chart"></div>
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
      var myChart = echarts.init(document.getElementById("chart"))
      var myColor = ["#949496"]
      var dataLine = [70]
      let positionLeft = 0.4,
        max = 100 + 2 * positionLeft
      var option = {
        backgroundColor: "#424345",
        grid: [
          {
            left: "-2%",
            top: "15%",
            right: "0%",
            bottom: "0%",
            containLabel: true
          }
          //  {
          //      left: '10%',
          //      top: '12%',
          //      right: '5%',
          //      bottom: '8%',
          //      containLabel: true
          //  }
        ],
        xAxis: [
          {
            max: max,
            show: false
          }
        ],
        yAxis: [
          {
            axisTick: "none",
            axisLine: "none",
            offset: "27",
            axisLabel: {
              textStyle: {
                color: "#424345",
                fontSize: "16"
              }
            },
            data: [""]
          },
          {
            axisTick: "none",
            axisLine: "none",
            show: false,
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "16"
              }
            },
            data: [1]
          },
          {
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0)"
              }
            },
            data: []
          }
        ],
        series: [
          {
            //间距
            type: "bar",
            barWidth: 9,
            stack: "b",
            legendHoverLink: false,
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)"
              }
            }

            // data: [positionLeft,positionLeft,positionLeft,positionLeft]
          },
          {
            name: "条",
            type: "bar",
            stack: "b",
            yAxisIndex: 0,
            data: dataLine,
            label: {
              normal: {
                show: false,
                position: "right",
                distance: 10,
                formatter: function (param) {
                  return param.value + "%"
                },
                textStyle: {
                  color: "#ffffff",
                  fontSize: "16"
                }
              }
            },
            barWidth: 1,
            itemStyle: {
              normal: {
                color: function (params) {
                  var num = myColor.length
                  return myColor[params.dataIndex % num]
                }
              }
            },
            z: 2
          },
          {
            name: "白框",
            type: "bar",
            yAxisIndex: 1,
            barGap: "-100%",
            data: [99.8, 99.9, 99.9, 99.9],
            barWidth: 10,
            itemStyle: {
              normal: {
                color: "#424345",
                barBorderRadius: 2
              }
            },
            z: 1
          },
          {
            name: "外框",
            type: "bar",
            yAxisIndex: 2,
             barGap: '-100%',
            data: [100],
            barWidth: 15,
            label: {
              normal: {
                show: true,
                position: "right",
                distance: 10,
                formatter: function (data) {
                  return dataLine[data.dataIndex] + "%"
                },
                textStyle: {
                  color: "#424345",
                  fontSize: "16"
                }
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  var num = myColor.length
                  return myColor[params.dataIndex % num]
                },
                barBorderRadius: 0
              }
            },
            z: 0
          }
          /*     {
         name: '白框',
         type: 'bar',
         yAxisIndex: 1,
         barGap: '-100%',
         data: [0, 0, 0, 0],
         barWidth: 20,
         itemStyle: {
             normal: {
                 color: '#0e2147',
                 barBorderRadius: 0
             }
         },
         z: 1
     },
     {
         name: '外框',
         type: 'bar',
         yAxisIndex: 2,
         barGap: '-100%',
         data: [2, 3, 4, 5],
         barWidth: 22,
         itemStyle: {
             normal: {
                 color: function(params) {
                     var num = myColor.length
                     return myColor[params.dataIndex % num]
                 },
                 barBorderRadius: 0
             }
         },
         z: 0
     }*/
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
.box {
  background: #424345;
  color: white;
  display: flex;
  flex-wrap: wrap;
  height: 140px;
  padding: 20px 20px 0px 20px;
  .user1 {
    width: 100%;
    font-size: 15px;
  }
  .user2 {
    width: 100%;
    font-size: 2px;
  }
  .user3 {
    width: 100%;
    font-size: 29px;
    font-weight: bold;
  }
  .user4 {
    width: 100%;
    font-size: 14px;
    color: #c5f177;
    span {
      color: #658b36;
    }
  }
	#chart{
		width: 100%;
		height: 40px;
	}
}
</style>
