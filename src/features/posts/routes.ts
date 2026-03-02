import type { RouteRecordInfo, RouteRecordRaw } from 'vue-router';

export interface RouteNamedMap {
    posts: RouteRecordInfo<'posts', '/posts', Record<never, never>, Record<never, never>, 'posts-empty' | 'post-details' | 'post-edit'>;
    'posts-empty': RouteRecordInfo<'posts-empty', '/posts', Record<never, never>, Record<never, never>, never>;
    'post-details': RouteRecordInfo<'post-details', '/posts/:id', { id: string | number }, { id: string }, never>;
    'post-edit': RouteRecordInfo<'post-edit', '/posts/:id/edit', { id: string | number }, { id: string }, never>;
}

declare module 'vue-router' {
    interface TypesConfig {
        RouteNamedMap: RouteNamedMap;
    }
}

export const postsRoutes: RouteRecordRaw[] = [
    {
        name: 'posts',
        path: '/posts',
        component: () => import('./pages/PostPage.vue'),
        children: [
            {
                name: 'posts-empty',
                path: '',
                component: () => import('./views/post-details/NoPostsSelected.vue'),
            },
            {
                name: 'post-details',
                path: ':id',
                component: () => import('./views/post-details/PostWithDetails.vue'),
                props: true,
            },
            {
                name: 'post-edit',
                path: ':id/edit',
                component: () => import('./views/edit-post/EditPost.vue'),
                props: true,
            },
        ],
    },
];
