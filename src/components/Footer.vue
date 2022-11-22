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
                <div class="row">
                    <div class="col">
                        <div class="logo">
                            <img src="../assets/img/nexgen_trans.png" alt="">
                        </div>
                        <p>A functional HTML Template for Corporate & Business.</p>
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
                                <font-awesome-icon icon="fa-solid fa-phone" />
                            </div>
                            <div class="text">Main Avenue,978</div>
                        </div>
                    </div>
                    <div class="col"></div>
                    <div class="col"></div>
                    <div class="col"></div>
                </div>

            </div>

            <div class="footer_bottom"></div>
        </div>
    </footer>

</template>

<style lang="scss" scoped>
footer {
    background-image: url(../assets/img/bg-10.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>