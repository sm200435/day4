export interface salarys {
	salarysList: [
		{
			currentBasicSalary: number | null;
			currentPostWage: number | null;
			departmentId: string;
			departmentName: string;
			formOfEmployment: number;
			id: string;
			inServiceStatus: number;
			mobile: string;
			timeOfEntry: string;
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
