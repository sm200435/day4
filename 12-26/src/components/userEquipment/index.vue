<template>
  <div class="userEquipment">
    <div class="left">
      <div id="chartEquipment"></div>
    </div>
    <div class="right">
      <div class="top">
        <div class="top-left">
          <div class="top-top">慕课外卖登录设备</div>
          <div class="top-bottom">Takeaway of Age</div>
        </div>
        <div class="top-right"><span>1,506,080</span>台</div>
      </div>
      <div class="bottom">
        <div class="content">
          <li>
            <div class="content-top">568,985</div>
            <div class="content-bottom">
              <div
                class="content-bottom-round"
                style="background: #89a455"
              ></div>
              Androld
            </div>
          </li>
          <li>
            <div class="content-top">518,312</div>
            <div class="content-bottom">
              <div
                class="content-bottom-round"
                style="background: #a2c068"
              ></div>
              ios
            </div>
          </li>
          <li>
            <div class="content-top">418,783</div>
            <div class="content-bottom">
              <div
                class="content-bottom-round"
                style="background: #b4cc80"
              ></div>
              pc
            </div>
          </li>
        </div>
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
    getChart() {
      var myChart = echarts.init(document.getElementById("chartEquipment"))
      var option = {
        color: ["#b4cc80", "#A2bf68", "#89a455"],
        // color: ["#7da244", "#c6f278", "#d1f996"],
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            roseType: "area",
            label: {
              show: false
            },
            data: [{ value: 26 }, { value: 24 }, { value: 18 }]
          }
        ]
      }
      myChart.setOption(option)
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
.userEquipment {
  display: flex;
  height: 1.625rem;
	background-color: #2a2b2d;
  .left {
    width: 30%;
    height: 100%;
    #chartEquipment {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    width: 70%;
    .top {
      color: white;
      display: flex;
      padding: .25rem .125rem 0 0;
      .top-left {
        .top-top {
          font-size: 0.17rem;
        }
        .top-bottom {
          font-size: 0.025rem;
        }
      }
      .top-right {
        padding-left: 0.12rem;
        span {
          font-size: 0.3rem;
          font-weight: bold;
        }
      }
    }
    .content {
      color: white;
      display: flex;
      padding-top: .3125rem;
      // padding: 0.125rem 0 0.125rem 4%;
      li {
        flex: 1;
        .content-top {
          font-size: 0.1875rem;
          font-weight: bold;
        }
        .content-bottom {
          // padding-left: 0.15rem;
          // text-align: center;
          font-size: 0.025rem;
          display: flex;
          .content-bottom-round {
            width: 0.0625rem;
            height: 0.0625rem;
            border-radius: 50%;
            background: red;
            margin-top: 0.075rem;
            margin-right: 0.0625rem;
          }
        }
      }
    }
  }
}
</style>
