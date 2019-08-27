<template>
  <div class="default-container">
    <h2 class="margin-t-0">布局 Layout</h2>

    <h3>模块化</h3>
    <p>本样式框架采用的是模块化布局模式, 即每个功能是一个单独的区域</p>
    <div class="margin-t-15 demo-block">
      <el-breadcrumb separator="/" class="margin-b-15">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item >子页面页</el-breadcrumb-item>
      </el-breadcrumb>
      <h2 class="margin-t-0">模块标题</h2>
    </div>
  </div>
</template>

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
</style>