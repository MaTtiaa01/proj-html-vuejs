<script >
import Jumbo from "./Jumbo.vue";
import Services from "./Services.vue";
import Company from "./Company.vue";

export default {
    name: "Main",
    components: {
        Jumbo, Services, Company
    }
}
</script>

<template>
    <main>
        <Jumbo></Jumbo>
        <!-- TODO BACKGROUND OPACITY -->
        <Services></Services>
        <Company></Company>
    </main>
</template>

<style lang="scss" scoped>

</style>