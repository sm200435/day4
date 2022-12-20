<template>
	<div>
		<div class="box">
			<div class="left">
				<slot></slot>
			</div>
			<div class="right"></div>
		</div>
 </div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	methods: {

	},
	created () {

	},
	mounted () {

	},
	components: {

	},
	computed: {

	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
.box{
	display: flex;
	color: white;
	.left{
		font-size: .225rem;
		background: url(../assets/line1.png) no-repeat;
		background-position: -165px 28px;
		padding-right:12px;
		height: 40px;
	}
	.right{
		flex:1;
		background: url(../assets/line2.png) no-repeat;
		background-position: -430px 16px;
	}
}
</style>
