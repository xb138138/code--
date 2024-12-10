<template>
  <div class="home">
    <!-- -->
    <Search></Search>
    <HeaderNav></HeaderNav>
    <Banner></Banner>
    <GoodsList type="新鲜好物"></GoodsList>
    <GoodsList type="时尚衣物"></GoodsList>
    <GoodsList type="潮流电器"></GoodsList>
  </div>
</template>

<script>
import Search from '@/components/common/Search.vue'
import HeaderNav from '@/components/common/HeaderNav.vue'
import Banner from '@/components/common/Banner.vue'
import GoodsList from '@/components/home/GoodList.vue';
export default{
  mounted(){
    //页面中所有有ref属性的元素都会封装在this.$refs这个对象中，作为对象的属性
    console.log(this.$refs.btn)
  },
  components:{
    Search,
    HeaderNav,
    Banner,
    GoodsList
  }
}
</script>

<style lang="scss" scoped>
.home{
    // height: 900px;
    background-color: #f5f5f5;
}

</style>