<template>
  <div class="home">
    <!-- -->
    <search></search>
    <header1></header1>
    <ShortCut></ShortCut>
    <header-nav></header-nav>
    <goodList type="新鲜好物"></goodList>
    <goodList type="时尚衣物"></goodList>
  </div>
</template>

<script>
import Search from '@/components/common/Search.vue';
import HeaderNav from '@/components/common/HeaderNav.vue';
import header1 from '@/components/common/header.vue';
import ShortCut from '@/components/common/ShortCut.vue';
import goodList from '@/components/common/goodList.vue';
export default{
  components:{Search,HeaderNav,ShortCut,goodList,header1},
  mounted(){
    //页面中所有有ref属性的元素都会封装在this.$refs这个对象中，作为对象的属性
    console.log(this.$refs.btn)
  }
}
</script>

<style lang="scss" scoped>
.home{
    height: 900px;
}

</style>