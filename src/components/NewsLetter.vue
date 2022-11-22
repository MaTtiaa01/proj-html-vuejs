<script>
import Button from "./Button.vue";

export default {
    name: "NewsLetter",
    components: {
        Button
    }
}
</script>

<template>
    <section class="news_letter">
        <div class="contenitore">
            <div class="row row-cols-2">
                <div class="col details">
                    <div class="box px-3">

                        <h4 class="text-uppercase"> newsletter</h4>
                        <h2 class="my-3"><span>Know</span> First</h2>
                        <p>Follow closely and recive content about our company and the news of the current market</p>
                    </div>
                </div>
                <div class="col form d-flex flex-column justify-content-between">
                    <input type="text" placeholder="Name">
                    <input type="email" placeholder="Email">
                    <Button>Subscribe</Button>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.news_letter {
    background-image: url(../assets/img/bg-1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 3rem 0;

    .contenitore {
        max-width: 900px;
        margin: auto;
        padding: 2rem;

        .details {
            h4 {
                font-size: 10px;
                color: $lg-secondary-light;
                font-weight: bold;
            }

            h2 {
                font-size: 40px;
                font-weight: bold;
                color: $lg-lighter;

                span {
                    background-color: $lg-secondary-dark;
                    color: $lg-lighter;
                    padding: 0.20rem 0.5rem;
                }
            }

            p {
                font-size: 15px;
                color: $lg-light-dark;
            }

        }

        .form {
            input {
                border: 1px solid $lg-semi-transparent;
                border-radius: 3px;
                background-color: $lg-semi-transparent;
                opacity: 0.5;
                padding: 0.5rem;
            }

            Button {
                background-color: $lg-secondary-light;
                color: $lg-lighter;
                width: 30%;
                border: 1px solid $lg-secondary-light;
            }
        }
    }
}
</style>