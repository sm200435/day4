<!-- 组织架构 -->
<template>
	<div class="/departments">
		<el-card shadow="always">
			<div class="box">
				<el-tabs
					v-model="activeName"
					class="demo-tabs"
					@tab-click="handleClick"
				>
					<el-tab-pane label="组织结构" name="first">
						<div class="list">
							<div class="list-top">
								<div>
									<el-icon><Histogram /></el-icon>
									<span class="title">江苏传智播客教育科技股份有限公司</span>
								</div>
								<div class="div">
									<span>负责人</span>
									<el-dropdown>
										<span>
											操作
											<el-icon>
												<arrow-down />
											</el-icon>
										</span>
										<template #dropdown>
											<el-dropdown-menu>
												<el-dropdown-item @click="dialogVisible = true">
													添加子部门
												</el-dropdown-item>
											</el-dropdown-menu>
										</template>
									</el-dropdown>
								</div>
							</div>
							<ul v-for="item in departmentsList" :key="item.id">
								<li class="list-bottom" v-if="item.pid == ''">
									<div>
										<el-icon><Avatar /></el-icon>
										<span class="span1">{{ item.name }}</span>
									</div>
									<div class="div">
										<span class="span">{{ item.manager }}</span>
										<el-dropdown>
											<span>
												操作
												<el-icon>
													<arrow-down />
												</el-icon>
											</span>
											<template #dropdown>
												<el-dropdown-menu>
													<el-dropdown-item @click="dialogVisible = true">
														添加子部门
													</el-dropdown-item>
													<el-dropdown-item @click="dialogVisible1 = true">
														查看部门
													</el-dropdown-item>
													<el-dropdown-item>删除部门</el-dropdown-item>
												</el-dropdown-menu>
											</template>
										</el-dropdown>
									</div>
								</li>
							</ul>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</el-card>
	</div>
</template>
<script lang="ts">
	import { ref, reactive, defineComponent, toRefs } from 'vue';
	import { getDepartmentsList } from '../../untils/departments';
	import type { TabsPaneContext } from 'element-plus';
	import * as Ts from '../../api/departments';
	export default defineComponent({
		setup(props, ctx) {
			const activeName = ref('first');
			const handleClick = (tab: TabsPaneContext, event: Event) => {
				// console.log(tab, event);
			};
			const departments = reactive<Ts.departmentsList>({
				departmentsList: [
					{
						code: 'ZCB',
						companyId: '1',
						createTime: null,
						id: '1175310929766055936',
						introduce: '总裁办公室',
						manager: '孙财',
						managerId: null,
						name: '总裁办',
						pid: '',
					},
				],
			});
			const getList = () => {
				getDepartmentsList().then((res) => {
					console.log(res);
					departments.departmentsList = res.data.data.depts;
				});
			};
			getList();
			return { activeName, handleClick, ...toRefs(departments) };
		},
	});
</script>
<style lang="scss" scoped>
	.box {
		padding-left: 30px;
		padding-top: 30px;
	}
	::v-deep .el-tab-pane {
		padding: 40px 150px 0;
	}
	.list {
		margin: 50px 120px;
		.div {
			width: 160px;
			display: flex;
			justify-content: space-between;
		}
		.list-top {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 6px;
			border-bottom: 1px solid #ccc;
			.title {
				font-weight: 900;
			}
		}
		ul {
			margin-top: 15px;
			.list-bottom {
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-bottom: 20px;
				.span1 {
					margin-left: 6px;
				}
			}
		}
	}
</style>
