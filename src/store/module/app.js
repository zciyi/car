import {
    getMenuByRouter
} from '@/util/util'

import routers from '@/router/router'
export default {
    state: {},
    getters: {
        menuList: (state, getters, rootState) => getMenuByRouter(routers)
    }
}