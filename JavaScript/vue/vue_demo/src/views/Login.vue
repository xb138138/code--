<template>
    <div class="login">
        <h2>This is Login</h2>
        <router-link to="/login/mm" class="mm">密码账号登陆</router-link> 
        <router-link to="/login/sm" class="sm">扫码登陆</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>
<!--  -->
<!-- import axios from 'axios' -->
<style lang="scss">
.login{
    width: 300px;
    height: 300px;
    padding: 20px;
    border-radius: 10px;
    border:3px solid gray;
    margin: 50px auto;
    a{
        margin: 5px;
    }
    .mm:hover{
        color: rgb(141, 221, 255);
    }
    .sm:hover{
        color: rgb(137, 255, 159);
    }
}
</style>