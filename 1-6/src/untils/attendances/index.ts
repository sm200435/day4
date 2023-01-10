import { http, apis } from '../http';

function getAttendancesList(params?: { page: Number; pagesize: Number }) {
	return http({
		url: apis('/attendances'),
		method: 'get',
		params,
	});
}
// 考勤列表数据

function getDepartment() {
	return http({
		url: apis('/company/department'),
		method: 'get',
	});
}
// 考勤部门数据

export { getAttendancesList, getDepartment };
