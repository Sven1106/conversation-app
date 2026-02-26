import NothingToShow from '@/features/posts/shared/NothingToShow.vue';
import PostList from '@/features/posts/use-cases/view-post-list/PostList.vue';
import PostWithDetails from '@/features/posts/use-cases/view-post-details/PostWithDetails.vue';
import type { RouteRecordRaw } from 'vue-router';
import NoPostsSelected from '@/features/posts/use-cases/view-post-list/NoPostsSelected.vue';

export const postsRoutes: RouteRecordRaw[] = [
    {
        path: '/posts',
        name: 'posts',
        components: {
            context: PostList,
            detail: NoPostsSelected,
        },
    },
    {
        path: '/posts/:id',
        name: 'postDetail',
        components: {
            context: PostList,
            detail: PostWithDetails,
        },
    },
];
