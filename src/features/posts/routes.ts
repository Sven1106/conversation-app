import type { RouteRecordInfo, RouteRecordRaw } from "vue-router";
import NoPostsSelected from "./use-cases/view-post-list/NoPostsSelected.vue";
import PostListPage from "./pages/PostListPage.vue";
import EditPost from "./use-cases/edit-post/EditPost.vue";
import PostWithDetails from "./use-cases/view-post-details/PostWithDetails.vue";

export interface RouteNamedMap {
  posts: RouteRecordInfo<
    "posts",
    "/posts",
    Record<never, never>,
    Record<never, never>,
    "posts-empty" | "post-details" | "post-edit"
  >;
  "posts-empty": RouteRecordInfo<
    "posts-empty",
    "/posts",
    Record<never, never>,
    Record<never, never>,
    never
  >;
  "post-details": RouteRecordInfo<
    "post-details",
    "/posts/:id",
    { id: string | number },
    { id: string },
    never
  >;
  "post-edit": RouteRecordInfo<
    "post-edit",
    "/posts/:id/edit",
    { id: string | number },
    { id: string },
    never
  >;
}

declare module "vue-router" {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap;
  }
}

export const postsRoutes: RouteRecordRaw[] = [
  {
    name: "posts",
    path: "/posts",
    component: PostListPage,
    children: [
      {
        name: "posts-empty",
        path: "",
        component: NoPostsSelected,
      },
      {
        name: "post-details",
        path: ":id",
        component: PostWithDetails,
        props: true,
      },
      {
        name: "post-edit",
        path: ":id/edit",
        component: EditPost,
        props: true,
      },
    ],
  },
];
