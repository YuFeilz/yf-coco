<template>
  <div class="banner">
    <img src="http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_600x330_5d562f69.jpg" alt="">
    <div class="desc">
      <div class="desc-iconfont"> <span class="iconfont">&#xe60d;</span> 15</div>
      <p class="desc-text">
        金海湖风景区（AAAA景区）
      </p>
    </div>
    <router-link tag="span" to="/" class="banner-back iconfont" key="detbanner">&#xe656;</router-link>
  </div>
</template>
<script>
export default {
  name: 'Banner'
}
</script>
<style lang="stylus" scoped>
  .banner
    overflow hidden
    padding-bottom 55%
    height 0
    position relative
    img
      width 100%
    .desc
      color #fff
      position absolute
      left 0
      bottom 0
      width 100%
      .desc-iconfont
        width 1rem
        line-height .4rem
        margin-left .2rem
        border-radius .2rem
        text-align center
        color #fff
        font-size .24rem
        background-color rgba(0,0,0,.5)
      .desc-text
        padding .2rem
        background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
    .banner-back
      padding .1rem
      border-radius 50%
      background-color rgba(0,0,0,.5)
      color #ffffff
      font-size .36rem
      position absolute
      left .2rem
      top .2rem
      vertical-align middle
</style>
