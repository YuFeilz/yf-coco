<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for ="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-con" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      if (this.list.length) {
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
      }
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon
    overflow hidden
    position relative
    float left
    width 25%
    padding-bottom 25%
    box-sizing border-box
    .icon-img
      position absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      padding .1rem
      .icon-img-con
        height 100%
        margin 0 auto
        display block
    .icon-text
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color #fff
      ellipsis()
</style>
