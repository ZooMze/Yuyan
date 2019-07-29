<template>
  <div class="main-container">
    <div class="header">
      <h1>与燕公用前端框架示例</h1>
      <!-- 用户区域 -->
      <div class="user-area">
        <span>{{ $store.state.userData.user_name || "未登录"}}</span>
        <i class="fa fa-sign-out" @click="$router.push({name: 'login'})"></i>
      </div>
    </div>
    <div class="body">
      <!-- <div class="left-nav">
        <ul>
          <li v-for="(item, index) in leftNavData" :key="`${index}左侧列表`" @click="leftNavClicked(item, index)">
            <i class="el-icon-check"></i>
            <span :class="{'selected-nav-text': activeIndex == index }">{{ item.name }}</span>
          </li>
        </ul>
      </div> -->
      <div class="left-nav"><nav-bar :activeIndex="activeIndex"></nav-bar></div>
      <transition name="el-fade-in">
        <div class="router-container">
          <router-view></router-view>
        </div>
      </transition>
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
        leftNavData: [
          {
            name:      "会员",
          },
          {
            name:      "资讯",
          },
          {
            name:      "活动",
          },
          {
            name:      "素材",
          },
          {
            name:      "商城",
          },
          {
            name:      "系统",
          }
        ],
        activeIndex: 0, //激活的导航条
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