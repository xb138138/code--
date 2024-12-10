<template>
    <div class="login">
        <h2>账号密码登录</h2>
        <form @submit.prevent>
            <div><input type="text" placeholder="用户名" v-model="userName"></div>
            <div><input type="password" placeholder="密码" v-model="password"></div>
            <button @click="login">登录</button>
        </form>
    </div>
</template>

<script>
/**
 * 1.安装json-server服务器  npm i json-server
 * 2.启动json-server服务：json-server json文件名
 */
import axios from 'axios'
export default {
    data() {
        return {
            userName: '',
            password: ''
        }
    },
    methods: {
        login() {
            /**
             * 1.向后端服务器请求用户数据
             * 2.遍历用户列表，使用fitler查询用户数据中是否有匹配的用户名和密码
             */
            /**
             * axios发送http请求
             * 1.npm i axios
             * 2.导入
             */
            axios({
                url: 'http://localhost:3000/userList', //服务端接口地址
                method: 'get'  //请求方法：查询：get  添加：post 删除：delete
            }).then((res) => {  //请求成功，会自动调用then中的回调函数，将返回数据作为实参
                console.log(res.data); //用户列表封装在返回的对象的data属性
                //遍历返回数据，实现真正的登录验证
                let result = res.data.filter((item) => {
                    return item.userName == this.userName && item.password == this.password
                })
                if (result.length > 0) {
                    sessionStorage.setItem('username', this.userName);
                    alert('登录成功');
                    //转向首页
                    // this.$router.push('/home?name=zs');
                    this.$router.push('/home')
                }else{
                    alert('用户名或者密码错误')
                }
            })







        }
    },
    mounted() {
        //$route:路由对象，封装了地址栏的信息，如：path,query
        console.log(this.$route);
        //$router:路由管理器对象，用来管理路由，push方法设置当前的路由
        console.log(this.$router);
    }

}

</script>
<style scoped>
.login {
    width: 300px;
    height: 200px;
    padding: 20px;
    border-radius: 10px;
    border: 3px solid gray;
    margin: 50px auto;
}
</style>