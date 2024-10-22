<template>
  <div class="comone">
    <!-- -->
    {{msg}}
    {{count}}
    <hr>
    我今年{{user.age}}岁了，叫{{user.name}}，来自{{user.address}},目前是一名程序员，比较喜欢大胸的女生，请各位女嘉宾爆个灯！当然年薪100万，要有车有房，我累了要给我按摩，出去玩要接我。
    <hr>
    <ul>
      <li v-for="item in userlist" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    // 用来定义从数据接收数据的元素，prpos：字符串，数组，对象
    props:['msg','count','user','userlist'],
    mounted() {
        console.log(this.msg);
    }
}
</script>

<style lang="scss" scoped>
.comone{
    width: 100px;
    height: auto;
    background-color: pink;
}
</style>