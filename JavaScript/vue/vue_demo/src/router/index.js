//1.引入vue、vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Goods from '../views/goods.vue'
import Login from '../views/Login.vue'
// @代表src目录
import GoodsDetail from '@/views/GoodsDetail.vue'
import GoodsIntro from '@/components/goodsdetail/GoodsIntro.vue'
import GoodsReview from '@/components/goodsdetail/GoodsReview.vue'

//2.安装路由插件
Vue.use(VueRouter)
//定义路由规则
const routes = [
    {
        path: '/home', //hash地址，#后面的地址
        component: Home  //地址对应的组件对象
    },
    {
        path: '/goods',
        component: Goods
    },
    {
        path: '/login',
        component: Login
    },
    //商品详情
    {
        path: '/goodsdetail',
        component: GoodsDetail,
        children: [
            //商品介绍
            {
                path: 'goodsintro',  //  /goodsdetail/goodsintro
                component: GoodsIntro
            },
              //商品评价
              {
                path: 'goodsreview',  //  /goodsdetail/goodsreview
                component: GoodsReview
            }
        ]
    }


]
//3.创建路由对象
const router = new VueRouter({
    routes
});

//设置全局导航守卫
router.beforeEach((to, from, next) => {
    if(to.path === '/goods' & !sessionStorage.getItem('username')){
        alert('请先登录')
        next('/login')
    }else{
         next()
    }
}) 


//4.导出路由对象
export default router