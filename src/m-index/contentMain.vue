<template>
   <div class="P-layout">
        <div class="P-layoutHeader">
            <top-header></top-header>
        </div>
        <Layout :style="{height: '100%', overflowY: 'scroll'}">
            <Sider hide-trigger collapsible :width="256" :collapsed-width="64"  class="left-sider" :style="{overflow: 'hidden'}">
                <side-menu accordion ref="sideMenu" :active-name="$route.name" @on-select="turnToPage" :menu-list="menuList">
                </side-menu>
            </Sider>
            <Layout :style="{padding: '24px',minHeight:'100vh'}">
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                       <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </Content>
                </Layout>
        </Layout>
    </div>    
</template>

<script>
import topHeader from '@/components/topHeader'
import sideMenu from '@/components/side-menu/side-menu'
export default {
    name:"contentMain",
    components:{
        sideMenu,
        topHeader
    },
    computed:{
        menuList () {
            let aaa = this.$store.getters.menuList;
            console.log(aaa)
            return this.$store.getters.menuList
        }
    },
    methods:{
        turnToPage (route) {
            let { name, params, query } = {}
            if (typeof route === 'string') name = route
            else {
                name = route.name
                params = route.params
                query = route.query
            }
            if (name.indexOf('isTurnByHref_') > -1) {
                window.open(name.split('_')[1])
                return
            }
            this.$router.push({
                name,
                params,
                query
            })
        }
    },
    watch: {
        '$route' (newRoute) {
            const { name, query, params, meta } = newRoute
            this.$refs.sideMenu.updateOpenName(newRoute.name)
        }
    }
}
</script>