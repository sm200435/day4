<template>
  <div class="userAge">
    <div class="header">
      <div class="left">
        <div class="top">慕课外卖用户年龄分布&平均年龄</div>
        <div class="bottom">Takeaway of Age</div>
      </div>
      <div class="right"><span>30.24</span>岁</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    getMychart() {
      option = {
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
          left: "3%",
          right: "4%",
          bottom: "3%",
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
              color: "#ccc", // 坐标轴线线的颜色
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
            barWidth: 20
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
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.userAge {
  padding: 20px 20px 0 20px;
  background: #2a2b2d;
  .header {
    display: flex;
    color: white;
    .left {
      .top {
        font-size: 15px;
      }
      .bottom {
        font-size: 2px;
      }
    }
    .right {
      padding-left: 20px;
      span {
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
}
</style>
