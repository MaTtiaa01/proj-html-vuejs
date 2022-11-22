<script >
import { store } from "../store.js";
import Button from "./Button.vue";

export default {
    name: "Footer",
    components: {
        Button
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <footer>
        <div class="contenitore">
            <div class="footer_top">
                <div class="row row-cols-4">
                    <div class="col left">
                        <div class="logo">
                            <img src="../assets/img/nexgen_trans.png" alt="">
                        </div>
                        <p>A functional HTML Template for Corporate & Business.</p>
                        <div class="contacts">

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
                                    <font-awesome-icon icon="fa-solid fa-phone" />
                                </div>
                                <div class="text">{{ store.info.location }}</div>
                            </div>
                        </div>
                        <Button>get in touch</Button>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h3>About</h3>
                            <ul>
                                <li v-for="el in store.about">
                                    <font-awesome-icon class="me-2" icon="fa-solid fa-chevron-right" />{{ el.text }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h3>Transport</h3>
                            <ul>
                                <li v-for="el in store.transport">
                                    <font-awesome-icon class="me-2" icon="fa-solid fa-chevron-right" />{{ el.text }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h3>Support</h3>
                            <ul>
                                <li v-for="el in store.support">
                                    <font-awesome-icon class="me-2" icon="fa-solid fa-chevron-right" />{{ el.text }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div class="footer_bottom">
                <div class="box d-flex align-items-center justify-content-between">
                    <div>Enjoy the low price. We are tracking any intention of piracy.</div>
                    <div>&copy 2020 NEXGEN is Proudly Powered by <span>Mattia</span>. </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

footer {
    background-image: url(../assets/img/bg-10.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;


    .contenitore {
        margin: auto;
        max-width: 900px;

        .footer_top {
            padding: 7rem 0;
            color: $lg-light-dark;

            .col.left {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .contacts {
                    font-size: 14px;

                    .icon {
                        margin-right: 0.5rem;
                    }
                }

            }

            .logo {
                width: 100px;
            }

            .card {
                background-color: rgba($color: #3c3d42, $alpha: 0.5);
                padding: 1.5rem;

                h3 {
                    color: $lg-lighter;
                    font-size: 20px;
                    font-weight: bold;
                }

                ul {
                    list-style: none;
                    padding-left: 0;

                    li {
                        color: $lg-light-dark;
                        font-size: 15px;
                        margin-bottom: 0.5rem;
                    }
                }

            }

            Button {
                font-size: 15px;
                background-color: transparent;
                color: $lg-lighter;
                border: 1px solid $lg-secondary-light;
                margin-top: 0.5rem;
                width: 70%;
            }
        }

        .footer_bottom {
            color: $lg-light-dark;
            font-size: 12px;
            padding: 0.5rem 0;

            span {
                color: $lg-secondary;
            }
        }

    }
}
</style>