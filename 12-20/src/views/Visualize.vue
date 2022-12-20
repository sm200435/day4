<template>
  <div class="Visualize">
    <header>
      <h1>全球涉黄工位-传播病菌的平台</h1>
      <p class="timeClass">{{ new Date().toLocaleString() }}</p>
      <p class="textClass">湖南麻豆科技有限公司</p>
    </header>
    <div class="body">
      <div class="left">
        <titles>
          <template>当日情况</template>
        </titles>
        <ul class="situation">
          <li>
            <p class="situationImg">
              <img src="../assets/icona.png" alt=""/>
            </p>
            <p class="situationText">
              今日就诊人数<br />
              <span class="situationNum">1358</span>
              <span class="situationRen">人</span>
            </p>
          </li>
          <li>
            <p class="situationImg">
              <img src="../assets/iconb.png" alt="" />
            </p>
            <p class="situationText">
              今日就诊人数<br />
              <span class="situationNum">1983</span>
              <span class="situationRen">人</span>
            </p>
          </li>
          <li>
            <p class="situationImg">
              <img
                src="../assets/iconc.png"
                alt=""
                style="margin-bottom: 0.04rem"
              />
            </p>
            <p class="situationText">
              今日就诊人数<br />
              <span class="situationNum">930</span>
              <span class="situationRen">人</span>
            </p>
          </li>
          <li>
            <p class="situationImg">
              <img src="../assets/icond.png" alt="" />
            </p>
            <p class="situationText">
              今日就诊人数<br />
              <span class="situationNum">371</span>
              <span class="situationRen">人</span>
            </p>
          </li>
          <li>
            <p class="situationImg">
              <img src="../assets/icone.png" alt="" />
            </p>
            <p class="situationText">
              今日就诊人数<br />
              <span class="situationNum">1683</span>
              <span class="situationRen">人</span>
            </p>
          </li>
          <li>
            <p class="situationImg">
              <img src="../assets/iconf.png" alt="" />
            </p>
            <p class="situationText">
              今日就诊人数<br />
              <span class="situationNum">1091</span>
              <span class="situationRen">人</span>
            </p>
          </li>
        </ul>
        <div class="detect">
          <titles>
            <template>传染监测</template>
          </titles>
          <table cellspacing="0" cellpadding="0">
            <tr>
              <td style="border-bottom: 0.0375rem solid #285996">发病统计</td>
              <td style="border-bottom: 0.0375rem solid #285996">甲类</td>
              <td style="border-bottom: 0.0375rem solid #285996">乙类</td>
              <td style="border-bottom: 0.0375rem solid #285996">丙类</td>
            </tr>
            <tr>
              <td style="border-bottom: 0.0375rem dotted #285996">发病数（万）</td>
              <td style="border-bottom: 0.0375rem dotted #285996">0.03 <span>↓0.01%</span></td>
              <td style="border-bottom: 0.0375rem dotted #285996">163.00 <span>↑4.01</span></td>
              <td style="border-bottom: 0.0375rem dotted #285996">163.00 <span>↑4.01</span></td>
            </tr>
            <tr>
              <td>发病率（%）</td>
              <td>0.3 <span>↓0.01%</span></td>
              <td>100% <span>↑4.01</span></td>
              <td>81.92% <span>↑4.01</span></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import titles from "../components/title.vue"
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    titles
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.Visualize {
  min-width: 1024px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  // background: pink;
  background: url(../assets/bg.png) no-repeat;
  background-size: 100% 100%;
}
header {
  position: relative;
  width: 100%;
  height: 1.25rem;
  background: url(../assets/topbg.png) no-repeat;
  background-size: 100% 100%;
  color: #ccc;
  h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 0.4rem;
    color: white;
    transform: translate(-50%, -50%);
  }
  .timeClass {
    position: absolute;
    top: 0.1875rem;
    left: 0.35rem;
  }
  .textClass {
    position: absolute;
    right: 0.35rem;
    top: 0.1875rem;
  }
}
.body {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 26%;
    padding-left: 0.1875rem;
    .situation {
      width: 100%;
      height: 30%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.25rem;
      li {
        height: 33%;
        width: 50%;
        display: flex;
        .situationImg {
          width: 0.75rem;
          height: 0.75rem;
          background: url(../assets/iconbg.png) no-repeat;
          background-size: 100%, 100%;
          text-align: center;
          line-height: 1.1rem;
          margin-right: 0.1875rem;
					img{
						width: .45rem;
						height: .45rem
					}
        }
        .situationText {
          font-size: 0.17rem;
          color: #708196;
          margin-top: 0.125rem;
        }
        .situationNum {
          font-size: 0.3rem;
          color: #59dac3;
          margin-right: 0.125rem;
        }
        .situationRen {
          color: white;
          font-size: 0.2rem;
        }
      }
    }
    .detect {
      width: 100%;
      height: 10%;
      table {
        width: 100%;
        height: 100%;
        color: white;
      }
    }
  }
  .center {
    flex: 1;
    background: yellow;
  }
  .right {
    width: 26%;
    background: blue;
  }
}
</style>
