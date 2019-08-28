<template>
  <div class="default-container">
    <h2 class="margin-t-0">色彩 Color</h2>
    <p>色彩用于标识功能区域 , 引导操作 , 标识间隔等功能</p>
    <h3>主要颜色</h3>
    <p>通常用于标记主要操作</p>
    <el-row :gutter="15" class="margin-b-15">
      <el-col :span="6">
        <div class="demo-block bg-primary text-white">主要颜色 #409EFF</div>
      </el-col>
    </el-row>
    <h3>其他颜色</h3>
    <p>在常规颜色无法引导其余功能操作或需要进行颜色区分时 , 进行补充说明的颜色</p>
    <el-row :gutter="15">
      <el-col :span="6">
        <div class="demo-block bg-success text-white">成功颜色 #67C23A</div>
      </el-col>
      <el-col :span="6">
        <div class="demo-block bg-warning text-white">警告颜色 #E6A23C</div>
      </el-col>
      <el-col :span="6">
        <div class="demo-block bg-danger text-white">危险颜色 #F56C6C</div>
      </el-col>
      <el-col :span="6">
        <div class="demo-block bg-info text-white">辅助颜色 #909399</div>
      </el-col>
    </el-row>
    <h3>中性色</h3>
    <p>通常用于文本, 背景等颜色</p>
    <el-row :gutter="15">
      <el-col :span="6">
        <div class="demo-block bg-333333 text-white">主要文本 #333333</div>
      </el-col>
      <el-col :span="6">
        <div class="demo-block bg-666666 text-white">常规文字 #666666</div>
      </el-col>
      <el-col :span="6">
        <div class="demo-block bg-999999 text-white">次要文字 #999999</div>
      </el-col>
      <el-col :span="6">
        <div class="demo-block bg-cbcbcb text-white">占位文字 #cbcbcb</div>
      </el-col>
    </el-row>
    <div class="tip-area">
      <p>为避免样式覆盖ElementUI内的样式 , 所以在非 <code>&lt;p&gt;</code> 、 <code>&lt;li&gt;</code> 或 <code>&lt;small&gt;</code> 以外的元素内直接放入文本内容, 将不能应用默认的颜色信息</p>
      <p>如果有特殊情况需要使用 , 请使用 <el-button type="text" @click="$router.push({name: 'classes'})">预制类 Classes</el-button> 来修正文本的颜色</p>
      <p>错误示范 : <div>这是在div内的文本 #000000</div></p>
    </div>
    <h3>示例</h3>
    <p>可在 <el-button type="text" size="mini" @click="$router.push({name: 'button'})">按钮 Button</el-button> , <el-button type="text" size="mini" @click="$router.push({name: 'classes'})">预制类 Classes</el-button> 中查看实际应用</p>
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