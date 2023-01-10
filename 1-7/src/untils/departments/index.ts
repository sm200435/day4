import { http, apis } from '../http';

function getDepartmentsList() {
	return http({
		url: apis('/company/department'),
		method: 'get',
	});
}

export { getDepartmentsList };
