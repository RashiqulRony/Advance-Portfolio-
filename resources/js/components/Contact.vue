<template>
    <div>
        <section class="page-header bg--cover" :style="'background-image:url(/assets/images/header/1.png)'">
            <div class="container">
                <div class="page-header__content" data-aos="fade-right" data-aos-duration="1000">
                    <h2>Contact Us</h2>
                    <nav style="--bs-breadcrumb-divider: '/';" aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item "><router-link :to="'/'">Home</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
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

        <div class="contact padding-top padding-bottom">
            <div class="container">
                <div class="contact__wrapper">
                    <div class="row g-5">
                        <div class="col-md-5">
                            <div class="contact__info" data-aos="fade-right" data-aos-duration="1000">
                                <div class="contact__social">
                                    <h3>let’s <span>get in touch</span>with us</h3>
                                    <ul class="social">
                                        <li class="social__item">
                                            <a href="#" class="social__link social__link--style1"><i class="fab fa-git"></i></a>
                                        </li>
                                        <li class="social__item">
                                            <a href="#" class="social__link social__link--style1"><i class="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li class="social__item">
                                            <a href="#" class="social__link social__link--style1"><i class="fab fa-youtube"></i></a>
                                        </li>
                                        <li class="social__item">
                                            <a href="#" class="social__link social__link--style1"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="contact__details">
                                    <div class="contact__item" data-aos="fade-right" data-aos-duration="1000">
                                        <div class="contact__item-inner">
                                            <div class="contact__item-thumb">
                                                <span><img :src="'/assets/images/contact/1.png'" alt="contact-icon" class="dark"></span>
                                            </div>
                                            <div class="contact__item-content">
                                                <p>
                                                    +880 1738 03***
                                                </p>
                                                <p>
                                                    +880 1738 03***
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contact__item" data-aos="fade-right" data-aos-duration="1100">
                                        <div class="contact__item-inner">
                                            <div class="contact__item-thumb">
                                                <span><img :src="'/assets/images/contact/2.png'" alt="contact-icon" class="dark"></span>
                                            </div>
                                            <div class="contact__item-content">
                                                <p>
                                                    rashiqulrony@gmail.com
                                                </p>
                                                <p>
                                                    rony.mmj@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contact__item" data-aos="fade-right" data-aos-duration="1200">
                                        <div class="contact__item-inner">
                                            <div class="contact__item-thumb">
                                                <span><img :src="'/assets/images/contact/3.png'" alt="contact-icon" class="dark"></span>
                                            </div>
                                            <div class="contact__item-content">
                                                <p>
                                                    Ring Road, Adabor - 1207
                                                </p>
                                                <p>
                                                    Dhaka, Bangladesh
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="contact__form">
                                <form action="" data-aos="fade-left" data-aos-duration="1000">
                                    <div class="row g-4">
                                        <div class="col-12">
                                            <div>
                                                <label for="name" class="form-label">Name</label>
                                                <input class="form-control" type="text" id="name" placeholder="Full Name">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div>
                                                <label for="email" class="form-label">Email</label>
                                                <input class="form-control" type="email" id="email" placeholder="Email here">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div>
                                                <label for="textarea" class="form-label">Message</label>
                                                <textarea cols="30" rows="5" class="form-control" id="textarea" placeholder="Enter Your Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="trk-btn trk-btn--border trk-btn--primary mt-4 d-block">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact__shape">
                  <span class="contact__shape-item contact__shape-item--1">
                      <img :src="'/assets/images/contact/4.png'" alt="shape-icon">
                  </span>
                  <span class="contact__shape-item contact__shape-item--2"> <span></span> </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {

        }
    }
</script>
