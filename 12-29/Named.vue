<template>
	<div class="box">
		<div class="header">
			<h1>H2112A点名表</h1>
			<p class="timeOut">
				{{ dataTime }}
			</p>
		</div>
		<div class="content">
			<div class="left">
				<ul class="part">
					<li v-for="item in arr" :key="item.id">{{ item.name }}</li>
				</ul>
			</div>
			<div class="right">
				<div class="content_div">
					<span>天选之人:{{ title }} {{ titles }}</span>
				</div>
				<div class="footer">
					<button @click="Single">{{ buttontitle }}</button>
					<button @click="Double">{{ buttontitle1 }}</button>
					<button @click="man">{{ buttontitle3 }}</button>
					<button @click="girl">{{ buttontitle2 }}</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { ref, reactive, toRefs, onMounted, onBeforeUnmount } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter, useRoute } from 'vue-router';
	export default {
		setup(props, ctx) {
			const store = useStore();
			const router = useRouter();
			const route = useRoute();
			const data = reactive({
				arr: [
					{
						id: 1,
						name: '张世权',
						sex: 0,
						checked: false,
					},
					{
						id: 2,
						name: '宋海宇',
						sex: 0,
						checked: false,
					},
					{
						id: 3,
						name: '宋增杰',
						sex: 0,
						checked: false,
					},
					{
						id: 4,
						name: '王龙翔',
						sex: 0,
						checked: false,
					},
					{
						id: 5,
						name: '侯建荞',
						sex: 1,
						checked: false,
					},
					{
						id: 6,
						name: '郝嫚嫚',
						sex: 1,
						checked: false,
					},
					{
						id: 7,
						name: '付高聪',
						sex: 0,
						checked: false,
					},
					{
						id: 8,
						name: '张建雨',
						sex: 0,
						checked: false,
					},
					{
						id: 9,
						name: '孙旭瑶',
						sex: 1,
						checked: false,
					},
					{
						id: 10,
						name: '张立',
						sex: 0,
						checked: false,
					},
					{
						id: 11,
						name: '巴钦',
						sex: 0,
						checked: false,
					},
					{
						id: 12,
						name: '吴倩',
						sex: 1,
						checked: false,
					},
					{
						id: 13,
						name: '徐婉颖',
						sex: 1,
						checked: false,
					},
					{
						id: 14,
						name: '刘艺',
						sex: 1,
						checked: false,
					},
					{
						id: 15,
						name: '薛翔元',
						sex: 0,
						checked: false,
					},
					{
						id: 16,
						name: '王伟臣',
						sex: 0,
						checked: false,
					},
					{
						id: 17,
						name: '程怀博',
						sex: 0,
						checked: false,
					},
					{
						id: 18,
						name: '高亚鹏',
						sex: 1,
						checked: false,
					},
					{
						id: 19,
						name: '韩泽雨',
						sex: 0,
						checked: false,
					},
					{
						id: 20,
						name: '李宏恩',
						sex: 0,
						checked: false,
					},
					{
						id: 21,
						name: '江萌洋',
						sex: 1,
						checked: false,
					},
					{
						id: 22,
						name: '孙铭',
						sex: 0,
						checked: false,
					},
					{
						id: 23,
						name: '杨志豪',
						sex: 0,
						checked: false,
					},
					{
						id: 24,
						name: '张宗耀',
						sex: 0,
						checked: false,
					},
					{
						id: 25,
						name: '周璇',
						sex: 1,
						checked: false,
					},
					{
						id: 26,
						name: '代伊涵',
						sex: 0,
						checked: false,
					},
					{
						id: 27,
						name: '章奥博',
						sex: 0,
						checked: false,
					},
					{
						id: 28,
						name: '李妍',
						sex: 1,
						checked: false,
					},
					{
						id: 29,
						name: '邓林柯',
						sex: 0,
						checked: false,
					},
					{
						id: 30,
						name: '章涵语',
						sex: 0,
						checked: false,
					},
					{
						id: 29,
						name: '郑峰',
						sex: 0,
						checked: false,
					},
				],
				// 名单
				dataTime: '',
				//定义dataTime数据类型
				timer: null,
				titles: '', //双人点名展示
				title: '', //单人用来展示选到了谁
				flag: 0, //用来判断是否点击
				buttontitle: '单人点名',
				buttontitle1: '双人点名',
				buttontitle2: '女生点名',
				buttontitle3: '男生点名',
				timers: null, //随机点名
				girlarr: [], //用来保存女生数据
				manarr: [], //用来保存男生数据
			});
			// 当前时间
			const getNowTime = () => {
				const now = new Date();
				const year = now.getFullYear();
				const month =
					now.getMonth() >= 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`;
				const date = now.getDate() >= 10 ? now.getDate() : `0${now.getDate()}`;
				const hour =
					now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`;
				const minutes =
					now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`;
				const seconds =
					now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`;
				data.dataTime = `${year}年${month}月${date}日 ${hour}:${minutes}:${seconds}`;
			};

			//组件挂载完成后执行的函数
			onMounted(() => {
				getNowTime();
				data.timer = setInterval(() => {
					getNowTime();
				}, 1000);
			});

			/**单人点名按钮 */
			const Single = () => {
				data.titles = '';
				if (data.flag == 0) {
					clearInterval(data.timers);
					data.timers = setInterval(() => {
						var items = Math.round(Math.random() * data.arr.length);
						data.title = data.arr[items].name;
					}, 50);
					data.buttontitle = '停止';
					data.flag = 1;
				} else {
					data.buttontitle='单人点名',
	                data.buttontitle1='双人点名',
	                data.buttontitle2='女生点名',
	                data.buttontitle3='男生点名',
					clearInterval(data.timers);
					data.flag = 0;
				}
			};

			/**双人点名按钮 */
			const Double = () => {
				if (data.flag == 0) {
					clearInterval(data.timers);
					data.timers = setInterval(() => {
						var items = Math.round(Math.random() * data.arr.length);
						var itemss = Math.round(Math.random() * data.arr.length);
						if (data.arr[items]) {
							data.title = data.arr[items].name;
							data.titles = data.arr[itemss].name;
						}
					}, 50);
					data.buttontitle1 = '停止';
					data.flag = 1;
				} else {
                    data.buttontitle='单人点名',
	                data.buttontitle1='双人点名',
	                data.buttontitle2='女生点名',
	                data.buttontitle3='男生点名',
					clearInterval(data.timers);
					data.flag = 0;
				}
			};

			/**女生点名 */
			const girl = () => {
				data.girlarr = data.arr.filter((item) => item.sex == 1);
				data.titles = '';
				if (data.flag == 0) {
					clearInterval(data.timers);
					data.timers = setInterval(() => {
						var items = Math.round(Math.random() * data.girlarr.length);
						if (data.girlarr[items]) {
							data.title = data.girlarr[items].name;
						}
					}, 50);
					data.buttontitle2 = '停止';
					data.flag = 1;
				} else {
					data.buttontitle='单人点名',
	                data.buttontitle1='双人点名',
	                data.buttontitle2='女生点名',
	                data.buttontitle3='男生点名',
					clearInterval(data.timers);
					data.flag = 0;
				}
			};

	           // 男生点名
	           const man = () => {
				data.manarr = data.arr.filter((item) => item.sex == 0);
				data.titles = '';
				if (data.flag == 0) {
					clearInterval(data.timers);
					data.timers = setInterval(() => {
						var items = Math.round(Math.random() * data.manarr.length);
						if (data.manarr[items]) {
							data.title = data.manarr[items].name;
						}
					}, 50);
					data.buttontitle3 = '停止';
					data.flag = 1;
				} else {
                    data.buttontitle='单人点名',
	                data.buttontitle1='双人点名',
	                data.buttontitle2='女生点名',
	                data.buttontitle3='男生点名',
					clearInterval(data.timers);
					data.flag = 0;
				}
			};
			return { ...toRefs(data), Single, Double ,girl,man};
		},
	};
</script>

<style lang="scss" scoped>
	.box {
		position: relative;
		width: 100%;
		height: 100vh;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		// padding: 100px;
		background-image: url(../assets/img/xxxx.gif);
		font-family: cursive;
		font-size: 20px;
	}
	h1 {
		text-align: center;
		color: white;
		line-height: 200px;
	}
	.timeOut {
		text-align: right;
		color: white;
	}
	.content {
		display: flex;
		justify-content: space-between;
	}
	.left {
		width: 900px;
	}
	.right {
		margin-left: 100px;
		width: 50%;
	}
	ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		li {
			font-size: 26px;
			text-align: center;
			width: 80px;
			margin: 26px;
			color: #fff;
			list-style: none;
		}
	}
	.content_div {
		width: 600px;
		height: 300px;
		line-height: 300px;
		text-align: left;
		font-size: 30px !important;
		color: #fff;
		margin-bottom: 200px;
	}
	.content_div span {
		color: aliceblue;
		font-size: 40px;
	}
	.footer {
		width: 400px;
		display: flex;
		justify-content: space-between;
		margin-top: -100px;
	}
	button {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		background: #fff;
		border: 1px solid #dcdfe6;
		color: #606266;
		text-align: center;
		box-sizing: border-box;
		outline: none;
		margin: 0;
		transition: 0.1s;
		font-weight: 500;
		padding: 12px 20px;
		font-size: 14px;
		color: #fff;
		background-color: #67c23a;
		border-color: #67c23a;
		border-radius: 20px;
		margin-right: 20px;
	}
</style>
