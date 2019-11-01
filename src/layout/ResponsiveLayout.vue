<template>
  <div class="responsive-wrap">
    <div class="header-wrap">
      <transition name="fade">
        <nav-bar
          class="responsive-nav"
          :hideLogo="folded"
          :class="{'overflow-show': folded, 'overflow-origin': !showFold}"
          :activeIndex="activeIndex"
          :folded="false"
          :mode="folded && showFold ? 'vertical' : 'horizontal'"/>
      </transition>
      <div v-if="showFold" class="nav-holder">
        <div class="logo-wrap">
          <img src="../assets/imgs/logo_mini_white_height.png" class="logo"></img>与燕科技
        </div>
        <i class="el-icon-more hover-cursor" @click="foldMenu"></i>
      </div>
    </div>

    <div class="blank-holder"></div>
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
        loadingNow: true,
        weather: null,
        showFold: false, // 页面可视宽度是否低于最小宽度 
        folded: false, // 导航是否展开(同时决定vertical模式的导航)
      }
    },
    watch: {
      '$store.state.viewWidth': {
        handler(newV, oldV) {
          this.folded = false
          if(newV < 1400) {
            this.showFold = true
          } else {
            this.showFold = false
          }
        }
      }
    },
    activated() {
      if(document.body.clientWidth < 1400) {
        this.showFold = true
      } else {
        this.showFold = false
      }
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
      if(document.body.clientWidth < 1400) {
        this.showFold = true
      } else {
        this.showFold = false
      }
      this.$message(`您当前的显示宽度为 : ${document.body.clientWidth}`)
    },
    methods: {
      /**
       * 折叠菜单
       * @param  {[type]} type [description]
       * @return {[type]}      [description]
       */
      foldMenu(type) {
        if(this.folded) {
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