<script >
import { store } from "../store.js";
import Button from "./Button.vue";

export default {
    name: "Header",
    components: {
        Button,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <div class="head_top">
            <div class="contenitore d-flex justify-content-between">
                <div class="open_hours d-flex align-items-center">
                    <font-awesome-icon icon="fa-solid fa-clock" /> <span class="ms-2">Open huors: {{ store.info.openHour
                    }}</span>
                </div>
                <div class="info d-flex">
                    <ul class="d-flex  align-items-center">
                        <li>
                            <a href="#">
                                <font-awesome-icon icon="fa-solid fa-phone" /> <span class="me-2">{{ store.info.phone
                                }}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <font-awesome-icon icon="fa-solid fa-envelope" /> <span class="me-2">{{ store.info.mail
                                }}</span>
                            </a>
                        </li>
                        <li>
                            <a :href="store.info.facebook">
                                <font-awesome-icon icon="fa-brands fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a :href="store.info.twitter">
                                <font-awesome-icon icon="fa-brands fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a :href="store.info.linkedin">
                                <font-awesome-icon icon="fa-brands fa-linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="head_bottom">
            <nav class="contenitore d-flex justify-content-between">
                <div class="logo">
                    <img src="../assets/img/nexgen_trans.png" alt="">
                </div>
                <div class="navbar">
                    <ul class="d-flex align-items-center ">
                        <li v-for=" page in store.pages">
                            <a class="text-uppercase" :href="page.link">{{ page.text }}</a>
                        </li>
                        <li>
                            <Button>Get in touch</Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

header {
    position: relative;

    .contenitore {
        max-width: 900px;
        margin: auto;
    }

    .head_top {
        background-color: $lg-dark-blue;
        padding: 1rem 0;
        font-size: 15px;
        color: $lg-light-dark;

        .info {
            ul {
                list-style: none;
                margin: 0;

                li {
                    margin-left: 1rem;

                    a {
                        color: $lg-light-dark;
                    }
                }
            }
        }

    }

    .head_bottom {
        padding: 0.5rem 0;
        position: absolute;
        left: 0;
        top: 72px;
        background-color: transparent;
        width: 100%;


        .logo {
            img {
                width: 150px;
            }
        }

        .navbar {
            ul {
                list-style: none;

                li {
                    margin-left: 1rem;


                    a {
                        color: $lg-lighter;
                        font-size: 15px;
                    }
                }

                Button {
                    background-color: $lg-secondary-light;
                    border: 1px solid $lg-secondary-light;
                    color: $lg-lighter;
                    font-size: 15px;
                }
            }
        }
    }
}
</style>