<template>
    <div class="shortcut">
      <div class="wrapper">
        <ul>
          <li><a href="#/login/mm">请先登录</a></li>
          <li><a href="#">免费注册</a></li>
          <li><a href="#">首页</a></li>
          <li><a href="#/goods">商品信息</a></li>
          <li><a href="#/Goodsdetail">帮助中心</a></li>
          <li><a href="#">在线客服</a></li>
          <li>
            <a href="#"
              ><span class="iconfont icon-mobile-phone"></span>手机版</a
            >
          </li>
        </ul>
      </div>
    </div>
</template>
  
  <script>
    
  </script>
  
  <style>
  .shortcut {
  height: 52px;
  line-height: 52px;
  background-color: #333;
}
.shortcut .wrapper {
  display: flex;
  justify-content: flex-end;
}
.shortcut ul {
  display: flex;
}
.shortcut a {
  padding: 0 15px;
  border-right: 1px solid #999;
  color: #fff;
  font-size: 14px;
  line-height: 14px;
}
.shortcut .login {
  color: #5EB69C;
}
.shortcut .icon-mobile-phone {
  margin-right: 5px;
}
  </style>