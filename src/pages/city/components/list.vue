<template>
  <div class="area" ref="wrapper">
    <div>
      <div class="areas-item">
        <div class="title border-topbottom">当前位置</div>
        <div class="area-list">
          <div class="area-item">
            <div class="item">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="areas-item">
        <div class="title border-topbottom">热门城市</div>
        <div class="area-list">
          <div class="area-item" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="item">{{ item.name }} </div>
          </div>
        </div>
      </div>
      <div class="areas-item" v-for="(item,key) of cites" :key=
      "key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <ul class="city-list">
          <li class="city-item border-bottom" v-for="city of item" :key="city.id"  @click="handleCityClick(city.name)">{{city.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  data () {
    return {
      letter: ''
    }
  },
  props: {
    cites: Object,
    hot: Array
  },
  computed: {
    // 利用展开运算符将state里边的city映射到计算属性当中的currentCity
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changecity', city)
      // 调用changecity方法并且把当前点击的城市名称作为参数传递
      this.changecity(city)
      // 选中城市后页面饭后到首页
      this.$router.push('/')
    },
    // 利用展开运算符将mutation中的changecity方法映射到当前的changecity方法上
    ...mapMutations(['changecity'])
  },
  mounted () {
    // 组件挂载成功后添加滚动效果
    this.scroll = new BScroll(this.$refs.wrapper)
    const $this = this
    // 监听右侧列表的change事件
    this.$root.Bus.$on('change', function (msg) {
      this.letter = msg
      const el = $this.$refs[this.letter][0]
      // 根据传回来的字母滚动元素定位到右侧选中元素的list列表开始
      $this.scroll.scrollToElement(el)
    })
  },
  // 组件重新加载的时候滚动从当前页面顶部开始
  updated () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color #ccc
.area
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
  .title
    line-height .54rem
    background-color #eee
    padding-left .2rem
  .area-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .area-item
      width 33.33%
      float left
      .item
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
  .city-list
    .city-item
      padding 0 .2rem
      line-height .54rem
</style>
