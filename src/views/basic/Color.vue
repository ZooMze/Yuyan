<template>
  <div class="default-container">
    <h2 class="margin-t-0">色彩 Color</h2>
    <h3>主要颜色</h3>
    <p>通常用于标记主要操作</p>
    <el-row :gutter="15" class="margin-b-15">
      <el-col :span="6">
        <div class="demo-block bg-primary text-default">主要颜色 #409EFF</div>
      </el-col>
    </el-row>
    <h3>其他颜色</h3>
    <p>在常规颜色无法做出完整标识时 , 进行补充说明的颜色</p>
    <el-row :gutter="15">
      <el-col :span="6">
        <div class="demo-block bg-success text-default">成功颜色 #67C23A</div>
      </el-col>
      <el-col :span="6">
        <div class="demo-block bg-warning text-default">警告颜色 #E6A23C</div>
      </el-col>
      <el-col :span="6">
        <div class="demo-block bg-danger text-default">危险颜色 #F56C6C</div>
      </el-col>
      <el-col :span="6">
        <div class="demo-block bg-info text-default">辅助颜色 #909399</div>
      </el-col>
    </el-row>
    <h3>中性色</h3>
    <p>通常用于文本, 背景等颜色</p>
    <el-row :gutter="15">
      <el-col :span="6">
        <div class="demo-block bg-333333 text-default">主要文本 #333333</div>
      </el-col>
      <el-col :span="6">
        <div class="demo-block bg-666666 text-default">常规文字 #666666</div>
      </el-col>
      <el-col :span="6">
        <div class="demo-block bg-999999 text-default">次要文字 #999999</div>
      </el-col>
      <el-col :span="6">
        <div class="demo-block bg-cbcbcb text-default">占位文字 #cbcbcb</div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
  .demo-block {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    border-radius: 4px;
  }
  .bg-333333 {
    background: #333333;
  }
  .bg-666666 {
    background: #666666;
  }
  .bg-999999 {
    background: #999999;
  }
  .bg-cbcbcb {
    background: #cbcbcb;
  }
</style>