<template>
    <div class="login">
        <h2>This is Login</h2>
        <a href="" class="">密码账号登陆</a> 
        <a href="" class="">扫码登录</a>
        <form @submit.prevent>
            <div><input type="text" placeholder="用户名"></div>
            <div><input type="password" placeholder="密码"></div>
            <button @click="login">登录</button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        login(){
            sessionStorage.setItem('username','张三')
        }
    }
}
</script>
<style lang="scss">
.login{
    width: 300px;
    height: 200px;
    padding: 20px;
    border-radius: 10px;
    border:3px solid gray;
    margin: 50px auto;
    a{
        margin: 5px;
    }
}
</style>