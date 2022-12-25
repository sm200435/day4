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
			</div>
			<div class="right"></div>
		</div>
  </div>
</template>

<script>
import InternetTitle from "../components/InternetTitle"
import userTotal from "../components/userTotal"
import userAge from "../components/userAge"
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    InternetTitle,userTotal,userAge
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
			width: 25%;
			height: 100%;
			background: red;
			.userTotal{
				// height: 160px;
				// border-bottom: #2b2c2e 10px solid;
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
