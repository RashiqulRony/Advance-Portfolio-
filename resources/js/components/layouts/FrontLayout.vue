<template>
    <div>
        <Header />
        <router-view ></router-view>
        <Footer />
    </div>
</template>

<script>
    import Header       from '../share/Header.vue'
    import Footer       from '../share/Footer.vue'
    export default {
        components: {
            Header,
            Footer,
        },
        data() {
            return {
            }
        },

        mounted() {
            const _this = this;
            setTimeout(function () {
                _this.customScript()
            }, 1000)
        },

        methods: {
            customScript() {
                function changeImage() {

                    var theme = document.querySelector('html').getAttribute("data-bs-theme");
                    if (theme === "dark") {
                        var images = document.querySelectorAll('img.dark');

                        for (var i = 0; i < images.length; i++) {
                            var oldSrc = images[i].src;
                            var oldIndex = oldSrc.lastIndexOf(".");
                            var baseName = oldSrc.slice(0, oldIndex);
                            var extension = oldSrc.slice(oldIndex);
                            var newSrc = baseName + "-dark" + extension;
                            images[i].src = newSrc;
                        }
                    } else {
                        var images = document.querySelectorAll('img.dark');

                        for (var i = 0; i < images.length; i++) {
                            var oldSrc = images[i].src;
                            var newSrc = oldSrc.replace("-dark.", ".");
                            images[i].src = newSrc;
                        }
                    }
                }
                changeImage();

                var submenuList = document.querySelectorAll("ul>li>.submenu");
                submenuList.forEach(function (submenu) {
                    var parentLi = submenu.parentElement;
                    if (parentLi) {
                        parentLi.classList.add("menu-item-has-children");
                    }
                });

                var menuList = document.querySelectorAll("ul");
                menuList.forEach(function (menu) {
                    var parentLi = menu.parentElement;
                    if (parentLi) {
                        parentLi.addEventListener("mouseover", function () {
                            var menuPos = menu.getBoundingClientRect();
                            if (menuPos.left + menu.offsetWidth > window.innerWidth) {
                                menu.style.left = -menu.offsetWidth + "px";
                            }
                        });
                    }
                });
                var menuLinks = document.querySelectorAll(".menu li a");
                menuLinks.forEach(function (link) {
                    link.addEventListener("click", function (e) {
                        e.stopPropagation(); // prevent the event from bubbling up to parent elements
                        var element = link.parentElement;
                        if (parseInt(window.innerWidth, 10) < 1200) {
                            if (element.classList.contains("open")) {
                                element.classList.remove("open");
                                element.querySelector("ul").style.display = "none";
                            } else {
                                element.classList.add("open");
                                element.querySelector("ul").style.display = "block";
                            }
                        }
                    });
                });
                var headerBar = document.querySelector(".header-bar");
                headerBar.addEventListener("click", function () {
                    headerBar.classList.toggle("active");
                    var menu = document.querySelector(".menu");
                    if (menu) {
                        menu.classList.toggle("active");
                    }
                });
                var fixedTop = document.querySelector("header");
                window.addEventListener("scroll", function () {
                    if (window.scrollY > 300) {
                        fixedTop.classList.add("header-fixed", "fadeInUp");
                    } else {
                        fixedTop.classList.remove("header-fixed", "fadeInUp");
                    }
                });
                AOS.init();
                const Partner = new Swiper('.partner__slider', {
                    spaceBetween: 24,
                    grabCursor: true,
                    loop: true,
                    slidesPerView: 2,
                    breakpoints: {
                        576: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 25,
                        },
                    },
                    autoplay: {
                        delay: 1,
                        disableOnInteraction: true,
                    },
                    speed: 2000,
                });
                const blog = new Swiper('.blog__slider', {
                    spaceBetween: 24,
                    grabCursor: true,
                    loop: true,
                    slidesPerView: 1,
                    breakpoints: {
                        576: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    },

                    autoplay: true,
                    speed: 500,
                    navigation: {
                        nextEl: ".blog__slider-next",
                        prevEl: ".blog__slider-prev",
                    },
                });
                const testimonial = new Swiper('.testimonial__slider', {
                    spaceBetween: 24,
                    grabCursor: true,
                    loop: true,
                    slidesPerView: 1,
                    breakpoints: {
                        576: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                    },

                    autoplay: true,
                    speed: 500,

                    navigation: {
                        nextEl: ".testimonial__slider-next",
                        prevEl: ".testimonial__slider-prev",
                    },
                });
                const testimonial2 = new Swiper('.testimonial__slider2', {
                    spaceBetween: 24,
                    grabCursor: true,
                    loop: true,
                    slidesPerView: 1,
                    breakpoints: {
                        576: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                    },

                    autoplay: true,
                    speed: 500,

                    navigation: {
                        nextEl: ".testimonial__slider-next",
                        prevEl: ".testimonial__slider-prev",
                    },
                });

                const roadmapSlider = new Swiper('.roadmap__slider', {

                    grabCursor: true,
                    // loop: true,
                    slidesPerView: 1,
                    breakpoints: {
                        576: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1400: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        }

                    },

                    autoplay: true,
                    speed: 500,

                });
                window.addEventListener('scroll', function () {
                    var scrollToTop = document.querySelector('.scrollToTop');

                    if (scrollToTop) {
                        if (window.pageYOffset > 300) {
                            scrollToTop.style.bottom = '7%';
                            scrollToTop.style.opacity = '1';
                            scrollToTop.style.transition = 'all .5s ease';
                        } else {
                            scrollToTop.style.bottom = '-30%';
                            scrollToTop.style.opacity = '0';
                            scrollToTop.style.transition = 'all .5s ease';
                        }
                    }
                });

                var scrollToTop = document.querySelector('.scrollToTop');

                if (scrollToTop) {

                    // Click event to scroll to top
                    scrollToTop.addEventListener('click', function (e) {
                        e.preventDefault();
                        var scrollDuration = 100; // Set scroll duration in milliseconds
                        var scrollStep = -window.scrollY / (scrollDuration / 15);
                        var scrollInterval = setInterval(function () {
                            if (window.scrollY !== 0) {
                                window.scrollBy(0, scrollStep);
                            } else {
                                clearInterval(scrollInterval);
                            }
                        }, 15);
                    });
                }
                new PureCounter();
            }
        },

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
