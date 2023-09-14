<template>
    <div>
        <section class="page-header bg--cover" :style="'background-image:url(/assets/images/header/1.png)'">
            <div class="container">
                <div class="page-header__content" data-aos="fade-right" data-aos-duration="1000">
                    <h2>404 page</h2>
                    <nav style="--bs-breadcrumb-divider: '/';" aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item "><router-link :to="'/'">Home</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">404 page</li>
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
        <div class="error padding-top padding-bottom sec-bg-color2">
            <div class="container">
                <div class="error__wrapper">
                    <div class="error__inner" data-aos="fade-up" data-aos-duration="800">
                        <div class="error__thumb text-center">
                            <img :src="'/assets/images/others/error.png'" alt="404 image">
                        </div>
                        <div class="error__content text-center">
                            <h2><span>ooops!</span> page not found</h2>
                            <p>Oops! It looks like you're lost. The page you were looking for couldn't be found. Don't worry, it happens
                                to the best of us.</p>
                            <router-link :to="'/'" class="trk-btn trk-btn--border trk-btn--primary">Back to home</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            link: [
                { rel: 'stylesheet', href: window.location.origin + '/assets/css/all.min.css' },
                { rel: 'stylesheet', href: window.location.origin + '/assets/css/aos.css' },
                { rel: 'stylesheet', href: window.location.origin + '/assets/css/bootstrap.min.css' },
                { rel: 'stylesheet', href: window.location.origin + '/assets/css/style.css' },
                { rel: 'stylesheet', href: window.location.origin + '/assets/css/swiper-bundle.min.css' },
                { rel: 'stylesheet', href: window.location.origin + '/assets/css/custom.css' },
            ],
            script: [
                { type: 'text/javascript', src: window.location.origin+'/assets/js/all.min.js', async: false, body: true},
                { type: 'text/javascript', src: window.location.origin+'/assets/js/aos.js', async: false, body: true},
                { type: 'text/javascript', src: window.location.origin+'/assets/js/bootstrap.bundle.min.js', async: false, body: true},
                // { type: 'text/javascript', src: window.location.origin+'/assets/js/custom.js', async: false, body: true},
                { type: 'text/javascript', src: window.location.origin+'/assets/js/fslightbox.js', async: false, body: true},
                { type: 'text/javascript', src: window.location.origin+'/assets/js/purecounter_vanilla.js', async: false, body: true},
                { type: 'text/javascript', src: window.location.origin+'/assets/js/swiper-bundle.min.js', async: false, body: true},
            ]
        }
    }
</script>
