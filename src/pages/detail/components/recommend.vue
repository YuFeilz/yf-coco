<template>
  <div class="recommend">
    <div class="title">
      <h4><span class="iconfont zan">&#xe657;</span>去哪儿推荐</h4>
    </div>
    <ul class="piao">
      <li>
        <div class="left-desc">
          <p class="description">北京金海湖风景区双人票(含坝体彩绘观赏)</p>
          <p class="time">
           <span class="iconfont watch">&#xe909;</span>
           16:00前随买随用
          </p>
          <p class="refund">
            <span>随时退</span>
          </p>
        </div>
        <div class="right-price">
          <div class="price">￥<span>54</span> </div>
          <div class="btn">
            <button>预订</button>
          </div>
        </div>
      </li>
      <li>
        <div class="left-desc">
          <p class="description">北京金海湖风景区双人票(含坝体彩绘观赏)</p>
          <p class="time">
           <span class="iconfont watch">&#xe896;</span>
           可订7月21日
          </p>
          <p class="refund">
            <span>自营</span>
            <span>无需换票</span>
            <span>不可退</span>
          </p>
        </div>
        <div class="right-price">
          <div class="price">￥<span>54</span> </div>
          <div class="btn">
            <button>预订</button>
          </div>
        </div>
      </li>
      <li>
        <div class="left-desc">
          <p class="description">北京金海湖风景区双人票(含坝体彩绘观赏)</p>
          <p class="time">
           <span class="iconfont watch">&#xe909;</span>
           16:00前随买随用
          </p>
          <p class="refund">
            <span>自营</span>
            <span>无需换票</span>
            <span>随时退</span>
          </p>
        </div>
        <div class="right-price">
          <div class="price">￥<span>54</span> </div>
          <div class="btn">
            <button>预订</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ContainerRecommend'
}
</script>
<style lang="stylus" scoped>
  .recommend
    background-color #fff
    padding-left .2rem
    .title
      border-bottom .02rem solid #e9e9e9
      padding .2rem 0
      font-size .36rem
      .zan
        margin-right .2rem
        color #e16531
        font-size .36rem
    .piao
      >li
        display flex
        padding .2rem .2rem .2rem 0
        border-bottom .02rem solid #e9e9e9
        .left-desc
          flex 1
          .description
            font-size .32rem
            line-height .48rem
          .time
            font-size .24rem
            >.watch
              color #12cddb
          .refund
            margin-top .1rem
            >span
              color #12cddb
              border 1px solid #12cddb
              padding .02rem
              font-size .24rem
        .right-price
          display flex
          flex-direction column
          justify-content center
          padding-left .2rem
          .price
            color #ff9800
            text-align center
            span
              font-size .48rem
          .btn
            >button
              background-color #ff9800
              padding .1rem .4rem
              color #fff
              font-weight bold
              border-radius .1rem
</style>
