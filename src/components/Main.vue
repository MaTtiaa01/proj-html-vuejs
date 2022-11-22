<script >
import Jumbo from "./Jumbo.vue";
import Services from "./Services.vue";
import Company from "./Company.vue";
import Partenrs from "./Partenrs.vue";

export default {
    name: "Main",
    components: {
        Jumbo, Services, Company, Partenrs
    }
}
</script>

<template>
    <main>
        <Jumbo></Jumbo>
        <!-- TODO BACKGROUND OPACITY -->
        <Services></Services>
        <Company></Company>
        <Partenrs></Partenrs>
    </main>
</template>

<style lang="scss" scoped>

</style>