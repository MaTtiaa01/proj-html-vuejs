<script>
import Button from "./Button.vue";
import { store } from "../store.js";

export default {
    name: "News",
    components: {
        Button
    },
    data() {
        return {
            store
        }
    },
    methods: {
        setActiveRow() {
            if (this.store.active === 0) {
                this.store.active = 1
            } else {
                this.store.active = 0
            }
        }
    }
}
</script>

<template>
    <section class="news">
        <div class="contenitore">
            <div class="details mb-4">
                <h4 class="text-uppercase">Our editorial content</h4>
                <h2 class="my-3">Latest <span>News</span></h2>
                <div class="d-flex justify-content-between align-items-end">
                    <p>Every week we publish content about what is best in the business world.</p>
                    <Button>see all</Button>
                </div>
            </div>
            <div class="row row-cols-3 " v-show="store.active === 0">
                <div class="next" @click.prevent="setActiveRow()">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </div>
                <div class="prev" @click.prevent="setActiveRow()">
                    <font-awesome-icon icon="fa-solid fa-chevron-left" />
                </div>
                <div class="col">
                    <div class="card increase">
                        <h3>Increasing creativity is possible for everyone</h3>
                    </div>
                </div>
                <div class="col">
                    <div class="card market">
                        <h3>Because market research is part of the business plan</h3>
                    </div>
                </div>
                <div class="col">
                    <div class="card working">
                        <h3>Working from home is now a trend</h3>
                    </div>
                </div>
            </div>
            <div class="row row-cols-3 " v-show="store.active === 1">
                <div class="next" @click.prevent="setActiveRow()">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </div>
                <div class="prev" @click.prevent="setActiveRow()">
                    <font-awesome-icon icon="fa-solid fa-chevron-left" />
                </div>
                <div class="col">
                    <div class="card working">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                </div>
                <div class="col">
                    <div class="card office">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                </div>
                <div class="col">
                    <div class="card laptop">
                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ./news -->

</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.news {
    padding: 5rem 0;

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

            Button {
                background-color: $lg-secondary;
                border: 1px solid $lg-secondary;
                color: $lg-lighter;
                font-size: 15px;
            }
        }

        .row {
            position: relative;

            .next {
                position: absolute;
                left: 69rem;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            .prev {
                position: absolute;
                left: 5rem;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            .col {
                .card {
                    border: none;
                    height: 300px;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    color: $lg-lighter;
                    display: flex;
                    justify-content: flex-end;
                    padding: 1rem;

                    h3 {
                        font-size: 20px;
                        font-weight: bold;
                    }

                }

                .card.increase {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/img/news-1.jpg);
                }

                .card.market {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/img/news-2.jpg);
                }

                .card.working {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/img/news-3.jpg);
                }

                .card.office {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/img/news-4.jpg);
                }

                .card.laptop {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/img/news-5.jpg);
                }
            }
        }
    }
}
</style>