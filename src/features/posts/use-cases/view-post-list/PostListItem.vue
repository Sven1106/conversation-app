<script setup lang="ts">
defineProps<{
    id: number;
    title: string;
}>();
</script>
<template>
    <RouterLink style="display: block;" :to="{ name: 'post-details', params: { id} }"> {{ title }} </RouterLink>
</template>
