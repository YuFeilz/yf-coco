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
          <div class="area-item">
            <div class="item">北京</div>
          </div>
          <div class="area-item">
            <div class="item">北京</div>
          </div>
          <div class="area-item">
            <div class="item">北京</div>
          </div>
          <div class="area-item">
            <div class="item">北京</div>
          </div>
                  <div class="area-item">
            <div class="item">北京</div>
          </div>
          <div class="area-item">
            <div class="item">北京</div>
          </div>
          <div class="area-item">
            <div class="item">北京</div>
          </div>
        </div>
      </div>
      <div class="areas-item">
        <div class="title border-topbottom">A</div>
        <ul class="city-list">
          <li class="city-item border-bottom">成都</li>
          <li class="city-item border-bottom">上海</li>
          <li class="city-item border-bottom">西安</li>
          <li class="city-item border-bottom">兰州</li>
          <li class="city-item border-bottom">武汉</li>
        </ul>
      </div>
      <div class="areas-item">
        <div class="title border-topbottom">A</div>
        <ul class="city-list">
          <li class="city-item border-bottom">成都</li>
          <li class="city-item border-bottom">上海</li>
          <li class="city-item border-bottom">西安</li>
          <li class="city-item border-bottom">兰州</li>
          <li class="city-item border-bottom">武汉</li>
        </ul>
      </div>
      <div class="areas-item">
        <div class="title border-topbottom">A</div>
        <ul class="city-list">
          <li class="city-item border-bottom">成都</li>
          <li class="city-item border-bottom">上海</li>
          <li class="city-item border-bottom">西安</li>
          <li class="city-item border-bottom">兰州</li>
          <li class="city-item border-bottom">武汉</li>
        </ul>
      </div>
      <div class="areas-item">
        <div class="title border-topbottom">A</div>
        <ul class="city-list">
          <li class="city-item border-bottom">成都</li>
          <li class="city-item border-bottom">上海</li>
          <li class="city-item border-bottom">西安</li>
          <li class="city-item border-bottom">兰州</li>
          <li class="city-item border-bottom">武汉</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
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
