<script>
export default {
    name: "Button"
}
</script>

<template>
    <button class="text-uppercase">
        <slot></slot>
    </button>

</template>

<style lang="scss" scoped>
button {
    padding: 0.25rem 1rem;
    border-radius: 2px;
    transition: all 200ms ease-out;

    &:hover {
        border-radius: 8px;
    }
}
</style>