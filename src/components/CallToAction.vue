<script>
import Button from "./Button.vue";
import Form from "./Form.vue";
import { store } from "../store.js";

export default {
    name: "CallToAction",
    components: {
        Button, Form
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="call_to_action">
        <div class="contenitore">
            <div class="row gx-5">
                <div class="col-7">
                    <div class="details mb-5">
                        <h4 class="text-uppercase">send a message</h4>
                        <h2 class="my-3">Get in <span>Touch</span></h2>
                        <p>We will respond to your message as soon as possible.</p>
                    </div>
                    <Form></Form>

                </div>
                <div class="col-5 info">
                    <div class="box d-flex flex-column justify-content-between">
                        <h3>Example Inc.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="phone my-2 d-flex align-items-center">
                            <div class="icon text-center">
                                <font-awesome-icon icon="fa-solid fa-phone" />
                            </div>
                            <div class="text">{{ store.info.phone }}</div>
                        </div>
                        <div class="email my-2 d-flex align-items-center">
                            <div class="icon text-center">
                                <font-awesome-icon icon="fa-solid fa-envelope" />
                            </div>
                            <div class="text">{{ store.info.mail }}</div>
                        </div>
                        <div class="location my-2 d-flex align-items-center">
                            <div class="icon text-center">
                                <font-awesome-icon icon="fa-solid fa-location-dot" />
                            </div>
                            <div class="text">{{ store.info.location }}</div>
                        </div>
                        <Button><a href="https://goo.gl/maps/8pJhAoSucAbFv87s7">View map</a> </Button>
                    </div>
                </div>
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
                font-size: 15px;
                color: $lg-light-dark;
            }

        }

        .info {
            p {
                font-size: 15px;
                color: $lg-light-dark;
            }

            .icon {
                width: 40px;
                aspect-ratio: 1 / 1;
                background-color: $lg-secondary-lighter;
                color: $lg-secondary;
                border: 1px solid $lg-secondary-lighter;
                border-radius: 50%;
                margin-right: 0.75rem;
                padding: 0.5rem;
            }

            .text {
                color: $lg-secondary-light;
            }

            Button {
                font-size: 15px;
                background-color: $lg-primary;
                border: 1px solid $lg-secondary-light;
                width: 35%;
                margin-top: 0.5rem;

                a {
                    color: $lg-secondary-light;
                }
            }
        }
    }
}
</style>