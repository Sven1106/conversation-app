<script lang="ts" setup>
defineProps<{
    id: string;
}>();
</script>
<template>
    <h2>Post Details {{ id }}</h2>
    <p>Here are the details of the post.</p>
</template>
