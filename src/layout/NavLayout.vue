<template>
  <div class="main-container">
    
    <div class="body">
      <div class="left-nav">
        <nav-bar :activeIndex="activeIndex" :folded="folded"></nav-bar>
      </div>
      <div class="right-area" v-loading="$store.state.loading">
        <div class="body-top">
          <i v-if="!folded" class="el-icon-s-fold fold-button hover-cursor" @click="foldMenu(false)"></i>
          <i v-if="folded" class="el-icon-s-unfold fold-button hover-cursor" @click="foldMenu(true)"></i>

          <el-tooltip v-if="$store.state.scrollTop > 111 && $route.meta.detail && this.$store.state.historyRoute.name" effect="dark" :content="`返回 ${$store.state.historyRoute.routerName}`" placement="right-start">
            <el-button class="button-in-head" size="large" icon="el-icon-back" @click="backToLast" circle></el-button>
          </el-tooltip>
          
          <!-- 用户区域 -->
          <div class="user-area">
            <p class="margin-b-0 margin-lr-15">{{ dateInfo }}</p>
            <template v-if="weather">
              <div class="weather-in-top">
                <p class="margin-b-0 margin-lr-15">{{ weather.basic.admin_area }} - {{ weather.basic.parent_city }}</p>
                <el-image fit="scale-down" :src="returnImgUrl(weather.now.cond_code)"/>
                <p class="margin-b-0 margin-lr-15">{{ weather.now.tmp }}℃ / {{ weather.now.cond_txt }} </p>
              </div>
            </template>
            <template v-else>
              <p class="margin-b-0 margin-r-15">获取天气失败</p>
            </template>
            <el-badge is-dot class="item"><el-avatar shape="square" :size="35" icon="el-icon-user-solid"></el-avatar></el-badge>
            <el-dropdown @command="handleCommand">
              <span class="user-name">
                {{ $store.state.userData.user_name || "ZooMze"}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">选项1</el-dropdown-item>
                <el-dropdown-item command="b">选项2</el-dropdown-item>
                <el-dropdown-item command="c">选项3</el-dropdown-item>
                <el-dropdown-item command="d" disabled>选项4</el-dropdown-item>
                <el-dropdown-item command="e" divided>选项5</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-tooltip content="退出登录">
              <i class="fa fa-sign-out hover-cursor" @click="$router.push({name: 'login'})"></i>
            </el-tooltip>
            
          </div>
        </div>
        <div class="router-container" :class="{'has-folded': folded}"  @scroll="pageScroll">
          <transition name="slide-up">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from "qs"
  import NavBar from "../components/NavBar.vue"
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