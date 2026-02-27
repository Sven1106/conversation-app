<template>
    <div id="layout">
        <nav class="card" style="grid-area: nav; display: flex; flex-direction: column; gap: 1rem;">
            <router-link to="/posts">Posts</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <router-view style="grid-area: router-view" />
    </div>
</template>

<style scoped>
#layout {
    min-height: 100vh;
    max-width: 1440px;
    display: grid;
    gap: 1.5rem;
    margin: auto;
    grid-template-columns: 256px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        '. .'
        'nav router-view'
        '. .'
}
</style>
