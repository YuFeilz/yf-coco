<template>
  <div class="icons">
    <div class="icon">
      <p class="icon-text">热门景点</p>
    </div>
    <div class="icon">
      <p class="icon-text">热门景点</p>
    </div>
    <div class="icon">
      <p class="icon-text">热门景点</p>
    </div>
    <div class="icon">
      <p class="icon-text">热门景点</p>
    </div>
    <div class="icon">
      <p class="icon-text">热门景点</p>
    </div>
    <div class="icon">
      <p class="icon-text">热门景点</p>
    </div>
    <div class="icon">
      <p class="icon-text">热门景点</p>
    </div>
    <div class="icon">
      <p class="icon-text">热门景点</p>
    </div>
  </div>
</template>
<script>
export default{
  name: 'HomeIcons'
}
</script>
<style lang="stylus" scoped>
  .icons
    overflow hidden
    height 0
    padding-bottom 50%
    .icon
      overflow hidden
      position relative
      float left
      width 25%
      padding-bottom 25%
      box-sizing border-box
      background-color lightgreen
      .icon-text
        line-height .5rem
        position absolute
        bottom .44rem
        width 100%
        text-align center
        border-radius .1rem
        color #fff
</style>
