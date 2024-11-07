<template>
  <div class="container">
    <div class="header">
        <a href="index.html" class="logo">
            <h1>Logo</h1>
        </a>
        <nav class="navbar">
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">专业介绍</a></li>
                <li><a href="#">实验室</a>
                    <ul class="hide">
                        <li><a href="#">932实验室</a></li>
                        <li><a href="#">925实验室</a></li>
                        <li><a href="#">923实验室</a></li>
                    </ul>
                </li>
                <li><a href="#">教师队伍</a>
                    <ul class="hide">
                        <li><a href="#">博士</a></li>
                        <li><a href="#">教授</a></li>
                        <li><a href="#">讲师</a></li>
                    </ul>
                </li>
                <li><a href="#">就业指南</a></li>
                <li><a href="#">后台管理</a></li>
            </ul>
        </nav>
    </div>
    <div class="content">
        <h1>这是网站的内容</h1>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.content {
    padding-top: 80px;
    height: 100px;
}
    /* css样式初始化 */
* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: capitalize;
    transition: .2s linear;
}

/* header样式初始化*/
.header {
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: #3F3D56;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header .logo {
    color: white;
    padding: 0 1rem;
}
/* 导航样式 */
.navbar ul{
    display: flex;
}

.navbar ul li{
    font-weight: bold;
    width: 128px;
    list-style: none;
    text-align:center;
}
.navbar ul li a {
    width: 128px;
    line-height: 45px;
    font-size: 1.7rem;
    color: white;
}
.navbar ul li a:hover{
    color: #009933;
}
/* 二级菜单样式 */
.navbar ul li ul{
    position: absolute;
    display: none;
    width: 128px;
    line-height: 45px;
}

.navbar ul li ul li{
    background-color: #3F3D56;
}
/* 悬浮展开二级菜单 */
.navbar ul li ul li a:hover{
    color: white;
}
.navbar ul li ul li:hover{
    background-color: #009933;
}

.navbar ul li:hover ul{
    display: block;
}
/* 网站内容*/
.content{
    margin-top:50px;
}
</style>