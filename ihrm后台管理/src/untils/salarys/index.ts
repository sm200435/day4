import { http, apis } from '../http';

function getSalarysList(data?: { page: Number; pageSize: Number }) {
	return http({
		url: apis('/salarys/list'),
		method: 'post',
		data,
	});
}

function getDepartment() {
	return http({
		url: apis('/company/department'),
		method: 'get',
	});
}
export { getSalarysList, getDepartment };
