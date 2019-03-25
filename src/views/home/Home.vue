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
    depot.get({
      url: '/a',
      data: {},
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

