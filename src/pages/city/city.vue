<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cites"></city-search>
    <city-list :cites="cites" :hot="hotCities"></city-list>
    <city-slider :cites="cites"></city-slider>
  </div>
</template>
<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CitySlider from './components/rightSlider'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CitySlider
  },
  data () {
    return {
      cites: {},
      hotCities: []
    }
  },
  mounted () {
    this.getCites()
  },
  methods: {
    getCites: function () {
      axios.get('https://www.easy-mock.com/mock/5b4ffb5b2728c11696daa7de/coco/city').then(this.handleSucc)
    },
    handleSucc: function (json) {
      json = json.data
      if (json.ret && json.data) {
        const data = json.data
        this.cites = data.cities
        this.hotCities = data.hotCities
      }
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
