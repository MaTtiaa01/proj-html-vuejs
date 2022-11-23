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

                        <h1><span>Logistics</span> that goes further.</h1>
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
    // inscurire il background
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/img/jumbo.jpg);
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
            width: 300px;
            padding: 5rem 0;

            h1 {
                font-weight: bold;
                color: $lg-lighter;
                font-size: 60px;
                z-index: 900;

                span {
                    position: relative;
                    background-color: transparent;
                    z-index: 1;

                    &::before {
                        background-color: $lg-secondary-light;

                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 35%;
                        left: 5px;
                        bottom: 0.5rem;
                        opacity: 0.5;
                        z-index: -1;
                        border: 1px solid $lg-secondary-light;
                        border-radius: 2px;
                    }
                }

            }

            p {
                color: $lg-grey;
                font-size: 20px;
            }

            Button {
                color: $lg-lighter;
                font-size: 10px;
                display: inline-block;
                font-size: 15px;
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