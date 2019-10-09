<template>
  <div id="app">
    <transition name="el-fade-in-linear">
      <!-- 根据需要显示不同的布局情况 -->
      <component :is="layout"></component>
    </transition>
  </div>
</template>

<script>
  import BlankLayout from "./layout/BlankLayout.vue";
  import NavLayout from "./layout/NavLayout.vue"

  export default {
    props: {
      layout: {
        type: String,
        default: "nav-layout"
      }
    },
    watch: {
      "$route": {
        handler (to, from) {
          // 导航级跳转
          // debugger
          if(to.meta.routerName && from.meta.routerName) {
            // 还原分页
            this.$store.commit('changePage', 1)
            // 控制回滚
            if(!to.hash) {
              if(document.getElementsByClassName('router-container')[0]) {
                let scrollItem = document.getElementsByClassName('router-container')[0]
                scrollItem.scrollTop = 0
              }
            } else {// 有hash时 跳转至对应hash的位置
              this.$nextTick(_ => {
                let id = to.hash.substr(1,to.hash.length-1)
                let scrollItem = document.getElementsByClassName('router-container')[0]
                scrollItem.scrollTop = document.getElementById(id).offsetTop - 70
              })
            }
          }
          
        },
        deep: true
      }
    },
    components: {
      "nav-layout":   NavLayout,                                    
      "blank-layout": BlankLayout
    },
		data() {
      return {
      };
    },
    created() {
      // 初始查询是否登录
      // if(!sessionStorage.getItem("user")) {
      //   this.$store.commit("saveUserData", "{}")
      // } else {
      //   this.$store.commit("saveUserData", sessionStorage.getItem("user"))
      // }
    },
		mounted() {
      //页面刷新 查询token 没有则不设置token
      // if(!!sessionStorage.getItem("token")) {
      //   this.$axios.defaults.headers.common['token'] = sessionStorage.getItem("token")
      // } else {
      //   this.$axios.defaults.headers.common['token'] = ""
      //   this.$router.push({name: "login"})
      // }
		},
    methods: {
      /**
       * 遍历树(递归遍历), 删除空白的childrens
       * @param  {object}   node         根节点(单个对象, 多个树需要重复调用)
       * @return none
       */
      traverseTree (node) {
        if (!node) {
          return;
        }
        if (node.childrens && node.childrens.length > 0) {
          var i = 0;
          for (i = 0; i < node.childrens.length; i++) {
            this.traverseTree(node.childrens[i]);
            console.log(node.childrens[i])
          }
        }
      },
    }
  }
</script>

<style lang="less">
  #app, body{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
