<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header v-show="showHeader"></detail-header>
    <detail-baseinfo></detail-baseinfo>
    <detail-container></detail-container>
  </div>
</template>
<script>
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/header.vue'
import DetailBaseinfo from './components/baseinfo.vue'
import DetailContainer from './components/container.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailBaseinfo,
    DetailContainer
  },
  data () {
    return {
      showHeader: false
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
