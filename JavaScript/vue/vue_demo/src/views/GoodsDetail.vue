<template>
  <div class="goodsdetail">
    <!-- -->
    <h1>这是商品详情组件,商品id为：{{ $route.query.goodsid }}</h1>
    <div class="main">
       <h2>这里显示商品的基本信息</h2>
    </div>
    <div class="bottom">
        <span>

            <router-link :to="`/goodsdetail/goodsintro?goodsid=${ $route.query.goodsid}`">商品介绍</router-link>
        </span>|
        <span>
            <router-link :to="`/goodsdetail/goodsreview?goodsid=${ $route.query.goodsid}`">商品评价</router-link>
        </span>
        <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default{
    mounted(){
        console.log(this.$route.query);
    }
}
</script>

<style lang="scss" scoped>
.goodsdetail{
    height: 900px;
    background-color: burlywood;
    .main{
        width: 80%;
        height: 200px;
        background-color: rgb(107, 221, 183);
        margin: 0px auto;
    }
    .bottom{
        width: 80%;
        height: 200px;
        background-color:white;
        margin: 0px auto;
        text-align: left;
    }
}

</style>