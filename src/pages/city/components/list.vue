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
      this.changecity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changecity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
    const $this = this
    this.$root.Bus.$on('change', function (msg) {
      this.letter = msg
      const el = $this.$refs[this.letter][0]
      $this.scroll.scrollToElement(el)
    })
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
