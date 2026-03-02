import { createRouter, createWebHistory } from 'vue-router';
import { postsRoutes } from '@/features/posts/routes';

export const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            redirect: '/posts',
        },
        {
            path: '/about',
            component: () => import('./pages/AboutPage.vue'),
        },
        ...postsRoutes,
    ],
});
