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
			<div class="right"></div>
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
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    InternetTitle,userTotal,userAge,userEquipment,userNumber,userRider,userCategory
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.Internet{
	width: 100vm;
	height: 100vh;
	.top{
		width: 100%;
		height: 1rem;
	}
	.box{
		width: 100%;
		height: 100%;
		display: flex;
		.left{
			width: 20%;
			height: 100%;
			background: #3b3c3e;
			.userTotal{
				margin-bottom: .125rem
			}
			.userAge{
				margin-bottom: .125rem
			}
			.userEquipment{
				margin-bottom: .125rem
			}
			.userNumber{
				margin-bottom: .125rem
			}
			.userRider{
				margin-bottom: .125rem
			}
		}
		.right{
			width: 75%;
			height: 100%;
			background: green;
		}

	}
}
</style>
