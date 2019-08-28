<template>
  <el-menu
    id="nav"
    class="navigation-bar"
    :default-active="activeNav"
    @select="navSelected"
    :unique-opened="true"
    background-color="#001324"
    text-color="#FFFFFF"
    :collapse="folded"
    mode="vertical">
    <!-- 仅渲染含children && showNavLayout 的节点 -->
    <!-- logo为特殊节点 属于导航内 但不是router的节点 -->
    <div index="logo" class="logo">
      <img src="../assets/imgs/logo_mini_white_height.png" class="no-fold-img"></img>
      <transition name="el-zoom-in-center">
        <span v-if="!folded">与燕科技</span>
      </transition>
    </div>
    <nav-bar-item v-for="menu in navArray" :key="menu.path" :item="menu"/>
  </el-menu>
</template>

<script>
  import navBarItem from "./NavBarItem.vue"
  export default {
    components: {
      navBarItem
    },
    data () {
      return {
        navArray:  [],
        activeNav: '', // 当前激活的导航, 在页面初始时需要进行手动设置
      }
    },
    props: {
      activeIndex: {
        type: Number,
        require: true
      },
      folded: {
        type: Boolean,
        require: true
      }
    },
    watch: {
      // activeIndex: { //监听活动index变化 需要刷新到二级导航第一个
      //   handler(oldV, newV) {
      //     console.log(this.$route.name)
      //     this.activeNav = this.$route.name
      //   },
      //   deep: true
      // },
      folded: {
        handler (newV, oldV) {
        },
        deep: true
      },
      "$route": { //监听router变化
        handler (to, from) {
          if(this.$route.matched[this.$route.matched.length - 1].meta.hidden) {
            this.activeNav = this.$route.matched[this.$route.matched.length - 1].meta.redirectName
          } else {
            this.activeNav = this.$route.matched[this.$route.matched.length - 1].name
          }
        },
        deep: true
      }
    },
    created () {
      // 当前页并非导航节点（即详情页)
      if(this.$route.matched[this.$route.matched.length - 1].meta.hidden) {
        this.activeNav = this.$route.matched[this.$route.matched.length - 1].meta.redirectName
      } else {
        this.activeNav = this.$route.matched[this.$route.matched.length - 1].name
      }
      this.buildNav()
    },
    mounted () {
    },
    methods: {
      buildNav () {
        //并非放入根路由
        this.navArray = this.$router.options.routes
      },
      /**
       * 直接以nav的path作为name进行跳转(导航页不会存在带参跳转 如需实现带参效果 请用别的方式)
       * @param  {[type]} path      [description]
       * @param  {[type]} pathArray [description]
       * @return {[type]}           [description]
       */
      navSelected(path, pathArray) {
        if(path != 'logo') {
          this.$router.push({name: path})
        }
      }
    }
  }
</script>
