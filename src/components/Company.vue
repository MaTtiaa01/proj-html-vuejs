<script>
export default {
    name: "Company"
}
</script>

<template>
    <section class="company">

        <div class="row g-0">
            <div class="col-6 left">
                <div class="box py-5 px-2">
                    <div class="box_head">
                        <h4 class="text-uppercase">about the work</h4>
                        <h2> <span>The</span> company</h2>
                        <p>With all of this expertise and capability comes an unrivalled commitment to costumer service.
                        </p>

                    </div>
                    <div class="box_body">

                        <div class="leadership">
                            <div class="circle-border">
                                <div class="circle">
                                    <span class="number">1</span> <span class="percentuale">%</span>
                                </div>
                            </div>
                            <!-- <div class="percentage d-flex align-items-center justify-content-center">

                                <div class="internal text-center ">
                                    0%
                                </div>
                            </div> -->
                            <div class="details">
                                <h3>Leadership</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div class="psychology">
                            <div class="percentage"></div>
                            <div class="details">
                                <h3>Psychology</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div class="flexibility">
                            <div class="percentage"></div>
                            <div class="details">
                                <h3>Flexibility</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 right">
                <img src="../assets/img/about-5.jpg" alt="">
            </div>
        </div>

    </section>
    <!-- ./company -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.company {
    background-color: $lg-darker;

    .row {
        max-width: 100%;

        .col-6.left {
            display: flex;
            justify-content: end;

            .box {
                padding: 3rem 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 400px;

                h4 {
                    font-size: 10px;
                    color: $lg-secondary-light;
                    font-weight: bold;
                }

                h2 {
                    color: $lg-lighter;
                    font-size: 40px;
                    font-weight: bold;
                    margin: 2rem 0;

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

                h3 {
                    color: $lg-lighter;
                    font-size: 20px;
                }

                .circle {
                    position: relative;
                    top: 5px;
                    left: 5px;
                    text-align: center;
                    width: 100px;
                    height: 100px;
                    border-radius: 100%;
                    background-color: $lg-dark;
                    color: $lg-light-dark;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    span.number {
                        font-size: 30px;
                        font-weight: bold;
                    }

                    span.percentuale {
                        padding-top: 0.75rem;
                    }
                }

                .circle-border {
                    position: relative;
                    text-align: center;
                    width: 110px;
                    height: 110px;
                    margin-left: 30%;
                    border-radius: 100%;
                    background-color: #E53B3B;
                    background: linear-gradient(185deg, $lg-dark-grey 50%, transparent 50%), linear-gradient(0deg, $lg-dark-grey 50%, $lg-secondary 50%)
                }

                // .leadership {
                //     .percentage {
                //         border: 1px solid white;
                //         border-radius: 50%;
                //         padding: 1rem;
                //         width: 100px;
                //         aspect-ratio: 1 / 1;

                //         .internal {
                //             border: 1px solid white;
                //             border-radius: 50%;
                //             width: 100%;
                //             aspect-ratio: 1 / 1;
                //             color: $lg-lighter;
                //             line-height: 55px;
                //         }
                //     }
                // }

            }
        }

        img {
            background-size: cover;
        }
    }

}
</style>