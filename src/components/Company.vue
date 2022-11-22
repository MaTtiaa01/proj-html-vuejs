<script>
export default {
    name: "Company"
}
</script>

<template>
    <section class="company">
        <div class="pattern_top">
            <img src="../assets/img/dot.jpg" alt="">
        </div>
        <div class="patter_bottom">

        </div>

        <div class="row g-0">
            <div class="col-6 left">
                <div class="box py-5 ">
                    <div class="box_head">
                        <h4 class="text-uppercase">about the work</h4>
                        <h2> <span>The</span> company</h2>
                        <p>With all of this expertise and capability comes an unrivalled commitment to costumer service.
                        </p>

                    </div>
                    <div class="box_body my-3">

                        <div class="leadership d-flex align-items-center justify-content-between my-5">
                            <div class="percentage">
                                <div class="circle-border">
                                    <div class="circle">
                                        <span class="number">0</span> <span class="percentuale">%</span>
                                    </div>
                                </div>

                            </div>

                            <div class="details">
                                <h3>Leadership</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div class="psychology d-flex align-items-center justify-content-between my-5">
                            <div class="percentage">
                                <div class="circle-border">
                                    <div class="circle">
                                        <span class="number">0</span> <span class="percentuale">%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="details">
                                <h3>Psychology</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit abar truem.</p>
                            </div>
                        </div>
                        <div class="flexibility d-flex aling-items-center justify-content-between my-5">
                            <div class="percentage">
                                <div class="circle-border">
                                    <div class="circle">
                                        <span class="number">1</span> <span class="percentuale">%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="details">
                                <h3>Flexibility</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit abr truem nalr.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 right">
            </div>
        </div>

    </section>
    <!-- ./company -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.company {
    background-color: $lg-darker;
    position: relative;

    .pattern_top {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);

        img {
            background-color: transparent;
            width: 60px;
            opacity: 0.5;
            color: $lg-secondary;
        }
    }


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
                padding-right: 3rem;
                width: 550px;

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
                    width: 80px;
                    height: 80px;
                    border-radius: 100%;
                    background-color: $lg-darker;
                    color: $lg-light-dark;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    span.number {
                        font-size: 40px;
                        font-weight: bold;
                    }

                    span.percentuale {
                        padding-top: 0.75rem;
                    }
                }

                .circle-border {
                    position: relative;
                    text-align: center;
                    width: 90px;
                    height: 90px;
                    border-radius: 100%;
                    background-color: #E53B3B;
                    background: linear-gradient(185deg, $lg-dark-grey 50%, transparent 50%), linear-gradient(0deg, $lg-dark-grey 50%, $lg-secondary 50%)
                }

                .details {
                    margin-left: 2rem;

                    h3 {
                        font-size: 20px;
                        font-weight: bold;
                    }
                }

                .leadership,
                .psychology {
                    .circle {
                        position: relative;
                        top: 5px;
                        left: 5px;
                        text-align: center;
                        width: 80px;
                        height: 80px;
                        border-radius: 100%;
                        background-color: $lg-darker;
                        color: $lg-light-dark;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        span.number {
                            font-size: 40px;
                            font-weight: bold;
                        }

                        span.percentuale {
                            padding-top: 0.75rem;
                        }
                    }

                    .circle-border {
                        position: relative;
                        text-align: center;
                        width: 90px;
                        height: 90px;
                        border-radius: 100%;
                        background-color: #E53B3B;
                        background: linear-gradient(180deg, $lg-dark-grey 50%, transparent 50%), linear-gradient(0deg, $lg-dark-grey 50%, $lg-secondary 50%)
                    }
                }


            }
        }

        .col-6.right {
            background-image: url(../assets/img/about-5.jpg);
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: cover;
        }
    }

}
</style>