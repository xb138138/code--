<template>
  <div class="goodsreview" style="background-color: blueviolet;">
    <!-- -->
    <p>
      {{ item.uesrName }}说:{{ item.review }}
    </p>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data() {
      return {
        reviewList:[]
      }
    },
    created() {
      axios({
        url:`http://localhost:3000/reviewList/${this.$route.query.goodsid}`,
        method:'get'
      }).then((res)=>{
        this.reviewList = res.data.reviewList
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>