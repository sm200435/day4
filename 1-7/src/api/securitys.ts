export interface securitysList {
	securitysList: [
		{
			departmentName: string;
			id: string;
			leaveTime: null;
			mobile: string;
			participatingInTheCity: string;
			participatingInTheCityId: string;
			providentFundBase: number;
			providentFundCity: string;
			providentFundCityId: string;
			socialSecurityBase: number;
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
	cityList: [
		{
			createTime: null;
			id: string;
			name: string;
		},
	];
}
