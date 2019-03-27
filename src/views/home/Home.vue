<template>
  <div class="home" >
    sdfsdfsfsfsdddddddddddddddddddddddddddddd
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  created(){
    depot.post({
      url: '/a',
      config: {
        params:{
          id:"22"
        },
        data:{
          aa:3999
        }
      },
      cb: (res)=> {
        console.log(res)
      }
    })
  }
}
</script>
<style>
.home{
  text-align: left;
}
</style>

