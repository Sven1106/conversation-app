<!-- PostList.vue -->
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import PostListItem from './PostListItem.vue'
import NoPostsAvailable from './NoPostsAvailable.vue'

const emit = defineEmits<{
    (event: 'empty-changed', isEmpty: boolean): void
}>()

const postList = ref<{ id: number; title: string }[]>([])

watchEffect(() => {
    emit('empty-changed', postList.value.length === 0)
})

setTimeout(() => {
    postList.value = [
        { id: 1, title: 'First Post' },
        { id: 2, title: 'Second Post' }
    ]
}, 1500)
</script>

<template>
    <NoPostsAvailable v-if="postList.length === 0" />
    <template v-else>
        <h2>Post List</h2>
        <PostListItem v-for="post in postList" :key="post.id" :id="post.id" :title="post.title" />
    </template>
</template>
