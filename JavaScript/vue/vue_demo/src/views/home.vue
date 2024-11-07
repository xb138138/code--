<template>
  <div class="home">
    <!-- -->
    <h1>这是首页组件</h1>
    <!-- 标签加上ref属性后，在js中就可以通过 this.$refs.ref的值 获取这个元素 -->
    <button ref="btn">ref测试按钮</button>
    <p ref="ptest">hahahdaha</p>
  </div>
</template>

<script>
export default{
  mounted(){
    //页面中所有有ref属性的元素都会封装在this.$refs这个对象中，作为对象的属性
    console.log(this.$refs.btn)
  }
}
</script>

<style lang="scss" scoped>
.home{
    height: 900px;
    background-color: aqua;
}

</style>