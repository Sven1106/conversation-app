<script setup lang="ts">
import PostListItem from './PostListItem.vue';
import NoPostsAvailable from './NoPostsAvailable.vue';
let postList = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
];
if (Math.random() > 0.5) {
    postList = [];
}
</script>

<template>
    <NoPostsAvailable v-if="postList.length === 0"></NoPostsAvailable>
    <div v-else>
        <h2>Post List</h2>
        <PostListItem
            v-for="post in postList"
            :key="post.id"
            :id="post.id"
            :title="post.title" />
    </div>
</template>
