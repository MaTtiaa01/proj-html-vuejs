<script >
import Jumbo from "./Jumbo.vue";
import Services from "./Services.vue"

export default {
    name: "Main",
    components: {
        Jumbo, Services
    }
}
</script>

<template>
    <main>
        <Jumbo></Jumbo>
        <!-- TODO BACKGROUND OPACITY -->
        <Services></Services>

    </main>
</template>

<style lang="scss" scoped>

</style>