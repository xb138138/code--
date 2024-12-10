<template>
    <div class="goods wrapper">
        <div class="title">
            <div class="left">
                <h3>{{ type }}</h3>
                <p>新鲜出炉 品质靠谱</p>
            </div>
            <div class="right">
                <a href="#" class="more">查看全部<span class="iconfont icon-arrow-right-bold"></span></a>
            </div>
        </div>
        <div class="bd">
            <ul>
                <li v-for="item in goodsList" :key="item.id">
                    <a href="#">
                        <div class="pic">
                            <router-link :to="`/goodsdetail/goodsintro?goodsid=${item.id}`">
                                <img :src="`../../../public/images/${item.img}`" alt="" />
                            </router-link>
                         
                        </div>
                        <div class="txt">
                            <h4>{{item.name}}</h4>
                            <p>¥ <span>79</span></p>
                        </div>
                    </a>
                </li>
       
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const props = defineProps({
    type: String //父组件传入的商品类型
})

const goodsList = ref([])

onMounted(() => {
    axios.get('http://localhost:3000/goodsList').then((res) => {
        // console.log(res.data)
        goodsList.value = res.data.filter((item) => item.type === props.type)
    })
})
</script>



<style>
/* 新鲜好物 */
.goods .bd ul {
    display: flex;
    justify-content: space-between;
}

.goods .bd li {
    width: 304px;
    height: 404px;
    background-color: #EEF9F4;
}

.goods .bd li {
    display: block;
}

.goods .bd li .pic {
    width: 304px;
    height: 304px;
}

.goods .bd li .txt {
    text-align: center;
}

.goods .bd li h4 {
    margin-top: 17px;
    margin-bottom: 8px;
    font-size: 20px;
}

.goods .bd li p {
    font-size: 18px;
    color: #AA2113;
}

.goods .bd li p span {
    font-size: 22px;
}
</style>