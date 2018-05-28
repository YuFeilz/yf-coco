import Vue from 'vue'
import App from './App'
import router from './router'
// 初始化css样式
import './assets/styles/reset.css'
// 移动端一像素边框问题
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
// 解决移动端点击300毫秒延迟问题
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
