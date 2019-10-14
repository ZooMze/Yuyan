<template>
  <div class="main-container">
    
    <div class="body">
      <div class="left-nav">
        <nav-bar :activeIndex="activeIndex" :folded="folded"></nav-bar>
      </div>
      <div class="right-area" v-loading="$store.state.loading">
        <div class="body-top">
          <i v-if="!folded" class="el-icon-s-fold fold-button" @click="foldMenu(false)"></i>
          <i v-if="folded" class="el-icon-s-unfold fold-button" @click="foldMenu(true)"></i>

          <el-tooltip v-if="$store.state.scrollTop > 111 && $route.meta.detail && this.$store.state.historyRoute.name" effect="dark" :content="`返回 ${$store.state.historyRoute.routerName}`" placement="right-start">
            <el-button class="button-in-head" size="large" icon="el-icon-back" @click="backToLast" circle></el-button>
          </el-tooltip>
          
          <!-- 用户区域 -->
          <div class="user-area">
            <el-badge is-dot class="item"><el-avatar shape="square" :size="35" icon="el-icon-user-solid"></el-avatar></el-badge>
            <span class="user-name">{{ $store.state.userData.user_name || "ZooMze"}}</span>
            <i class="fa fa-sign-out" @click="$router.push({name: 'login'})"></i>
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
      }
    },
    watch: {
    },
    created () { //页面刷新时 检测路由 并设置activeIndex
      this.activeIndex = this.$route.meta.navIndex
    },
    mounted() {
      
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
      }
    },
  }
</script>