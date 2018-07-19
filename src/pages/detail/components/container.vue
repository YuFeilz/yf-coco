<template>
  <div class="container">
    <container-recommend></container-recommend>
  </div>
</template>
<script>
import ContainerRecommend from './recommend'
export default {
  name: 'DetailContainer',
  components: {
    ContainerRecommend
  }
}
</script>
<style lang="stylus" scoped>
  .container
    background-color #f5f5f5
    margin-top .1rem
    padding-top .2rem
</style>
