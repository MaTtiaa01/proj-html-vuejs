<script>
export default {
    name: "Partenrs"
}
</script>

<template>
    <section class="partners">
        <div class="container">
            <ul class="d-flex align-items-center justify-content-between">
                <li>
                    <img src="../assets/img/logo-5.png" alt="">
                </li>
                <li>
                    <img src="../assets/img/logo-1.png" alt="">
                </li>
                <li>
                    <img src="../assets/img/logo-2.png" alt="">
                </li>
                <li>
                    <img src="../assets/img/logo-3.png" alt="">
                </li>
                <li>
                    <img src="../assets/img/logo-4.png" alt="">
                </li>
                <li>
                    <img src="../assets/img/logo-5.png" alt="">
                </li>
            </ul>
        </div>
    </section>

</template>


<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.partners {
    background-color: $lg-primary;
    padding: 4rem;

    ul {
        list-style: none;

    }
}
</style>