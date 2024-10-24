<template>
  <!-- 轮播区域 -->
  <div class="banner">
      <div class="wrapper">
        <!-- 图 -->
        <ul class="pic">
          <li>
            <!-- 在组件的html代码中，@符号可以直接定位到src文件夹 -->
            <a href="#"><img :src="require(`../assets/images/${imgNames[currentIndex]}`)" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="@/assets/images/banner1.png" alt="" /></a>
          </li>
        </ul>
        <!-- 侧导航 -->
        <div class="subnav">
          <ul>
            <li>
              <div>
                <span><a href="#">生鲜</a></span>
                <span><a href="#">水果</a><a href="#">蔬菜</a></span>
              </div>
              <i class="iconfont icon-arrow-right-bold"></i>
            </li>
            <li>
              <div>
                <span><a href="#">美食</a></span>
                <span><a href="#">面点</a><a href="#">干果</a></span>
              </div>
              <i class="iconfont icon-arrow-right-bold"></i>
            </li>
            <li>
              <div>
                <span><a href="#">餐厨</a></span>
                <span><a href="#">数码产品</a></span>
              </div>
              <i class="iconfont icon-arrow-right-bold"></i>
            </li>
            <li>
              <div>
                <span><a href="#">电器</a></span>
                <span
                  ><a href="#">床品</a><a href="#">四件套</a
                  ><a href="#">被枕</a></span
                >
              </div>
              <i class="iconfont icon-arrow-right-bold"></i>
            </li>
            <li>
              <div>
                <span><a href="#">居家</a></span>
                <span
                  ><a href="#">奶粉</a><a href="#">玩具</a
                  ><a href="#">辅食</a></span
                >
              </div>
              <i class="iconfont icon-arrow-right-bold"></i>
            </li>
            <li>
              <div>
                <span><a href="#">洗护</a></span>
                <span
                  ><a href="#">洗发</a><a href="#">洗护</a
                  ><a href="#">美妆</a></span
                >
              </div>
              <i class="iconfont icon-arrow-right-bold"></i>
            </li>
            <li>
              <div>
                <span><a href="#">孕婴</a></span>
                <span><a href="#">奶粉</a><a href="#">玩具</a></span>
              </div>
              <i class="iconfont icon-arrow-right-bold"></i>
            </li>
            <li>
              <div>
                <span><a href="#">服饰</a></span>
                <span><a href="#">女装</a><a href="#">男装</a></span>
              </div>
              <i class="iconfont icon-arrow-right-bold"></i>
            </li>
            <li>
              <div>
                <span><a href="#">杂货</a></span>
                <span><a href="#">户外</a><a href="#">图书</a></span>
              </div>
              <i class="iconfont icon-arrow-right-bold"></i>
            </li>
            <li>
              <div>
                <span><a href="#">品牌</a></span>
                <span><a href="#">品牌制造</a></span>
              </div>
              <i class="iconfont icon-arrow-right-bold"></i>
            </li>
          </ul>
        </div>
        <!-- 指示器 -->
        <ol>
          <li class="current"><i></i></li>
          <li><i></i></li>
          <li><i></i></li>
        </ol>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        imgNames:['banner1.png','clothes1.png','clothes2.png'],
        currentIndex:0 //当前轮播图的下标
    }
  },
  mounted() {
    setInterval(()=>{
        this.currentIndex++;
        if(this.currentIndex==this.imgNames.length){
            this.currentIndex=0;
        }
    },2000)
  }
}
</script>

<style>

</style>