import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/forbidden',
        name: 'forbidden',
        meta: {
            hideInMenu: true
        },
        component: (resolve) => require(["@/forbidden.vue"], resolve)
    }, {
        path: '/',
        hidden: true,
        meta: {
            hideInMenu: true
        },
        redirect: { path: '/home' }
    }, {
        path: '/home',
        name: 'sHome',
        component: (resolve) => require(["@/m-subpage/home/home.vue"], resolve)
    }]
})