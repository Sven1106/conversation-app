<template>
    <main>
        <section class="card" style="grid-area: context">
            <slot name="context"></slot>
        </section>
        <section class="card" style="grid-area: detail">
            <slot name="detail"></slot>
        </section>
    </main>

</template>
<style scoped>
main {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 4fr 8fr;
    grid-template-areas:
        'context detail';
}
</style>