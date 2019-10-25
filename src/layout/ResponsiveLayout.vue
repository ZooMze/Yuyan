<template>
  <div class="responsive-wrap">
    <transition name="fade">
      <div>
        <nav-bar v-show="$store.state.viewWidth > 1400" :activeIndex="activeIndex" :folded="folded" :mode="folded ? 'vertical' : 'horizontal'"></nav-bar>
        <div v-show="$store.state.viewWidth <= 1400" class="nav-holder">
          <!-- <img src="../assets/imgs/logo_mini_white_height.png" class=""></img> -->
          <span>与燕科技</span>
        </div>
      </div>
    </transition>
    <div class="responsive-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import qs from "qs"
  import NavBar from "../components/NavBar.vue"
  import css from "../assets/style/responsive.less"
  export default {
    components: {
      "nav-bar": NavBar,
    },
    data() {
      return {
        folded: false,
        loadingNow: true,
        weather: null,
      }
    },
    watch: {
    },
    created () { //页面刷新时 检测路由 并设置activeIndex
      this.activeIndex = this.$route.meta.navIndex
      let date = new Date()
      this.dateInfo = `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日 ${this.$common.getWeek()}` || '0'
    },
    mounted() {
      // 天气为第三方接口 , 返回结构与框架要求有差异 , 故直接在错误回调中处理
      this.$axios.get('https://free-api.heweather.net/s6/weather/now?location=chengdu&key=9e3e7ca0608e456d9ee85cb0047c7ae7').then()
      .catch(err => {
        this.weather = err.HeWeather6[0] || null
        this.loadingNow = false
      })
    },
    methods: {
      /**
       * 折叠菜单
       * @param  {[type]} type [description]
       * @return {[type]}      [description]
       */
      foldMenu(type) {
        if(type) {
          this.folded = false
        } else {
          this.folded = true
        }
      },
      /**
       * 点击左侧一级导航 决定二级导航的显示 并打开其目录下第一个页面
       * @param  {[type]} item [description]
       * @return {[type]}      [description]
       */
      leftNavClicked(item, index) {
        this.activeIndex = index
        try {
          this.$router.options.routes.some((itemInner, indexinner) => {
            if(index == itemInner.meta.navIndex) {
              this.$router.push({name: itemInner.children[0].name})
              // console.log(item.children[0].name)
              throw new Error("findMatchedIndex")
            }
          })
        } catch (error) {
          if(error.message != "findMatchedIndex") throw error
        }
      },
      /**
       * 检测当前页面滚动的高度
       * @param  {[type]} e  [description]
       * @param  {[type]} e2 [description]
       * @return {[type]}    [description]
       */
      pageScroll (e, e2) {
        // console.log(e.target.scrollTop)
        this.$store.commit('changeStatus', {key: 'scrollTop', value: e.target.scrollTop})
      },
      backToLast () {
        if(this.$store.state.historyRoute.name) {
          this.$router.push({name: this.$store.state.historyRoute.name})
        }
      },
      handleCommand() {},
      returnImgUrl (code) {
        return require(`../assets/imgs/weather_icon/${code}.png`)
      }
    },
  }
</script>