<template>
  <div class="area" ref="wrapper">
    <div>
      <div class="areas-item">
        <div class="title border-topbottom">当前位置</div>
        <div class="area-list">
          <div class="area-item">
            <div class="item">北京</div>
          </div>
        </div>
      </div>
      <div class="areas-item">
        <div class="title border-topbottom">热门城市</div>
        <div class="area-list">
          <div class="area-item" v-for="item of hot" :key="item.id">
            <div class="item">{{ item.name }} </div>
          </div>
        </div>
      </div>
      <div class="areas-item" v-for="(item,key) of cites" :key=
      "key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <ul class="city-list">
          <li class="city-item border-bottom" v-for="city of item" :key="city.id">{{city.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import bus from '@/assets/bus'
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
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
    const $this = this
    bus.$on('change', function (msg) {
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
