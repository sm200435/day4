<template>
	<div class="userCity">
		<li :class="{active:flag==0}" @click="flag=0">ALL</li>
		<li :class="{active:flag==1}" @click="flag=1">北京</li>
		<li :class="{active:flag==2}" @click="flag=2">上海</li>
		<li :class="{active:flag==3}" @click="flag=3">深圳</li>
		<li :class="{active:flag==4}" @click="flag=4">杭州</li>
		<li :class="{active:flag==5}" @click="flag=5">南京</li>
		<li :class="{active:flag==6}" @click="flag=6">武汉</li>
 </div>
</template>

<script>
export default {
	data () {
		return {
			flag:0
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
.userCity{
	height: 25px;
	background: #35383f;
	display: flex;
	text-align: center;
	li{
		flex: 1;
		line-height: 25px;
		color: #77818c
	}
}
.active{
	background: #8f9daa;
	color: white !important
}
</style>
