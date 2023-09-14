<template>
    <div>
        <section class="page-header bg--cover" :style="'background-image:url(/assets/images/header/1.png)'">
            <div class="container">
                <div class="page-header__content" data-aos="fade-right" data-aos-duration="1000">
                    <h2>Services</h2>
                    <nav style="--bs-breadcrumb-divider: '/';" aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item "><router-link :to="'/'">Home</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
                <div class="page-header__shape">
                    <span class="page-header__shape-item page-header__shape-item--1">
                        <img :src="'/assets/images/header/2.png'" alt="shape-icon">
                    </span>
                </div>
            </div>
        </section>

        <section class="service padding-top padding-bottom">
            <div class="section-header section-header--max50">
                <p>I'm offer the best services- All Kinds of IT Solutions Services and SEO Marketing Platform.</p>
            </div>
            <div class="container">
                <div class="service__wrapper">
                    <div class="row g-4 align-items-center">
                        <div class="col-sm-6 col-md-6 col-lg-4">
                            <div class="service__item" data-aos="fade-up" data-aos-duration="800">
                                <div class="service__item-inner text-center">
                                    <div class="service__thumb mb-30">
                                        <div class="service__thumb-inner">
                                            <img class="dark" :src="'/assets/images/service/1.png'" alt="service-icon">
                                        </div>
                                    </div>
                                    <div class="service__content">
                                        <h5 class="mb-15"> <a class="stretched-link" href="#">Website Design & Development</a> </h5>
                                        <p class="mb-0">A social assistant that's flexible can accommodate your schedule and needs, making life easier.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="service__item" data-aos="fade-up" data-aos-duration="1000">
                                <div class="service__item-inner text-center">
                                    <div class="service__thumb mb-30">
                                        <div class="service__thumb-inner">
                                            <img class="dark" :src="'/assets/images/service/2.png'" alt="service-icon">
                                        </div>
                                    </div>
                                    <div class="service__content">
                                        <h5 class="mb-15"> <a class="stretched-link" href="#"> Web Application Development</a> </h5>
                                        <p class="mb-0">Modules transform smart trading by automating processes and improving decision-making.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="service__item" data-aos="fade-up" data-aos-duration="1000">
                                <div class="service__item-inner text-center">
                                    <div class="service__thumb mb-30">
                                        <div class="service__thumb-inner">
                                            <img class="dark" :src="'/assets/images/service/2.png'" alt="service-icon">
                                        </div>
                                    </div>
                                    <div class="service__content">
                                        <h5 class="mb-15"> <a class="stretched-link" href="#"> Mobile App Development</a> </h5>
                                        <p class="mb-0">Modules transform smart trading by automating processes and improving decision-making.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="service__item" data-aos="fade-up" data-aos-duration="1200">
                                <div class="service__item-inner text-center">
                                    <div class="service__thumb mb-30">
                                        <div class="service__thumb-inner">
                                            <img class="dark" :src="'/assets/images/service/3.png'" alt="service-icon">
                                        </div>
                                    </div>
                                    <div class="service__content">
                                        <h5 class="mb-15"> <a class="stretched-link" href="#">E-commerce Solution</a> </h5>
                                        <p class="mb-0">There, it's me, your friendly neighborhood reporter's news analyst processes and improving</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="service__item" data-aos="fade-up" data-aos-duration="800">
                                <div class="service__item-inner text-center">
                                    <div class="service__thumb mb-30">
                                        <div class="service__thumb-inner">
                                            <img class="dark" :src="'/assets/images/service/4.png'" alt="service-icon">
                                        </div>
                                    </div>
                                    <div class="service__content">
                                        <h5 class="mb-15"> <a class="stretched-link" href="#">Enterprise Solution</a>
                                        </h5>
                                        <p class="mb-0">Hey, have you checked out that new cryptocurrency platform? It's pretty cool and easy to use!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="service__item" data-aos="fade-up" data-aos-duration="1000">
                                <div class="service__item-inner text-center">
                                    <div class="service__thumb mb-30">
                                        <div class="service__thumb-inner">
                                            <img class="dark" :src="'/assets/images/service/5.png'" alt="service-icon">
                                        </div>
                                    </div>
                                    <div class="service__content">
                                        <h5 class="mb-15"> <a class="stretched-link" href="#">SQA Solution</a> </h5>
                                        <p class="mb-0">Hey guys, just a quick update on exchange orders. There have been some changes currency!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="service__item" data-aos="fade-up" data-aos-duration="1200">
                                <div class="service__item-inner text-center">
                                    <div class="service__thumb mb-30">
                                        <div class="service__thumb-inner">
                                            <img class="dark" :src="'/assets/images/service/6.png'" alt="service-icon">
                                        </div>
                                    </div>
                                    <div class="service__content">
                                        <h5 class="mb-15"> <a class="stretched-link" href="#">SEO Marketing</a>
                                        </h5>
                                        <p class="mb-0">Hey! Just wanted to let you know that the price notification module processes is now live!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="service__item" data-aos="fade-up" data-aos-duration="1200">
                                <div class="service__item-inner text-center">
                                    <div class="service__thumb mb-30">
                                        <div class="service__thumb-inner">
                                            <img class="dark" :src="'/assets/images/service/6.png'" alt="service-icon">
                                        </div>
                                    </div>
                                    <div class="service__content">
                                        <h5 class="mb-15"> <a class="stretched-link" href="#">Digital Marketing</a>
                                        </h5>
                                        <p class="mb-0">Hey! Just wanted to let you know that the price notification module processes is now live!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="service__item" data-aos="fade-up" data-aos-duration="1200">
                                <div class="service__item-inner text-center">
                                    <div class="service__thumb mb-30">
                                        <div class="service__thumb-inner">
                                            <img class="dark" :src="'/assets/images/service/6.png'" alt="service-icon">
                                        </div>
                                    </div>
                                    <div class="service__content">
                                        <h5 class="mb-15"> <a class="stretched-link" href="#">Social media Marketing</a>
                                        </h5>
                                        <p class="mb-0">Hey! Just wanted to let you know that the price notification module processes is now live!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="service__shape">
                <span class="service__shape-item service__shape-item--1">
                    <img :src="'/assets/images/icon/1.png'" alt="shape-icon">
                </span>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        mounted() {

        }
    }
</script>
