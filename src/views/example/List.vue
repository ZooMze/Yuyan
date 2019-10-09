<template>
  <el-container direction="vertical">
    <el-header>
      <el-page-header @back="goBack" title="返回" content="详情页面"></el-page-header>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>
<script>
  export default {
    data () {
      return {
        routes: []
      }
    },
    mounted () {
      this.getRouter()
    },
    methods: {
      /**
       * 获取路由 , 保存至面包屑
       * @return {[type]} [description]
       */
      getRouter () {
        console.log(this.$route)
        this.routes = this.$route.matched
      },
      goBack () {
        
      }
    }
  }
</script>