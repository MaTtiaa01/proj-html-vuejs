<script>
import Button from "./Button.vue";

export default {
    name: "Jumbo",
    components: {
        Button,
    }
}
</script>

<template>
    <section class="jumbotron ">
        <div class="contenitore">
            <div class="row ">
                <div class="col-7"></div>
                <div class="col-5 full">
                    <div class="box">

                        <h1>Logistics that goes further.</h1>
                        <p>For 20 years working with the most innovative in the field of transport</p>
                        <Button class="dark text-uppercase">Get in touch</Button>
                        <Button class="light text-uppercase">read more</Button>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <!-- ./jumbotron -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.jumbotron {
    background-image: url(../assets/img/jumbo.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 6rem 0;

    .contenitore {
        max-width: 900px;
        margin: auto;
    }

    .col-5.full {
        .box {
            width: 250px;
            padding: 5rem 0;

            h1 {
                font-weight: bold;
                color: $lg-lighter;
                font-size: 50px;
            }

            p {
                color: $lg-light-dark;
            }

            Button {
                color: $lg-lighter;
                font-size: 10px;
                display: inline-block;
            }

            Button.dark {
                background-color: $lg-secondary-light;
                border: 1px solid $lg-secondary-light;
            }

            Button.light {
                background-color: transparent;
                border: 1px solid $lg-secondary-light;
                margin-left: 1rem;
            }
        }
    }
}
</style>