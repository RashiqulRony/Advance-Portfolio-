<template>
    <div>
        <loader v-if="isLoading" object="#ff9633" color1="#ffffff" color2="#17fd3d" size="12" speed="2.5" bg="#000000" objectbg="#000000" opacity="90" disableScrolling="true" name="circular"></loader>
        <header class="" :class="this.$route.name === 'Home' ? 'header-section header-section--style2' : 'header-section bg-color-3'">
            <div class="header-bottom">
                <div class="container">
                    <div class="header-wrapper">
                        <div class="logo">
                            <a href="index.html">
                                <img class="dark" :src="'/assets/images/logo/logo.png'" alt="logo">
                            </a>
                        </div>
                        <div class="menu-area">
                            <ul class="menu menu--style1">
                                <li>
                                    <router-link :to="'/'">Home</router-link>
                                </li>
                                <li>
                                    <router-link :to="'/about'">About</router-link>
                                </li>
                                <li>
                                    <router-link :to="'/service'">Service</router-link>
                                </li>
                                <li>
                                    <router-link :to="'/contact-us'">Contact Us</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="header-action">
                            <div class="menu-area">
                                <!-- toggle icons -->
                                <div class="header-bar d-lg-none header-bar--style1">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLoading : true
            }
        },

        mounted() {
            const _this = this;
            setTimeout(function () {
                _this.isLoading = false
            }, 1000)
        },

        methods: {

        }
    }
</script>
