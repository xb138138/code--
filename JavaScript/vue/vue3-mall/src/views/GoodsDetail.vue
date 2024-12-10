<template>
    <div class="goodsdetail">
        <div class="show">
            <div class="goods-info">
                <div class="goods-image">
                    <img :src="require(`../assets/images/${goods.img}`)" />
                </div>
                <div class="goods-basic">
                    <div class="goods-title">{{goods.name}}</div>
                    <div class="goods-intro">{{goods.introduce}}</div>
                    <div class="goods-price">¥ {{goods.price}}</div>
                    <div class="goods-id">
                        <span>用户评价数：{{ 1 }}</span>
                    </div>

                    <!-- 数量选择器 -->
                    <div class="select">
                        <span class="label">购买数量：</span>
                        <div class="controls">
                            <button class="numbtn">-</button>
                            <span>1</span>
                            <button class="numbtn">+</button>
                        </div>
                    </div>

                    <!-- 购物车按钮 -->
                    <div class="cart">
                        <button class="addcart">
                            加入购物车
                        </button>
                        <button class="buynow">立即购买</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <span>

                <router-link :to="`/goodsdetail/goodsintro?goodsid=${$route.query.goodsid}`">商品介绍</router-link>
            </span>|
            <span>
                <router-link :to="`/goodsdetail/goodsreview?goodsid=${$route.query.goodsid}`">商品评价</router-link>
            </span>
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            goods: {}
        }
    },
    created() {
        axios({
            url: `http://localhost:3000/goodsList/${this.$route.query.goodsid}`,
            method: 'get'
        }).then((res) => {
            // console.log(res.data);
            this.goods = res.data;
        })
    }
}
</script>

<style lang="scss" scoped>
.goodsdetail {
    height: 900px;
    background-color: #f5f5f5;

    .main {
        width: 80%;
        height: 200px;
        background-color: rgb(107, 221, 183);
        margin: 0px auto;
    }

    .show {
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        background-color: white;
        border-radius: 8px;

        .goods-info {
            display: flex;
            gap: 30px;

            .goods-image {
                height: 300px;
                width: 300px;
                border-radius: 4px;
                background-color: #fffed0;
                border: 1px solid #ccc;
            }

            .goods-basic {
                flex: 1;
                padding: 20px;

                .goods-title {
                    margin-left: 15px;
                    font-size: 28px;
                    margin-bottom: 15px;
                    color: #333;
                    text-align: left;
                }

                .goods-intro {
                    margin-left: 15px;
                    font-size: 18px;
                    margin-bottom: 15px;
                    color: #333;
                    text-align: left;
                }

                .goods-price {
                    margin-left: 15px;
                    font-size: 28px;
                    color: #ff4400;
                    margin-bottom: 15px;
                    text-align: left;
                }

                .goods-id {
                    margin-left: 15px;
                    color: #666;
                    font-size: 20px;
                    margin-bottom: 20px;
                    text-align: left;
                }

                .select {
                    margin: 20px 0;
                    display: flex;
                    align-items: center;

                    .label {
                        color: #666;
                        margin-right: 10px;
                    }

                    .controls {
                        display: flex;
                        align-items: center;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        overflow: hidden;

                        .numbtn {
                            width: 36px;
                            height: 36px;
                            border: none;
                            background: #f5f5f5;
                            color: #666;
                            cursor: pointer;
                            font-size: 18px;
                        }
                    }
                }

                .cart {
                    margin-top: 30px;
                    display: flex;
                    gap: 15px;

                    button {
                        padding: 12px 30px;
                        border: none;
                        border-radius: 4px;
                        font-size: 16px;
                        cursor: pointer;
                        transition: all 0.3s ease;

                        &.addcart {
                            background-color: #ff9900;
                            color: white;
                            display: flex;
                            align-items: center;
                            gap: 5px;
                        }

                        &.buynow {
                            background-color: #ff4400;
                            color: white;
                        }
                    }
                }
            }
        }
    }

    .bottom {
        width: 80%;
        height: 200px;
        background-color: white;
        margin: 0px auto;
        text-align: left;
    }
}
</style>