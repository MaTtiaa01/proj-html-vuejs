<script>
import { store } from "../store.js";
import Button from './Button.vue';

export default {
    name: "Form",
    components: {
        Button
    },
    data() {
        return {
            store
        }
    },
    methods: {
        setDropdownMenu() {
            if (this.store.dropdown === true) {
                this.store.dropdown = false
            } else {
                this.store.dropdown = true
            }
        },
    }
}
</script>

<template>
    <div class="form">
        <div class="row g-3">
            <div class="col-6">
                <input type="text" placeholder="Name">
            </div>
            <div class="col-6">
                <input type="email" placeholder="Email">
            </div>
            <div class="col-6">
                <input type="text" placeholder="Phone">
            </div>
            <div class="col-6">
                <button id="menu_info" @click.prevent="setDropdownMenu()">
                    <div class="box d-flex justify-content-between w-100">
                        <span>More info</span>
                        <span>
                            <font-awesome-icon icon="fa-solid fa-chevron-down" />
                        </span>
                    </div>
                    <div class="dropdown_menu w-100" v-show="store.dropdown">
                        <ul class="dropdown_list m-0">
                            <li><a href="#">info</a></li>
                            <li><a href="#">contacts</a> </li>
                        </ul>
                    </div>
                </button>
            </div>
            <div class="col">
                <div class="input-group input-group-lg ">
                    <textarea class="form-control " aria-label="With textarea" placeholder="Message"></textarea>
                </div>
            </div>

        </div>
        <Button>send</Button>
    </div>

</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.form {

    input {
        border: 1px solid $lg-input;
        border-radius: 3px;
        background-color: $lg-input;
        opacity: 0.5;
        padding: 0.5rem;
        width: 100%;
    }

    textarea {
        padding-bottom: 3.5rem;
        border: 1px solid $lg-input;
        border-radius: 3px;
        background-color: $lg-input;
        opacity: 0.5;
        width: 100%;
    }

    Button {
        background-color: $lg-secondary;
        color: $lg-lighter;
        margin-top: 1rem;
        border: 1px solid $lg-secondary;
        font-size: 15px;
    }
}

#menu_info {
    border: 1px solid $lg-input;
    border-radius: 3px;
    background-color: $lg-input;
    opacity: 0.5;
    padding: 0.5rem;
    width: 100%;
    margin: 0;
    color: $lg-light-dark;
    display: flex;
    flex-direction: column;

    .dropdown_menu {
        background-color: var(--bg-bool-lighter);
        width: 200px;
        border: 1px solid;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 900;

        .dropdown_list {
            list-style: none;
            padding: 0;
            text-align: center;

            li {
                padding: 0.5rem 2rem;

                a {
                    text-decoration: none;
                    color: black;
                    width: 100%;
                }
            }
        }
    }

}
</style>