import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store/store'
import depot from '@/modules/http'
import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用 CSS

Vue.config.productionTip = false
Vue.use(iView) // 必不可少的
depot()


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')