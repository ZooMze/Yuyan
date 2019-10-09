<template>
  <div class="default-container">
    <h2 class="margin-t-0">按钮 Button</h2>
    <p>结合 <el-button type="text" size="mini" @click="$router.push({name: 'color'})"> 色彩 Color</el-button> 的颜色 定义了一套按钮 统一使用 <code>size="small"</code></p>
    
    <h3>基本</h3>
    <p>按钮为带圆角的按钮 , 特殊情况下使用圆形按钮 <code>circle</code></p>
    <div>
      <el-button type="default" size="small">默认按钮</el-button>
      <el-button type="primary" size="small">主要按钮</el-button>
      <el-button type="success" size="small">成功按钮</el-button>
      <el-button type="warning" size="small">警告按钮</el-button>
      <el-button type="danger" size="small">危险按钮</el-button>
    </div>
    <div class="margin-t-15">
      <el-button type="default" size="small" plain>默认按钮</el-button>
      <el-button type="primary" size="small" plain>主要按钮</el-button>
      <el-button type="success" size="small" plain>成功按钮</el-button>
      <el-button type="warning" size="small" plain>警告按钮</el-button>
      <el-button type="danger" size="small" plain>危险按钮</el-button>
    </div>
    <div class="margin-t-15">
      <el-button icon="el-icon-search" size="small" circle></el-button>
      <el-button type="primary" size="small" icon="el-icon-edit" circle></el-button>
      <el-button type="success" size="small" icon="el-icon-check" circle></el-button>
      <el-button type="info" size="small" icon="el-icon-message" circle></el-button>
      <el-button type="warning" size="small" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" size="small" icon="el-icon-delete" circle></el-button>
    </div>
    <div class="tip-area">
      <p>再没有特殊要求下 , 按钮中的文本仅有两个字时 , 字间请添加一个空格</p>
    </div>
    <div class="margin-t-15">
      <el-button icon="el-icon-search" size="small">搜 索</el-button>
      <el-button type="primary" size="small" icon="el-icon-edit">编 辑</el-button>
    </div>
  </div>
</template>