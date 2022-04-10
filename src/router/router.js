import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{ path: '/', redirect: '/home' },
	{ path: '/home', component: () => import('../pages/Home.vue') },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export { router };
