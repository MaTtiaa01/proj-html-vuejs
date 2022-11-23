<script>
import Button from "./Button.vue";
import { store } from "../store.js";

export default {
    name: "CallToAction",
    components: {
        Button
    },
    data() {
        return {
            store
        }
    },
    methods: {
        setDropdownMenu() {
            if (this.store.dropdown === true) {
                this.store.dropdown = false
            } else {
                this.store.dropdown = true
            }
        },
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
                                <button id="menu_info" @click.prevent="setDropdownMenu()">
                                    <div class="box d-flex justify-content-between w-100">
                                        <span>More info</span>
                                        <span>
                                            <font-awesome-icon icon="fa-solid fa-chevron-down" />
                                        </span>
                                    </div>
                                    <div class="dropdown_menu w-100" v-show="store.dropdown">
                                        <ul class="dropdown_list m-0">
                                            <li><a href="#">info</a></li>
                                            <li><a href="#">contacts</a> </li>
                                        </ul>
                                    </div>
                                </button>
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
                <div class="col-5 info">
                    <div class="box d-flex flex-column justify-content-between">
                        <h3>Example Inc.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="phone my-2 d-flex align-items-center">
                            <div class="icon text-center">
                                <font-awesome-icon icon="fa-solid fa-phone" />
                            </div>
                            <div class="text">+1(305) 1234-5678</div>
                        </div>
                        <div class="email my-2 d-flex align-items-center">
                            <div class="icon text-center">
                                <font-awesome-icon icon="fa-solid fa-envelope" />
                            </div>
                            <div class="text">helloexample.com</div>
                        </div>
                        <div class="location my-2 d-flex align-items-center">
                            <div class="icon text-center">
                                <font-awesome-icon icon="fa-solid fa-location-dot" />
                            </div>
                            <div class="text">Main Avenue,978</div>
                        </div>
                        <Button>View map</Button>
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
                color: $lg-secondary-light;
                width: 35%;
                margin-top: 0.5rem;
            }
        }

        #menu_info {
            border: 1px solid $lg-input;
            border-radius: 3px;
            background-color: $lg-input;
            opacity: 0.5;
            padding: 0.5rem;
            width: 100%;
            margin: 0;
            color: $lg-light-dark;
            display: flex;
            flex-direction: column;

            .dropdown_menu {
                background-color: var(--bg-bool-lighter);
                width: 200px;
                border: 1px solid;
                display: flex;
                flex-direction: column;
                align-items: center;
                z-index: 900;

                .dropdown_list {
                    list-style: none;
                    padding: 0;
                    text-align: center;

                    li {
                        padding: 0.5rem 2rem;

                        a {
                            text-decoration: none;
                            color: black;
                            width: 100%;
                        }
                    }
                }
            }

        }
    }
}
</style>