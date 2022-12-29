<template>
  <div class="userRanking">
    <p class="text">地区商家销售排行</p>
    <ul>
      <li>
        <p>合肥</p>
        <div class="huise"></div>
        <div id="myCharts1"></div>
        <div class="tabs">
          <div :class="{ active: flag == 0 }" @click="flag = 0">商家</div>
          <div :class="{ active: flag == 1 }" @click="flag = 1">订单量</div>
          <div :class="{ active: flag == 2 }" @click="flag = 2">销售量</div>
        </div>
        <div class="lis">
          <div style="background: #363636">
            <p>麦当劳</p>
            <p>577</p>
            <p style="color: #d8f19f">213</p>
          </div>
          <div style="background: #272727">
            <p>肯德基</p>
            <p>577</p>
            <p style="color: #d8f19f">213</p>
          </div>
          <div style="background: #363636">
            <p>汉堡王</p>
            <p>577</p>
            <p style="color: #d8f19f">213</p>
          </div>
        </div>
      </li>
      <li>
        <p>合肥</p>
        <div class="huise"></div>
        <div id="myCharts2"></div>
        <div class="tabs">
          <div :class="{ active: flag == 0 }" @click="flag = 0">商家</div>
          <div :class="{ active: flag == 1 }" @click="flag = 1">订单量</div>
          <div :class="{ active: flag == 2 }" @click="flag = 2">销售量</div>
        </div>
        <div class="lis">
          <div style="background: #363636">
            <p>麦当劳</p>
            <p>577</p>
            <p style="color: #d8f19f">213</p>
          </div>
          <div style="background: #272727">
            <p>肯德基</p>
            <p>577</p>
            <p style="color: #d8f19f">213</p>
          </div>
          <div style="background: #363636">
            <p>汉堡王</p>
            <p>577</p>
            <p style="color: #d8f19f">213</p>
          </div>
        </div>
      </li>
      <li>
        <p>合肥</p>
        <div class="huise"></div>
        <div id="myCharts3"></div>
        <div class="tabs">
          <div :class="{ active: flag == 0 }" @click="flag = 0">商家</div>
          <div :class="{ active: flag == 1 }" @click="flag = 1">订单量</div>
          <div :class="{ active: flag == 2 }" @click="flag = 2">销售量</div>
        </div>
        <div class="lis">
          <div style="background: #363636">
            <p>麦当劳</p>
            <p>577</p>
            <p style="color: #d8f19f">213</p>
          </div>
          <div style="background: #272727">
            <p>肯德基</p>
            <p>577</p>
            <p style="color: #d8f19f">213</p>
          </div>
          <div style="background: #363636">
            <p>汉堡王</p>
            <p>577</p>
            <p style="color: #d8f19f">213</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {
      flag: 0
    }
  },
  methods: {
    getChart() {
      var myChart = echarts.init(document.getElementById("myCharts1"))
      var myChart1 = echarts.init(document.getElementById("myCharts2"))
      var myChart2 = echarts.init(document.getElementById("myCharts3"))
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
      var option1 = {
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
                value: 200,
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
      var option2 = {
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
                value: 300,
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
      myChart1.setOption(option1)
      myChart2.setOption(option2)
    }
  },
  created() {},
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
      #myCharts2 {
        width: 100%;
        height: 80px;
      }
      #myCharts3 {
        width: 100%;
        height: 80px;
      }
      .tabs {
        height: 20px;
        background: #35383f;
        display: flex;
        text-align: center;
        margin-top: 15px;
        div {
          flex: 1;
          line-height: 20px;
          color: #77818c;
        }
      }
      .lis {
        height: 98px;
        width: 100%;
        background: white;
        div {
          height: 33.3%;
          display: flex;
          line-height: 32px;
          p {
            flex: 1;
            text-align: center;
            color: white;
          }
        }
      }
    }
  }
}
.active {
  background: #b7ce86;
  color: white !important;
}
</style>
