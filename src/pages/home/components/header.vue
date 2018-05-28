<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont ">&#xe632;</span>
      <input type="text">
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>
<script>
export default{
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    line-height 0.86rem
    display flex
    background-color #00bcd4
    color #fff
    .header-left
      widows 0.64rem
      float left
      .back-icon
        text-align center
        font-size .3rem
    .header-input
      flex 1
      line-height .64rem
      height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      background-color #fff
      border-radius .1rem
      color #ccc
    .header-right
      width 1.24rem
      float right
      text-align center
      .arrow-icon
        font-size .24rem
</style>
