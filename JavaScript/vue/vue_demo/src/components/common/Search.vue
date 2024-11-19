<template>
  <div>
    <!-- -->
    <div class="search">
        <div>
            <input type="text" v-model="skey">
            <button @click="search()">搜索</button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            skey:''
        }
    },
    methods:{
        search(){
            this.$router.push({path:'/goods',query:{skey:this.skey}},()=>{})
        }
    }
}
</script>

<style lang="scss" scoped>
.search{
    width: 300px;
    height: 25px;
    margin: 0px auto;
    div{
        width: 300px;
        height: 25px;
        input{
            width: 200px;
            height: 20px;
        }
    }
}
</style>