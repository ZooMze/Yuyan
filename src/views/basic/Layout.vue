<template>
  <div class="default-container">
    <h2 class="margin-t-0">布局 Layout</h2>
    <p>整体页面为复合式布局 , 最外层为左右分布 , 然后右侧部分为上下分布, 布局内一个功能区就是一个模块</p>
    <el-button type="primary" @click="showLayout">点击查看布局</el-button>
    <p>默认情况下一个模块占满全部宽度 , 多个模块占用一行时使用栅格进行布局</p>

    <h3>模块化</h3>
    <p>本样式框架采用的是模块化布局模式, 即每个功能是一个单独的区域</p>
    <div class="margin-t-15 demo-block">
      <el-breadcrumb separator="/" class="margin-b-15">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item >子页面页</el-breadcrumb-item>
      </el-breadcrumb>
      <h2 class="margin-t-0">模块标题</h2>
    </div>
    <transition name="el-fade-in-linear">
      <div v-if="visible" class="layout-modal" @click="showLayout">
        <p class="nav">导航</p>
        <div class="left-line"></div>
        <p class="header">头部</p>
        <div class="top-line"></div>
        <p class="main">主体</p>
      </div>
    </transition>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        visible: false,
      }
    },
    methods: {
      showLayout() {
        this.visible == true ? this.visible = false : this.visible = true ;
      }
    }
  }
</script>

<style lang="less" scoped>
  .demo-block {
    background: #F5F5F5;
    padding: 15px;
    h2 {
      background: #fff;
      line-height: 1.8;
      padding: 0 15px;
    }
  }
  .layout-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #272727a3;
    .left-line {
      position: absolute;
      left: 200px;
      width: 3px;
      height: 100vh;
      background: #e62323;
    }
    .top-line {
      position: absolute;
      top: 50px;
      left: 200px;
      width: calc( 100vw - 200px);
      height: 3px;
      background: #e62323;
    }
    .nav, .header, .main {
      font-size: 28px;
      color: #fff;
      position: absolute;
    }
    .nav {
      top: calc( 50vh - 25px);
      left: 50px;
    }
    .header {
      top: -24px;
      left: calc( 50vw + 100px);
    }
    .main {
      top: calc( 50vh - 25px);
      left: calc( 50vw + 100px);
    }
  }
</style>