import Vue from 'vue'
import App from './App.vue'
//当导入的文件是index.js时可以省略文件名
import router from './router'
//引入全局样式，这个样式会作用于所有组件
import './styles/base.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
