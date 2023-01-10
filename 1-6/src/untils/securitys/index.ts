import { http, apis } from '../http';

function getSecurityList(data?: { page: Number; pageSize: Number }) {
	return http({
		url: apis('/social_securitys/list'),
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

function getCity() {
	return http({
		url: apis('/sys/city'),
		method: 'get',
	});
}

export { getSecurityList, getDepartment, getCity };
