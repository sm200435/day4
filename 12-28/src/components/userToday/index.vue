<template>
  <div class="userToday">
    <li>
      <div class="left">
        <div class="left-left">
          <i class="el-icon-eleme"></i>
        </div>
      </div>
      <div class="right">
        <div class="right-left">
          <div class="right-top">今日销售额</div>
          <div class="right-bottom">Number of Age</div>
        </div>
        <div class="right-right"><span>56,998,472</span></div>
      </div>
    </li>
    <li>
			<div class="left">
        <div class="left-left">
          <i class="el-icon-document"></i>
        </div>
      </div>
      <div class="right">
        <div class="right-left">
          <div class="right-top">今日销售额</div>
          <div class="right-bottom">Number of Age</div>
        </div>
        <div class="right-right"><span>56,998,472</span></div>
      </div>
		</li>
    <li>
			<div class="left">
        <div class="left-left">
          <i class="el-icon-suitcase"></i>
        </div>
      </div>
      <div class="right">
        <div class="right-left">
          <div class="right-top">今日销售额</div>
          <div class="right-bottom">Number of Age</div>
        </div>
        <div class="right-right"><span>56,998,472</span></div>
      </div>
		</li>
    <li>
			<div class="left">
        <div class="left-left">
          <i class="el-icon-user"></i>
        </div>
      </div>
      <div class="right">
        <div class="right-left">
          <div class="right-top">今日销售额</div>
          <div class="right-bottom">Number of Age</div>
        </div>
        <div class="right-right"><span>56,998,472</span></div>
      </div>
		</li>
    <li>
			<div class="dui">
				<div>
					<i class="el-icon-success"></i>
				</div>
				<p>转化率</p>
				<p class="lv">13.00%</p>
			</div>
			<div class="cuo">
				<div>
					<i class="el-icon-remove"></i>
				</div>
				<p>退单率</p>
				<p class="lv">5.66%</p>
			</div>
		</li>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.userToday {
  height: 100px;
  display: flex;
	background-color: #424345;
	padding-top: 10px;
  li {
    flex: 1;
		display: flex;
    .left {
      padding-left: 25px;
      .left-left {
        width: 80px;
        height: 80px;
        border-radius: 50%;
				background-color: #88A555;
        margin-right: 20px;
				text-align: center;
				line-height: 110px;
				i{
					color: white;
					font-size: 50px
				}
      }
    }
    .right {
      color: white;
      .right-left {
        .right-top {
          font-size: 0.18rem;
          margin-bottom: 5px;
        }
        .right-bottom {
          font-size: 0.1rem;
        }
      }
      .right-right {
        margin-top: 5px;
        span {
          font-size: 0.35rem;
          font-weight: bold;
        }
      }
    }
		.dui{
			text-align: center;
			color: white;
			margin-left: 90px;
			margin-right: 40px;
			i{
				font-size: 50px;
				color: #d7f595;
			}
			p{
				font-size:8px
			}
			.lv{
				font-size:15px
			}
		}
		.cuo{
			text-align: center;
			color: white;
			i{
				font-size: 50px;
				color: #d7f595;
			}
			p{
				font-size:8px
			}
			.lv{
				font-size:15px
			}
		}
  }
}
</style>
