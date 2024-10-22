// 导入模块：import 模块名 from '模块名'
// 导入第3方模块vue，用来渲染页面
import Vue from 'vue'
// 导入模块：import 模块名 from '模块路径'
// 导入自定义模块
import App from './App.vue'

//导入全局样式文件
import './assets/css/base.css'
import Tybutton from './components/Tybutton.vue'

Vue.config.productionTip = false
// 注册全局组件
Vue.component('Tybutton', Tybutton) 

new Vue({
  render: h => h(App),
}).$mount('#app')
