<template>
  <div class="search">
    <input type="text" class="search-ipt" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .search
    background-color $bgColor
    height .72rem
    padding 0 .2rem
    .search-ipt
      width 100%
      text-align center
      box-sizing border-box
      padding 0 .1rem
      height .62rem
      line-height .62rem
      border-radius .06rem
      font-size .24rem
      box-sizing border-box
</style>
