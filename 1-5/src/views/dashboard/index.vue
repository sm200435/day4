<template>
	<div class="dashboard">
		<el-card class="header" shadow="always">
			<img src="../../assets/head.b6c3427.jpg" alt="" />
			<div>
				<p class="header-top">早安, {{ username }}, 祝你开心每一天！</p>
				<p class="header-bottom">
					{{ username }} | {{ companyName }}-{{ departmentName }}
				</p>
			</div>
		</el-card>
		<div class="dashbody">
			<div class="dashbody-left">
				<el-card class="calendar">
					<template #header>
						<div class="card-header">
							<span>工作日历</span>
						</div>
					</template>
					<div v-for="o in 4" :key="o" class="text item">
						{{ 'List item ' + o }}
					</div>
				</el-card>
				<el-card class="announcement">
					<template #header>
						<div class="card-header">
							<span>工作日历</span>
						</div>
					</template>
					<div v-for="o in 4" :key="o" class="text item">
						{{ 'List item ' + o }}
					</div>
				</el-card>
			</div>
			<div class="dashbody-right">
				<el-card shadow="always" class="process">Always</el-card>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { ref, reactive, defineComponent, toRefs } from 'vue';
	import { getUserTitle } from '../../untils/dashboard';
	export default defineComponent({
		setup(props, ctx) {
			const username = ref<string>('管理员');
			const companyName = ref<string>('传智博客');
			const departmentName = ref<string>('传智博客');
			getUserTitle().then((res) => {
				console.log(res);
				username.value = res.data.data.username;
				companyName.value = res.data.data.companyName;
				departmentName.value = res.data.data.departmentName;
			});
			// 获取用户名公司名
			return { username, companyName, departmentName };
		},
	});
</script>
<style lang="scss" scoped>
	.dashboard {
		// margin: 10px;
		width: 100%;
		height: 100%;
	}
	::v-deep .el-card__body {
		display: flex;
		img {
			width: 150px;
			height: 150px;
		}
		div {
			margin-left: 10px;
			padding-top: 30px;
			.header-top {
				font-size: 30px;
				padding-bottom: 20px;
			}
			.header-bottom {
				font-size: 25px;
				color: #7f8c8d;
			}
		}
	}
	.dashbody {
		width: 100%;
		// height: 75%;
		margin-top: 25px;
		background: red;
		display: flex;
		.el-card {
			padding: 8px 16px;
		}
		.dashbody-left {
			width: 55%;
			.calendar {
				height: 540px;
				background: blue;
			}
            .announcement{
                margin-top: 25px;
                height: 560px
            }
		}
		.dashbody-right {
			width: 44%;
			margin-left: 1%;
			.process {
				height: 310px;
				background: green;
			}
		}
	}
</style>
