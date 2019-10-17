/**
 * 天气组件 , 自适应包裹容器 , 访问第三方数据 , 如遇到网络或服务器问题会进行错误处理(不显示)
 by ZooMze 2019/10/17
 参数: 
  tags: Array, //tag数组
 */
<template>
  <div class="weather-block" v-loading="loadingNow || loadingForcast">
    <!-- 当天的天气 -->
    <template v-if="weather">
      <h4>{{ weather.basic.admin_area }} - {{ weather.basic.parent_city }}</h4>
      <el-image class="image-now" fit="scale-down" :src="returnImgUrl(weather.now.cond_code)"/> 
      <p>{{ weather.now.tmp }}℃ {{ weather.now.cond_txt }} </p>
    </template>
    <!-- 未来天气 -->
    <template v-if="weatherForcast">
      <p v-for="item in weatherForcast.daily_forecast">
        <el-image fit="scale-down" :src="returnImgUrl(item.cond_code_d)"/>
        <el-image fit="scale-down" :src="returnImgUrl(item.cond_code_n)"/>
        {{ item.tmp_min }} ~ {{ item.tmp_max }}℃ {{ item.cond_txt_d }} ~ {{ item.cond_txt_n }}</p>
    </template>
    <template v-if="!weather && !weatherForcast">
      <p class="align-center">获取天气信息失败</p>
    </template>
  </div>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {
        loadingNow: true,
        loadingForcast: true,
        weather: null,
        weatherForcast: null
      }
    },
    computed: {
      imgUrl () {
        return require(`../assets/imgs/weather_icon/${101}.png`)
      }
    },
    mounted() {
      // 天气为第三方接口 , 返回结构与框架要求有差异 , 故直接在错误回调中处理
      this.$axios.get('https://free-api.heweather.net/s6/weather/now?location=chengdu&key=9e3e7ca0608e456d9ee85cb0047c7ae7').then()
      .catch(err => {
        this.weather = err.HeWeather6[0] || null
      this.loadingNow = false
      })
      this.$axios.get('https://free-api.heweather.net/s6/weather/forecast?location=chengdu&key=9e3e7ca0608e456d9ee85cb0047c7ae7').then()
      .catch(err => {
        this.weatherForcast = err.HeWeather6[0] || null
      this.loadingForcast = false
      })
    },
    methods: {
      returnImgUrl (code) {
        return require(`../assets/imgs/weather_icon/${code}.png`)
      }
    }
  }
</script>