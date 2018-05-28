<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      list: [
        {id: '001', imgUrl: 'https://img1.qunarzz.com/vc/56/c2/bc/94cd92692289c78770403648b5.jpg'},
        {id: '002', imgUrl: 'https://img1.qunarzz.com/vc/c1/c3/4f/7cd9da5aadf1c5b15cdbe11424.jpg'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #fff
  .wrapper
    width 100%
    overflow hidden
    height 0
    padding-bottom 30.55%
    .swiper-img
      width 100%
</style>
