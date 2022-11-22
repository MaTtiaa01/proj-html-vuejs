<script >
import Jumbo from "./Jumbo.vue";
import Services from "./Services.vue";
import Company from "./Company.vue";
import Partenrs from "./Partenrs.vue";
import News from "./News.vue";
import NewsLetter from "./NewsLetter.vue";
import CallToAction from "./CallToAction.vue";

export default {
    name: "Main",
    components: {
        Jumbo, Services, Company, Partenrs, News, NewsLetter, CallToAction
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
        <NewsLetter></NewsLetter>
        <CallToAction></CallToAction>
    </main>
</template>

<style lang="scss" scoped>

</style>