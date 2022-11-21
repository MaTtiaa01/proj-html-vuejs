<script >
import { store } from "../store.js";

export default {
    name: "Header",
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
            <div class="open_hours">
                Open huors: {{ store.info.openHour }}
            </div>
            <div class="info">
                <ul>
                    <li><a href="#">{{ store.info.phone }}</a></li>
                    <li><a href="#">{{ store.info.mail }}</a></li>
                    <li><a :href="store.info.facebook"></a></li>
                    <li><a :href="store.info.twitter"></a></li>
                    <li><a :href="store.info.linkedin"></a></li>
                </ul>
            </div>
        </div>
        <div class="head_bottom"></div>
    </header>
</template>

<style lang="scss" scoped>

</style>