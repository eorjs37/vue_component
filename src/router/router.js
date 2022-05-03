import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{ path: '/', redirect: '/home' },
	{ path: '/home', component: () => import('../pages/Home.vue') },
	{ path: '/mail', name: 'mail', component: () => import('../pages/Mail.vue') },
	{ path: '/:pathMatch(.*)', component: () => import('../pages/NotFound.vue') },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export { router };
