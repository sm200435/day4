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
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
