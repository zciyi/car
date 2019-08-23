import Vue from 'vue'
import subpage from './subpage.vue'
import router from './router'

Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(subpage)
}).$mount('#subpage')