<template>
  <div class="wrapper">
    <div class="search">
      <input type="text" class="search-ipt" placeholder="输入城市名或拼音" v-model="keywords">
    </div>
    <div class="serach-content" v-show="keywords" ref="search">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{ item.name }}</li>
        <li class="search-item border-bottom" v-show="hasData">您要找的内容不存在</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keywords: '',
      list: []
    }
  },
  computed: {
    hasData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      // 调用mutation改变state状态
      // this.$store.commit('changecity', city)
      this.changecity(city)
      this.$router.push('/')
      this.keywords = 's'
    },
    ...mapMutations(['changecity'])
  },
  watch: {
    keywords () {
      if (!this.keywords) {
        this.list = []
        return
      }
      this.list = []
      for (let k in this.cities) {
        this.cities[k].forEach((value) => {
          if (value.name.indexOf(this.keywords) > -1 || value.spell.indexOf(this.keywords) > -1) {
            this.list.push(value)
          }
        })
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .search
    background-color $bgColor
    height .72rem
    padding 0 .2rem
    .search-ipt
      width 100%
      text-align center
      box-sizing border-box
      padding 0 .1rem
      height .62rem
      line-height .62rem
      border-radius .06rem
      font-size .24rem
      box-sizing border-box
  .serach-content
    overflow hidden
    position absolute
    top 1.58rem
    right 0
    left 0
    bottom 0
    z-index 2
    background-color #eee
    .search-item
      background-color #fff
      line-height .62rem
      padding-left .2rem
</style>
