import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store/store'
import depot from '@/modules/http'
import './plugins/iview.js'

Vue.config.productionTip = false

depot()


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')