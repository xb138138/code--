<template>
  <div id="mm">
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

<style lang="scss" scoped>
#mm{
    form{
        margin: 50px auto;
        div{
            margin: 10px auto;
            input{
                width: 200px;
                height: 20px;
            }
        }
    }
}
</style>