<template>
  <div class="goodsreview" style="background-color: blueviolet;">
    <!-- -->
    <p v-for="(item,index) in reviewList" :key="index">
      {{ item.userName }}说：{{ item.review }}
    </p>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  data(){
    return{
      reviewList:[]
    }
  },
  created(){
    axios({
      url:`http://localhost:3000/goodsList/${this.$route.query.goodsid}`,
      method:'get'
    }).then((res)=>{
      this.reviewList = res.data.reviews
    })
  }
}

</script>

<style lang="scss" scoped>


</style>