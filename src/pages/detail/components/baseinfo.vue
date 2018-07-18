<template>
  <div class="baseinfo">
    <div class="w">
      <div class="left-hots">
        <div class="hots">
          <span class="fraction">9.7</span>
          <span class="text">分</span>
          <span class="great">很棒</span>
        </div>
        <div class="total-comment">
          <span class="comment">1918条评论</span>
          <span class="raiders">2条攻略</span>
        </div>
        <div class="iconfont right-arrow">&#xe618;</div>
      </div>
      <div class="right-tips">
        <div class="summary">景点简介</div>
        <div class="tips">开放时间、贴士</div>
        <div class="iconfont right-arrow">&#xe618;</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBaseinfo'
}
</script>
<style lang="stylus" scoped>
  .baseinfo
    padding 0 .2rem
    .w
      display flex
      padding .2rem 0
      border-bottom .02rem solid #e9e9e9
      div
        flex 1
      .left-hots
        border-right .02rem solid #e9e9e9
        position relative
        .hots
          color #ff8300
          .fraction
            font-size .44rem
          .text
            font-size .28rem
          .great
            font-size .28rem
            margin-left .4rem
        .total-comment
          font-size .24rem
          color #9e9e9e
          padding-top .1rem
          .raiders
            margin-left .3rem
      .right-arrow
        position absolute
        margin 0 auto
        color #9e9e9e
        top .22rem
        right .1rem
      .right-tips
        padding-left .2rem
        font-size .24rem
        position relative
        .summary
        .tips
          padding-top .16rem
        .tips
          color #9e9e9e
</style>
