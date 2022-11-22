<script>
import Button from "./Button.vue";

export default {
    name: "Services",
    components: {
        Button
    }
}
</script>

<template>
    <section class="services ">
        <div class="contenitore ">
            <div class="row gx-4">
                <div class="col">
                    <div class="box  ">
                        <h5 class="text-uppercase">Our business areas</h5>
                        <h2>Logistics Services</h2>
                        <p>We are leaders in providing logistics services with a set of cutting edge technologies and
                            team of ecperienced and renowned professionals.
                        </p>
                        <div>
                            <span>Tradition</span>
                            <span>Quality</span>
                            <span>Security</span>
                        </div>
                        <Button>Read More</Button>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card_haed">
                            <img src="../assets/img/gallery-3.jpg" alt="">
                        </div>
                        <div class="card_body">
                            <h4 class="my-3">Technology</h4>
                            <p>Focused on developing technology solutions adapted to our client's needs.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card_haed">
                            <img src="../assets/img/gallery-5.jpg" alt="">
                        </div>
                        <div class="card_body">
                            <h4 class="my-3">Transport</h4>
                            <p class="me-2">We develop operational strategies to improve logistical efficiency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ./services -->

</template>


<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.services {
    background-color: $lg-primary;
    padding: 6rem 0;

    .contenitore {
        padding: 4rem 0;
        max-width: 900px;
        margin: auto;
    }

    .box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        h5 {
            color: $lg-secondary;
            font-size: 10px;
        }

        h2 {
            font-size: 40px;
            font-weight: bold;
        }

        p {
            color: $lg-light-dark;
            font-size: 15px;
        }

        span {
            color: $lg-secondary;
            background-color: $lg-secondary-lighter;
            padding: 0.5rem;
            margin-right: 0.5rem;
            font-size: 15px;
        }

        Button {
            font-size: 15px;
            background-color: $lg-secondary;
            color: $lg-lighter;
            display: inline-block;
            width: 45%;
            border: 1px solid $lg-secondary;
        }
    }

    .card {
        padding: 2rem;
        border: 1px solid $lg-lighter;

        h4 {
            font-size: 20px;
        }

        p {
            font-size: 15px;
            color: $lg-light-dark;
        }
    }
}
</style>