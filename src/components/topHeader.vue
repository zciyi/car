<template>
    <div class="M-topHeader">
        <span class="M-topHeaderCon">{{msg}}</span>
        <div class="M-topHeaderRight" @click="loginout">
        退出登录
        </div>
    </div>
</template>
<script>
export default {
    name:"topHeader",
    data(){
        return{
            msg:"hello"
        }
    },
    methods:{
        loginout(){

        }
    }
}
</script>
<style lang="less" scoped>
.M-topHeader{
    background: #0D0D0D;
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: left;
    &Con{
        display: inline-block;
        text-align: center;
        min-width: 160px;
    }
    &Right{
    position: absolute;
    color:#fff;
    right:20px;
    top:0;
    cursor: pointer;
    
    }
  
}
</style>

