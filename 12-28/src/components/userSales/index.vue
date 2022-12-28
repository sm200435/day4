<template>
  <div class="userSales">
    <li :class="{ active: flag == 0 }" @click="flag = 0">订单量</li>
    <li :class="{ active: flag == 1 }" @click="flag = 1">销售量</li>
    <li :class="{ active: flag == 2 }" @click="flag = 2">用户量</li>
    <li :class="{ active: flag == 3 }" @click="flag = 3">满意量</li>
  </div>
</template>

<script>
export default {
  data() {
    return {
			flag:0
		}
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
.userSales{
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
	background: #b7ce86;
	color: white !important
}</style>
