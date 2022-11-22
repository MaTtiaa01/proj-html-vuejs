<script>
import Button from "./Button.vue";

export default {
    name: "CallToAction",
    components: {
        Button
    }
}
</script>

<template>
    <section class="call_to_action">
        <div class="contenitore">
            <div class="row ">
                <div class="col-7">
                    <div class="details mb-5">
                        <h4 class="text-uppercase">send a message</h4>
                        <h2>Get in <span>Touch</span></h2>
                        <p>We will respond to your message as soon as possible.</p>
                    </div>
                    <div class="form">
                        <div class="row g-3">
                            <div class="col-6">
                                <input type="text" placeholder="Name">
                            </div>
                            <div class="col-6">
                                <input type="email" placeholder="Email">
                            </div>
                            <div class="col-6">
                                <input type="text" placeholder="Phone">
                            </div>
                            <div class="col-6">
                                <input type="text" placeholder="more info">
                            </div>
                            <div class="col">
                                <div class="input-group input-group-lg ">
                                    <textarea class="form-control " aria-label="With textarea"
                                        placeholder="Message"></textarea>
                                </div>
                            </div>

                        </div>
                        <Button>send</Button>
                    </div>

                </div>
                <div class="col-5"></div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.call_to_action {
    background-color: $lg-primary;
    padding: 4rem 0;

    .contenitore {
        max-width: 900px;
        margin: auto;

        .details {
            h4 {
                font-size: 10px;
                color: $lg-secondary-light;
                font-weight: bold;
            }

            h2 {
                font-size: 40px;
                font-weight: bold;

                span {
                    background-color: $lg-secondary-lighter;
                    color: $lg-secondary;
                    padding: 0.20rem 0.5rem;
                }
            }

            p {
                font-size: 10px;
                color: $lg-light-dark;
            }

        }

        .form {

            input {
                border: 1px solid $lg-input;
                border-radius: 3px;
                background-color: $lg-input;
                opacity: 0.5;
                padding: 0.5rem;
                width: 100%;
            }

            textarea {
                padding-bottom: 3.5rem;
                border: 1px solid $lg-input;
                border-radius: 3px;
                background-color: $lg-input;
                opacity: 0.5;
                width: 100%;
            }

            Button {
                background-color: $lg-secondary;
                color: $lg-lighter;
                margin-top: 1rem;
                border: 1px solid $lg-secondary;
                font-size: 15px;
            }
        }
    }
}
</style>