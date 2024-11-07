<template>
    <div class="login">
        <h2>账号密码登录</h2>
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
<style scoped>
.login{
    width: 300px;
    height: 200px;
    padding: 20px;
    border-radius: 10px;
    border:3px solid gray;
    margin: 50px auto;
}
</style>