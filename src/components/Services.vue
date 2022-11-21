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
    <section class="services">
        <div class="container">
            <div class="row gx-4">
                <div class="col">
                    <div class="box px-3">
                        <h5 class="text-uppercase">Our business areas</h5>
                        <h2>Logistics Services</h2>
                        <p>We are leaders in providing logistics services with a set of cutting edge technologies and
                            team of ecperienced and renowned professionals.</p>
                        <span>Tradition</span>
                        <span>Quality</span>
                        <span>Security</span>
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
    padding: 4rem 0;

    .box {
        h5 {
            color: $lg-secondary;
            font-size: 10px;
            margin-bottom: 1rem;
        }

        h2 {
            font-weight: bold;
            margin-bottom: 1rem;
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
            display: block;
            margin-top: 1rem;
            font-size: 15px;
            background-color: $lg-secondary;
            color: $lg-lighter;
        }
    }

    .card {
        padding: 2rem;

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