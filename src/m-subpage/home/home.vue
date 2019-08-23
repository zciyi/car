<template>
    <div class="P-sHome" @click="toIndex">
        多页面 2
    </div>
</template>
<script>
export default {
    name:'sHome',
    methods:{
        toIndex(){
            window.location.href="/"
        }
    }
}
</script>

