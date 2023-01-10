import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{ path: '/', redirect: '/login' },
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login/index.vue'),
	},
	{
		path: '/pageing',
		name: 'pageing',
		component: () => import('../views/pageing/index.vue'),
		children: [
			{
				path: '/dashboard',
				name: 'dashboard',
				component: () => import('../views/dashboard/index.vue'),
			},
			{
				path: '/permissions/index',
				name: 'permissions',
				component: () => import('../views/permissions/index.vue'),
			},
			{
				path: '/approvals/index',
				name: 'approvals',
				component: () => import('../views/approvals/index.vue'),
			},
			{
				path: '/securitys',
				name: 'securitys',
				component: () => import('../views/securitys/index.vue'),
			},
			{
				path: '/attendances/index',
				name: 'attendances',
				component: () => import('../views/attendances/index.vue'),
			},
			{
				path: '/salarys',
				name: 'salarys',
				component: () => import('../views/salarys/index.vue'),
			},
			{
				path: '/departments/index',
				name: 'departments',
				component: () => import('../views/departments/index.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
