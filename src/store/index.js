import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions: {// 主要处理异步数据
  //   changecity (ctx, city) {
  //     ctx.commit('changecity1', city)
  //   }
  // },
  mutations
})
