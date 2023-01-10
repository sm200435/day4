<template>
	<!-- 工资 -->
	<el-card shadow="always">
		<div class="box">
			<div class="careful-lab">
				<div>
					<el-icon style="margin-top: 3px; margin-right: 6px; color: #409eff">
						<InfoFilled />
					</el-icon>
				</div>
				<div>本月：社保在缴 公积金在缴 增员 减员 入职 离职</div>
			</div>
			<div class="title">
				<span>设置</span>
				<span class="text">202003月报表</span>
			</div>
		</div>
	</el-card>
	<el-card shadow="always">
		<div class="bottoms">
			<div class="list">
				<h5>聘用形式：</h5>
				<ul>
					<ul>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>正式</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>非正式</span>
						</li>
					</ul>
				</ul>
			</div>
			<div class="list">
				<h5>员工状态：</h5>

				<ul>
					<li>
						<el-checkbox v-model="checked1" size="large" />
						<span>在职</span>
					</li>
					<li>
						<el-checkbox v-model="checked1" size="large" />
						<span>离职</span>
					</li>
				</ul>
			</div>
			<div class="list">
				<h5>部门：</h5>
				<ul>
					<li v-for="item in departmentList">
						<el-checkbox v-model="checked1" size="large" />
						<span>{{ item.name }}</span>
					</li>
				</ul>
			</div>
		</div>
	</el-card>
	<div class="salarys">
		<el-card shadow="always" class="salarys-body">
			<el-table :data="salarysList" style="width: 100%">
				<el-table-column prop="date" label="序号" width="60px">
					<template #default="scope">{{ scope.$index + 1 }}</template>
				</el-table-column>
				<el-table-column prop="username" label="姓名" />
				<el-table-column prop="mobile" label="手机" />
				<el-table-column prop="workNumber" label="工号" />
				<el-table-column label="聘用形式">
					<template #default="scope">
						{{ scope.row.formOfEmployment == 1 ? '正式' : '非正式' }}
					</template>
				</el-table-column>
				<el-table-column prop="departmentName" label="部门"></el-table-column>
				<el-table-column label="入职时间">
					<template #default="scope">
						{{ new Date(scope.row.timeOfEntry).getFullYear() }}-{{
							new Date(scope.row.timeOfEntry).getMonth() + 1 > 10
								? new Date(scope.row.timeOfEntry).getMonth() + 1
								: '0' + (new Date(scope.row.timeOfEntry).getMonth() + 1)
						}}-{{
							new Date(scope.row.timeOfEntry).getDate() + 1 > 10
								? new Date(scope.row.timeOfEntry).getDate() + 1
								: '0' + (Number(new Date(scope.row.timeOfEntry).getDate()) + 1)
						}}
					</template>
				</el-table-column>
				<el-table-column prop="leaveTime" label="工资基数">
					<template #default="scope">
						{{ scope.row.currentBasicSalary + scope.row.currentPostWage }}
					</template>
				</el-table-column>
				<el-table-column label="津贴方案">
					<template #default="scope">
						{{ scope.row.inServiceStatus == 1 ? '通用方案' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template #default="scope">
						<el-button
							type="danger"
							v-if="
								scope.row.currentBasicSalary + scope.row.currentPostWage == 0
							"
						>
							定薪
						</el-button>
						<el-button type="primary" v-else>调薪</el-button>
						<el-button>查看</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination
					v-model:current-page="currentPage"
					v-model:page-size="pageSize"
					:page-sizes="[10, 20, 30, 40]"
					:small="small"
					:disabled="disabled"
					:background="background"
					:total="total"
					layout="sizes, prev, pager, next, jumper"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
				/>
			</div>
		</el-card>
	</div>
</template>
<script lang="ts">
	import { ref, reactive, defineComponent, toRefs } from 'vue';
	import { getSalarysList, getDepartment } from '../../untils/salarys';
	import * as Ts from '../../api/salarys';
	export default defineComponent({
		setup(props, ctx) {
			const checked1 = ref(false);
			let currentPage = ref<number>(1);
			// 当前第几页
			let pageSize = ref<number>(10);
			// 当前页数
			let total = ref<number>(10);
			// 总数
			const small = ref(true);
			const background = ref(true);
			const disabled = ref(false);
			const salarys = reactive<Ts.salarys>({
				salarysList: [
					{
						currentBasicSalary: null,
						currentPostWage: null,
						departmentId: '1175310929766055936',
						departmentName: '总裁办',
						formOfEmployment: 1,
						id: '1063705989926227968',
						inServiceStatus: 1,
						mobile: '13800000002',
						timeOfEntry: '2018-11-02T08:00:00.000+0000',
						username: '管理员',
						workNumber: '9002',
					},
				],
				departmentList: [
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
				getSalarysList({
					page: currentPage.value,
					pageSize: pageSize.value,
				}).then((res) => {
					console.log(res);
					salarys.salarysList = res.data.data.rows;
					total.value = res.data.data.total;
				});
				getDepartment().then((res) => {
					console.log(res.data.data.depts);
					salarys.departmentList = res.data.data.depts;
				});
			};
			getList();
			const handleSizeChange = (val: number) => {
				pageSize.value = val;
				console.log(pageSize);
				getList();
				// console.log(`${val}`);
			};
			const handleCurrentChange = (val: number) => {
				currentPage.value = val;
				getList();
				// console.log(`${val}`);
			};
			return {
				...toRefs(salarys),
				pageSize,
				currentPage,
				small,
				background,
				disabled,
				handleSizeChange,
				handleCurrentChange,
				total,
				checked1,
			};
		},
	});
</script>
<style lang="scss" scoped>
	.salarys-body {
		margin-top: 20px;
		position: relative;
		padding-bottom: 60px;
	}
	.pagination {
		margin-top: 20px;
		position: absolute;
		bottom: 30px;
		right: 20px;
	}
	.box {
		display: flex;
		justify-content: space-between;

		.careful-lab {
			display: flex;
			padding: 5px 10px;
			font-size: 18px;
			border-radius: 3px;
			border: 1px solid #91d5ff;
			background: #e6f7ff;
			width: 420px;
		}
		.title {
			font-size: 14px;
			.text {
				margin-left: 15px;
			}
		}
	}
	.bottoms {
		margin-top: 20px;
		.list {
			display: flex;
			align-items: center;
			h5 {
				margin: 0;
				width: 100px;
			}
			ul {
				display: flex;
				flex-wrap: wrap;
				li {
					margin-right: 20px;
					font-size: 14px;
					list-style: none;
					span {
						margin-left: 10px;
					}
				}
			}
		}
	}
</style>
