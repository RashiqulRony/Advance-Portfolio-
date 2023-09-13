require('./bootstrap');
window.Vue = require('vue');

import Vue              from 'vue'
import router           from './routes/router';
import VueHead          from 'vue-head'
import loader           from "vue-ui-preloader";

Vue.use(VueHead)
Vue.use(loader);

const app = new Vue({
    router
}).$mount('#app');
