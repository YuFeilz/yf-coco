import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/home')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/city')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/detail')
  }]
})
