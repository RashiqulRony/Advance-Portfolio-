import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import FrontLayout  from '../components/layouts/FrontLayout.vue'
import Home         from '../components/Home.vue'


const router =  new Router({
    mode: 'history',
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            component: FrontLayout,
            children: [
                {
                    path: "/",
                    name: "Home",
                    component: Home,
                },
                {
                    path: "/about",
                    name: "Home",
                    component: Home,
                },
            ],

        },



        /*{
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: NotFound,
            meta: {title: '404 Not Found'}
        }*/
    ],

    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

router.beforeEach((toRoute, fromRoute, next) => {
    // window.document.title = toRoute.meta && toRoute.meta.title ? "RonInve | " + toRoute.meta.title : 'Login';
    if (toRoute.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn === false) {
            next({
                path: '/login',
            })
        } else {
            next()
        }
    } else {
        next()
    }
});

export default router;
