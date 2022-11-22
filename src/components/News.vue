<script>
import Button from "./Button.vue";

export default {
    name: "News",
    components: {
        Button
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
            <div class="row row-cols-3">
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
                font-size: 10px;
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
                    background-image: url(../assets/img/news-1.jpg);
                }

                .card.market {
                    background-image: url(../assets/img/news-2.jpg);
                }

                .card.working {
                    background-image: url(../assets/img/news-3.jpg);
                }
            }
        }
    }
}
</style>