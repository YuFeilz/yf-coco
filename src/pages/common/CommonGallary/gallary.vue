<template>
  <div class="flex-box" @click="handleClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .flex-box >>> .swiper-pagination
    color #fff
    bottom -1rem
  .flex-box
    display flex
    flex-direction column
    justify-content center
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 99
    background-color #000
    .wrapper
      background-color #fff
      width 100%
      .swiper-container
        overflow inherit
      img
        width 100%
</style>
