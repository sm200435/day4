export interface attendancesList {
	attendancesList: [
		{
			attendanceRecord: [];
			departmentId: string;
			departmentName: string;
			id: string;
			mobile: string;
			username: string;
			workNumber: string;
		},
	];
	departmentList: [
		{
			code: string;
			companyId: string;
			createTime: null;
			id: string;
			introduce: string;
			manager: string;
			managerId: null;
			name: string;
			pid: string;
		},
	];
}
