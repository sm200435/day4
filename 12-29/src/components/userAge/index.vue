<template>
  <div class="userAge">
    <div class="header">
      <div class="left">
        <div class="top">慕课外卖用户年龄分布&平均年龄</div>
        <div class="bottom">Takeaway of Age</div>
      </div>
      <div class="right"><span>30.24</span>岁</div>
    </div>
    <div id="charts"></div>
    <div class="content">
      <li>
        <div class="content-top">375,073</div>
        <div class="content-bottom">
          <div class="content-bottom-round" style="background: #7ea345;"></div>
          0-20
        </div>
      </li>
      <li>
        <div class="content-top">576,479</div>
        <div class="content-bottom">
          <div class="content-bottom-round" style="background: #c6f278;"></div>
          20-30
        </div>
      </li>
      <li>
        <div class="content-top">796,039</div>
        <div class="content-bottom">
          <div class="content-bottom-round" style="background: #d0f895;"></div>
					30-50
        </div>
      </li>
      <li>
        <div class="content-top">275,522</div>
        <div class="content-bottom">
          <div class="content-bottom-round" style="background-color: #f9fa9c;"></div>
          >50
        </div>
      </li>
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
      var myChart = echarts.init(document.getElementById("charts"))
      var option = {
        // tooltip: {
        //   trigger: 'axis',
        //   axisPointer: {
        //     // Use axis to trigger tooltip
        //     // type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        //   },
        // },
        color: ["#7da244", "#c6f278", "#d1f996", "#fafb9d"],
        legend: {},
        grid: {
          left: "5%",
          right: "6%",
          bottom: "3%",
          top: "8%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          // show:false, // 不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
          splitLine: {
            show: false // 不显示网格线
          },
          axisLine: {
            show: true, // 是否显示坐标轴轴线
            // symbol: ['none', 'arrow'],     // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
            // symbolSize: [10, 15],     // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
            lineStyle: {
              color: "#48494d", // 坐标轴线线的颜色
              width: "1", // 坐标轴线线宽
              type: "solid" // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
            }
          }
        },
        yAxis: {
          type: "category",
          axisTick: {
            show: false //刻度线
          },
          axisLine: {
            show: false //隐藏y轴
          },
          axisLabel: {
            show: false //隐藏刻度值
          }

          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
          {
            // name: 'Direct',
            type: "bar",
            stack: "total",
            // emphasis: {
            //   // focus: 'series'
            // },
            data: [500000],
            barWidth: 8
          },
          {
            // name: 'Mail Ad',
            type: "bar",
            stack: "total",
            label: {
              // show: true
            },
            emphasis: {
              focus: "series"
            },
            data: [500000]
          },
          {
            // name: 'Affiliate Ad',
            type: "bar",
            stack: "total",
            label: {
              // show: true
            },
            emphasis: {
              focus: "series"
            },
            data: [800000]
          },
          {
            // name: 'Video Ad',
            type: "bar",
            stack: "total",
            label: {
              // show: true
            },
            emphasis: {
              focus: "series"
            },
            data: [200000]
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
.userAge {
  padding: .2rem .2rem 0 .2rem;
  background: #2a2b2d;
  .header {
    display: flex;
    color: white;
    .left {
      .top {
        font-size: .1875rem;
      }
      .bottom {
        font-size: .025rem;
      }
    }
    .right {
      padding-left: .1875rem;
      span {
        font-size: .3625rem;
        font-weight: bold;
      }
    }
  }
  #charts {
    width: 100%;
    height: .6875rem;
  }
  .content {
    color: white;
    display: flex;
		// padding-left: 4%;
		padding: .125rem 0 .125rem 4%;
    li {
			flex: 1;
      .content-top {
        font-size: .1875rem;
        font-weight: bold;
      }
      .content-bottom {
        padding-left: .15rem;
        // text-align: center;
        font-size: .025rem;
        display: flex;
        .content-bottom-round {
          width: .0625rem;
          height: .0625rem;
          border-radius: 50%;
          background: red;
          margin-top: .075rem;
          margin-right: .0625rem;
        }
      }
    }
  }
}
</style>
