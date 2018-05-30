<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    height .86rem
    line-height .86rem
    overflow hidden
    text-align center
    background-color $bgColor
    color #ffffff
    font-size .36rem
    position relative
    .header-back
      position absolute
      left 0
      top 0
      width .64rem
      color #fff
</style>
