<script>
export default {
    name: "Partenrs"
}
</script>

<template>
    <section class="partners">
        <div class="contenitore">
            <ul class="d-flex align-items-center justify-content-between">
                <li>
                    <img src="../assets/img/logo-5.png" alt="" style="width:50px ;">
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
                    <img src="../assets/img/logo-5.png" alt="" style="width:50px ;">
                </li>
            </ul>
        </div>
    </section>

</template>


<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.partners {
    background-color: $lg-primary;
    padding: 4rem 0;

    .contenitore {
        max-width: 900px;
        margin: auto;
    }

    ul {
        list-style: none;
        padding-left: 0;

        li {


            img {
                width: 70px;
                filter: opacity(0.6)
            }
        }
    }
}
</style>