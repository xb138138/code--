<template>
  <div>
    <h1>咖啡</h1>
    <ul v-if="displayedCoffee.length > 0">
      <li v-for="coffee in displayedCoffee" :key="coffee.id">
        <div class="image-container">
              <img :src="coffee.imageUrl" alt="coffee Image">
            </div>
        <div class="details">
          <h3>{{ coffee.name }}</h3>
          <p>{{ coffee.description }}</p>
          <span>${{ coffee.price }}</span>
          <i class="fa fa-shopping-cart icon"></i>
        </div>
      </li>
    </ul>
    <p v-else>没有找到咖啡数据。</p>
    <!-- 更改文本以反映实际寻找的内容 -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      coffees: [],
    };
  },
  computed: {
    displayedCoffee() {
      return this.coffees.slice(0, 8);
    },
  },
  methods: {
    fetchCoffee() {
      axios
        .get("http://localhost:3000/allLists")
        .then((response) => {
          this.coffees = response.data;
        })
        .catch((error) => {
          console.error("请求失败:", error);
        });
    },
  },
  created() {
    this.fetchCoffee();
  },
};
</script>

<style scoped>
/* 基本样式 */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

/* 容器样式 */
div {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;

}

/* 标题样式 */
h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
}

/* 列表样式 */
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* 列表项样式 */
li {
  flex: 1 1 calc(25% - 20px);
  max-width: calc(25% - 20px);
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 图片容器样式 */
.image-container {
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

/* 图片样式 */
.image-container img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
 
}

/* 鼠标悬停时放大图片 */
.image-container:hover img {
  transform: scale(1.1);
  z-index: 1;
}

/* 列表项中的文本样式 */
.details {
  padding: 10px;
  text-align: center;
  flex: 1;
}

.details h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.details p {
  margin: 5px 0;
  font-size: 14px;
  color: #666;
}

.details span {
  color: #e85353;
  font-weight: bold;
  font-size: 16px;
  margin: 5px 0;
}

/* 购物车图标样式 */
.icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  background-color: #e85353;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

/* 鼠标悬停时放大图标 */
.icon:hover {
  transform: scale(1.2);
}

/* 无数据提示样式 */
p {
  text-align: center;
  color: #999;
  margin-top: 20px;
  font-size: 18px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  li {
    flex: 1 1 calc(33.3333% - 20px);
    max-width: calc(33.3333% - 20px);
  }
}

@media (max-width: 800px) {
  li {
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  li {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
