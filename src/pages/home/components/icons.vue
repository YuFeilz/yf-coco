<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="item of list" :key="item.id">
        <div class="icon" v-for ="item in iconList" :key="item.id">
          <p class="icon-text">{{item.text}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {id: '0001', imgUrl: '', text: '热门景点'},
        {id: '0002', imgUrl: '', text: '热门景点'},
        {id: '0003', imgUrl: '', text: '热门景点'},
        {id: '0004', imgUrl: '', text: '热门景点'},
        {id: '0005', imgUrl: '', text: '热门景点'},
        {id: '0006', imgUrl: '', text: '热门景点'},
        {id: '0007', imgUrl: '', text: '热门景点'},
        {id: '0008', imgUrl: '', text: '热门景点'},
        {id: '0009', imgUrl: '', text: '热门景点'}
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .icons
    overflow hidden
    height 0
    padding-bottom 50%
    .icon
      overflow hidden
      float left
      width 25%
      padding-bottom 25%
      background-color lightgreen
      .icon-text
        line-height .5rem
        text-align center
        border-radius .1rem
        color #fff
</style>
