<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import NothingToShow from '../shared/NothingToShow.vue';
import TwoColumnLayout from '@/layout/TwoColumnLayout.vue';
import PostList from '../use-cases/view-post-list/PostList.vue';

const isPostListEmpty = ref(true);
const route = useRoute()
</script>

<template>
    <TwoColumnLayout>
        <template #context>
            <PostList @empty-changed="isPostListEmpty = $event" />
        </template>
        <template #detail>
            <NothingToShow v-if="isPostListEmpty && !('id' in route.params)" />
            <RouterView v-else />
        </template>
    </TwoColumnLayout>
</template>
