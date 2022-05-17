import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{ path: '/', redirect: '/main' },
	{ path: '/main', component: () => import('../pages/Main.vue') },
	{ path: '/home', component: () => import('../pages/Home.vue') },
	{ path: '/mail', name: 'mail', component: () => import('../pages/Mail.vue') },
	{ path: '/board', name: 'board', component: () => import('../pages/Board.vue') },
	{ path: '/:pathMatch(.*)', component: () => import('../pages/NotFound.vue') },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export { router };
