<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-slider></city-slider>
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
      hotCites: []
    }
  },
  methods: {
    getCites: function () {
      axios.get('/api/city.json').then(this.handleSucc)
    },
    handleSucc: function (json) {
      json = json.data
      if(json.ref&&json.data.length){
        const data=json.data

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
