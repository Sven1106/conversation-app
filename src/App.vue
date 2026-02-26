<template>
    <div id="layout">
        <header style="grid-area: header">search</header>
        <nav
            class="card"
            style="grid-area: nav">
            <router-link to="/posts">Posts</router-link>
        </nav>
        <section
            class="card"
            style="grid-area: context">
            <router-view name="context" />
        </section>
        <section
            class="card"
            style="grid-area: detail">
            <router-view name="detail" />
        </section>
    </div>
</template>

<style scoped>
#layout {
    min-height: 100vh;
    max-width: 1440px;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 256px 4fr 8fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
        'header header header'
        'nav context detail';
}
.card {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
}
header {
    background-color: #fff;
    padding: 1rem 1.5rem;
    height: 2.625rem;
}
</style>
