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
                        <h2>The company</h2>
                        <p>With all of this expertise and capability comes an unrivalled commitment to costumer service.
                        </p>

                    </div>
                    <div class="box_body">

                        <div class="leadership">
                            <div class="percentage"></div>
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
                }

                h2 {
                    color: $lg-lighter;
                    font-size: 40px;
                }

                p {
                    font-size: 15px;
                    color: $lg-light-dark;
                }

                h3 {
                    color: $lg-lighter;
                    font-size: 20px;
                }

            }
        }

        img {
            background-size: cover;
        }
    }

}
</style>