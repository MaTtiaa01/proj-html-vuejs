<script >
import Jumbo from "./Jumbo.vue";
import Services from "./Services.vue";
import Company from "./Company.vue";
import Partenrs from "./Partenrs.vue";
import News from "./News.vue";

export default {
    name: "Main",
    components: {
        Jumbo, Services, Company, Partenrs, News
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
        <News></News>
    </main>
</template>

<style lang="scss" scoped>

</style>