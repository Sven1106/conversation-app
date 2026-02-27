import { createRouter, createWebHistory } from "vue-router";
import { postsRoutes } from "@/features/posts/routes";
import AboutPage from "./pages/AboutPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/posts" },
    { path: "/about", component: AboutPage},
    ...postsRoutes,
  ],
});

