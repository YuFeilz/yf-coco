<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe656;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe600;</span>
      <input type="text">
    </div>
    <router-link to="/city" key="arrow">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe654;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default{
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
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
      width 0.64rem
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
      overflow hidden
      input
        width 80%
    .header-right
      min-width 1.04rem
      padding:0 .1rem
      float right
      text-align center
      color #fff
      .arrow-icon
        font-size .36rem
</style>
