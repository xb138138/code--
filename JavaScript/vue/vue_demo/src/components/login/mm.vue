<template>
  <div id="mm">
    <form @submit.prevent>
        <div><input type="text" placeholder="用户名" v-model="userName"></div>
        <div><input type="password" placeholder="密码" v-model="password"></div>
        <button @click="login">登录</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            userName:'',
            password:''
        }
    },
    methods: {
        login(){
            axios({
                url:"http://10.11.121.62:3000/userList",
                method:"get"
            }).then((res)=>{ //请求成功后的回调函数
                console.log(res.data);
                // res.data.forEach((item)=>{
                //     if(item.userName === '张三' && item.password === '123'){
                //         sessionStorage.setItem('username','张三');
                //         alert('登录成功');
                //         // this.$router.push('/home');
                //         this.$router.push({path:'/home',query:{name:'张三'}});
                //     }
                // })
                let result = res.data.filter((item)=>{
                    return item.userName === this.userName && item.password === this.password
                })
                if(result.length > 0){
                    sessionStorage.setItem('username',this.userName);
                    alert('登录成功');
                    this.$router.push('/home');
                    // this.$router.push({path:'/home',query:{name:'张三'}});
                }else{
                    alert('登录失败');
                }
            });

            // sessionStorage.setItem('username','张三');
            // alert('登录成功');
            // // this.$router.push('/home');
            // this.$router.push({path:'/home',query:{name:'张三'}});
        }
    },
    mounted(){
        // 路由对象，地址栏信息
        console.log(this.$route);
        // 路由管理器
        console.log(this.$router);
        
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