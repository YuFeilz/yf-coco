import Vue from 'vue'
import App from './App'
import router from './router'
import Bus from './assets/bus.js'
// 解决移动端点击300毫秒延迟问题
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
// 初始化css样式
import './assets/styles/reset.css'
// 移动端一像素边框问题
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    Bus
  },
  router,
  store,
  render: h => h(App)
})
