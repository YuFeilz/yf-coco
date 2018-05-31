<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
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
  methods: {
    getCites: function () {
      axios.get('/api/city.json').then(this.handleSucc)
    },
    handleSucc: function (json) {
      json = json.data
      if (json.ret && json.data) {
        const data = json.data
        this.cites = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCites()
  }
}
</script>
<style lang="stylus" scoped>

</style>
