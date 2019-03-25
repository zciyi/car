import Home from '@/views/home/Home.vue'
import contentMain from '@/views/contentMain.vue'
import forbidden from '@/views/forbidden.vue'



/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */
const staticRouter = [{
        path: '/contentMain',
        name: 'contentMain',
        redirect: '/home',
        component: contentMain,
        meta: {},
        children: [{
            path: '/home',
            name: 'home',
            meta: {
                title: '公司简介'
            },
            component: Home
        }]
    },
    {
        path: '/banner',
        name: 'banner',
        redirect: '/homeBanner',
        component: contentMain,
        meta: {},
        children: [{
            path: '/homeBanner',
            name: 'homeBanner',
            meta: {
                title: '首页横幅'
            },
            component: Home
        }]
    },
    {
        path: '/bank',
        name: 'bank',
        redirect: '/homeBank',
        component: contentMain,
        meta: {},
        children: [{
            path: '/homeBank',
            name: 'homeBank',
            meta: {
                title: '合作银行'
            },
            component: Home
        }]
    },
    {
        path: '/applyLoan',
        name: 'applyLoan',
        redirect: '/homeApplyLoan',
        component: contentMain,
        meta: {},
        children: [{
            path: '/homeApplyLoan',
            name: 'homeApplyLoan',
            meta: {
                title: '申请贷款'
            },
            component: Home
        }]
    },
    {
        path: '/showLoan',
        name: 'showLoan',
        redirect: '/homeShowLoan',
        component: contentMain,
        meta: {},
        children: [{
            path: '/homeShowLoan',
            name: 'homeShowLoan',
            meta: {
                title: '贷款展品'
            },
            component: Home
        }]
    },
    {
        path: '/demoLoan',
        name: 'demoLoan',
        redirect: '/homeDemoLoan',
        component: contentMain,
        meta: {},
        children: [{
            path: '/homeDemoLoan',
            name: 'homeDemoLoan',
            meta: {
                title: '资讯/案例详情'
            },
            component: Home
        }]
    },
    {
        path: '/loanManager',
        name: 'loanManager',
        redirect: '/homeLoanManager',
        component: contentMain,
        meta: {},
        children: [{
            path: '/homeLoanManager',
            name: 'homeLoanManager',
            meta: {
                title: '贷款经理'
            },
            component: Home
        }]
    },
    {
        path: '/bottom',
        name: 'bottom',
        redirect: '/homeBottom',
        component: contentMain,
        meta: {},
        children: [{
            path: '/homeBottom',
            name: 'homeBottom',
            meta: {
                title: '网站底部'
            },
            component: Home
        }]
    },
    {
        path: '/operator',
        name: 'operator',
        redirect: '/homeOperator',
        component: contentMain,
        meta: {},
        children: [{
            path: '/homeOperator',
            name: 'homeOperator',
            meta: {
                title: '操作员管理'
            },
            component: Home
        }]
    },
    {
        path: '/forbidden',
        name: 'forbidden',
        meta: {
            hideInMenu: true
        },
        component: forbidden
    },
    {
        path: '*',
        hidden: true,
        meta: {
            hideInMenu: true
        },
        redirect: { path: '/forbidden' }
    },
    {
        path: '/',
        hidden: true,
        meta: {
            hideInMenu: true
        },
        redirect: { path: '/home' }
    }
]
export default staticRouter