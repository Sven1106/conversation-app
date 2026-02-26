<script setup lang="ts">
defineProps({
    title: { type: String, required: true },
    id: { type: Number, required: true },
});
</script>
<template>
    <h3>{{ title }}</h3>
</template>
