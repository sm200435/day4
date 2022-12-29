<template>
  <div class="Internet">
    <div class="top">
      <InternetTitle></InternetTitle>
    </div>
    <div class="box">
      <div class="left">
        <div class="userTotal">
          <userTotal></userTotal>
        </div>
        <div class="userAge">
          <userAge></userAge>
        </div>
        <div class="userEquipment">
          <userEquipment></userEquipment>
        </div>
        <div class="userNumber">
          <userNumber></userNumber>
        </div>
        <div class="userRider">
          <userRider></userRider>
        </div>
        <div class="userCategory">
          <userCategory></userCategory>
        </div>
      </div>
      <div class="right">
        <div class="userToday">
          <userToday></userToday>
        </div>
        <div class="userCity">
          <userCity></userCity>
        </div>
        <div class="podconent">
          <div class="userMap">
            <userMap></userMap>
          </div>
          <div class="userScore">
            <userScore></userScore>
          </div>
        </div>
        <div class="podbottom">
          <div class="left">
						<div class="userSales">
							<userSales></userSales>
						</div>
						<div class="userTrend">
							<userTrend></userTrend>
						</div>
						<div class="userScatter">
							<userScatter></userScatter>
						</div>
					</div>
          <div class="rights">
						<div class="userRanking">
							<userRanking></userRanking>
						</div>
					</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InternetTitle from "../components/InternetTitle"
import userTotal from "../components/userTotal"
import userAge from "../components/userAge"
import userEquipment from "../components/userEquipment"
import userNumber from "../components/userNumber"
import userRider from "../components/userRider"
import userCategory from "../components/userCategory"
import userToday from "../components/userToday"
import userCity from "../components/userCity"
import userMap from "../components/userMap"
import userScore from "../components/userScore"
import userSales from "../components/userSales"
import userTrend from "../components/userTrend"
import userScatter from "../components/userScatter"
import userRanking from "../components/userRanking"
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    InternetTitle,
    userTotal,
    userAge,
    userEquipment,
    userNumber,
    userRider,
    userCategory,
    userToday,
    userCity,
    userMap,
    userScore,
		userSales,
		userTrend,
		userScatter,
		userRanking
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.Internet {
  width: 100vm;
  height: 101vh;
  .top {
    width: 100%;
    height: 1rem;
  }
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
      width: 20%;
      height: 100%;
      background: #3b3c3e;
      .userTotal {
        margin-bottom: 0.125rem;
      }
      .userAge {
        margin-bottom: 0.125rem;
      }
      .userEquipment {
        margin-bottom: 0.125rem;
      }
      .userNumber {
        margin-bottom: 0.125rem;
      }
      .userRider {
        margin-bottom: 0.125rem;
      }
    }
    .right {
      width: 80%;
      height: 100%;
      background: #1c1c1c;
      padding-left: 10px;
      .userCity {
        margin-top: 10px;
      }
      .podconent {
        margin-top: 10px;
        width: 100%;
        height: 500px;
        // background-color: green;
        display: flex;
        .userMap {
          width: 1040px;
          height: 100%;
          margin-right: 10px;
        }
        .userScore {
          height: 100%;
          width: 560px;
          // background: red;
        }
      }
      .podbottom {
        width: 100%;
        margin-top: 10px;
        height: 315px;
        background: #1b1b1b;
        display: flex;
        .left {
          width: 1040px;
          height: 100%;
					margin-right: 10px;
					background: #1c1c1c;
					.userSales{
						width: 100%;
						height: 25px;
						margin-bottom: 10px;
					}
					.userTrend{
						width: 100%;
						height: 170px;
						background: #424345;
					}
					.userScatter{
						margin-top:10px;
						width: 100%;
						height: 100px;
						border-top: 10px solid #53784c;
						border-bottom: 10px solid #53784c;
					}
        }
        .rights {
					width: 560px;
          height: 100%;
					// background: blue;
					.userRanking{
						width: 100%;
						height: 100%;
					}
        }
      }
    }
  }
}
</style>
