<template>
  <div class="recommend">
    <h4 class="recommend-title">热销推荐</h4>
    <ul>
      <router-link tag="li" class="item"  v-for="item in list" :key="item.id" :to="'/detail/'+item.id">
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}} </p>
          <p class="item-desc">{{item.desc}} </p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
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
  .item
    display flex
    height 1.9rem
    overflow hidden
    background-color #f5f5f5
    .item-img
      width 1.7rem
      heigh 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        font-size .32rem
        padding .1rem 0
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-btn
        line-height .44rem
        margin-top .16rem
        background-color #ff9300
        color #fff
        padding 0 .2rem
        border-radius .1rem
        font-size .2rem
</style>
