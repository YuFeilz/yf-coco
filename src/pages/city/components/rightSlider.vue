<template>
  <ul class="list">
    <li class="item" v-for="(city,key) of cites" :key="key" @click="handlslider">{{ key }}</li>
  </ul>
</template>
<script>
import bus from '@/assets/bus'
export default {
  name: 'CitySlider',
  props: {
    cites: Object
  },
  methods: {
    handlslider: function (e) {
      bus.$emit('change', e.target.innerText)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .list
    position absolute
    top 1.58rem
    right 0
    bottom 0
    display flex
    flex-direction column
    justify-content center
    text-align center
    width .4rem
    .item
      color $bgColor
      line-height .32rem
</style>
