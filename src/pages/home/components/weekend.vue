<template>
  <div class="recommend">
    <h4 class="recommend-title">周末去哪儿</h4>
    <ul>
      <li class="item"  v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
          <div class="item-info">
            <p class="item-title">{{item.title}} </p>
            <p class="item-desc">{{item.desc}} </p>
          </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl';
  .recommend-title
    background-color #eee
    height .54rem
    line-height .54rem
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      font-size .32rem
      padding .1rem 0
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
</style>
