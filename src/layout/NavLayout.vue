<template>
  <div class="main-container">
    
    <div class="body">
      <div class="left-nav">
        <nav-bar :activeIndex="activeIndex" :folded="folded"></nav-bar>
      </div>
      <div class="right-area">
        <div class="body-top">
          <i v-if="!folded" class="el-icon-s-fold fold-button" @click="foldMenu(false)"></i>
          <i v-if="folded" class="el-icon-s-unfold fold-button" @click="foldMenu(true)"></i>
          <!-- 用户区域 -->
          <div class="user-area">
            <span>{{ $store.state.userData.user_name || "未登录"}}</span>
            <i class="fa fa-sign-out" @click="$router.push({name: 'login'})"></i>
          </div>
        </div>
        <div class="router-container" :class="{'has-folded': folded}">
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
      }
    },
  }
</script>