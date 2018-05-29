<template>
  <div class="recommend">
    <h4 class="recommend-title">热销推荐</h4>
    <ul>
      <li class="item"  v-for="item in recommendList" :key="item.id">
        <img src="" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}} </p>
          <p class="item-desc">{{item.desc}} </p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {id: '0001', title: '详情信息', desc: '描述', imgUrl: ''},
        {id: '0002', title: '详情信息', desc: '描述', imgUrl: ''},
        {id: '0003', title: '详情信息', desc: '描述', imgUrl: ''}
      ]
    }
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
      .item-btn
        line-height .44rem
        margin-top .16rem
        background-color #ff9300
        color #fff
        padding 0 .2rem
        border-radius .1rem
</style>
