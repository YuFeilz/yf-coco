<template>
  <div class="header" v-show="hasHeader">
   <router-link tag="span" to="/" class="iconfont back">&#xe656;</router-link> 北京国际鲜花港</div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      hasHeader: false
    }
  },
  methods: {
    handleScroll () {
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop > 60) {
        this.hasHeader = true
      } else {
        this.hasHeader = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
  .header
    position fixed
    top 0
    left 0
    width 100%
    background-color #00bcd4
    color #ffffff
    line-height .86rem
    text-align center
    .back
      position absolute
      left .2rem
</style>
