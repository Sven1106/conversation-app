<template>
    <h1>Edit Post {{ props.id }}</h1>
</template>

<script setup lang="ts">
const props = defineProps<{
    id: string;
}>();
</script>
