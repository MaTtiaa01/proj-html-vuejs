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
            <div class="container d-flex justify-content-between">
                <div class="open_hours d-flex align-items-center">
                    <font-awesome-icon icon="fa-solid fa-clock" /> <span class="ms-2">Open huors: {{ store.info.openHour
                    }}</span>
                </div>
                <div class="info d-flex align-items-center">
                    <ul class="d-flex">
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
            <nav class="container d-flex justify-content-between">
                <div class="logo">
                    <img src="../assets/img/nexgen_trans.png" alt="">
                </div>
                <div class="navbar">
                    <ul class="d-flex align-items-center ">
                        <li v-for=" page in store.pages">
                            <a class="text-uppercase" href="#">{{ page }}</a>
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
    .head_top {
        background-color: $lg-dark-blue;
        padding: 1rem 0;

        .open_hours {
            color: $lg-lighter;
        }

        .info {

            ul {
                list-style: none;

                li {
                    margin-left: 1rem;
                }
            }
        }

    }

    .head_bottom {
        padding: 1rem 0;

        .logo {
            img {
                width: 100px;
            }
        }

        .navbar {
            ul {
                list-style: none;

                li {
                    margin-left: 1rem;

                    a {
                        color: black;
                    }
                }

                Button {
                    background-color: $lg-secondary-light;
                    border: 1px solid $lg-secondary-light;
                    color: $lg-lighter;
                }
            }
        }
    }
}
</style>