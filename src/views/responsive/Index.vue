/*
 本例展示了单个router组件的使用方式
 */
<template>
  <div class="fluid-container">
    <h2>响应式 Responsive</h2>
    <p>为了适应手机端的显示 , 约定了另一套显示方案</p>
    <p class="text-danger">本页内容仅作为展示和基本构成 , 并非实际页面风格 , 移动端风格框架尚未落实</p>
    <div class="tip-area">
      <p>此布局是移动端优先的布局模式 , 所以在此布局下 , 许多功能的体验将大幅下降 , 例如可编辑的表格 , 鼠标浮动显示以及鼠标操作优先的功能</p>
    </div>
    <h3>基本</h3>
    <p>实现原理依托于动态宽度的识别以及样式展示的切换 , 此功能在 <code>ResponsiveLayout</code> 中实现</p>
    <p>为达到最佳的使用体验 , 顶部的导航将跟随滚动 , 其实现方式是将导航和占位同时固定 <code>position: fixed;</code></p>
    <p>只需要在 <code>router.js</code> 中给对应的路由配置 <code>showResponsiveLayout: true</code></p>
    <p><i class="el-icon-bottom"></i>向下滑动查看效果吧~</p>
    <div class="tip-area">
      <p>值得一提的是 , 虽然顶部变为响应式 , 但如果开发者在添加页面过程中将普通的 <code>NavLayout</code> 和 <code>ResponseiveLayout</code> 混用时 , 由于调用的是同一个导航组件 , 其功能完全通用</p>
    </div>
    
    <h3>自适应</h3>
    <p>自适应模式下所有布局关系的元素大小应优先使用相对单位 , 例如左右对齐和两端对齐等 , 活用栅格 , 精简操作流程也是提高移动端使用体验的方式</p>
    <p>在竖向的元素排列上 , 可以使用固定的高度</p>    
    <pre> {{ responsiveLayout }}</pre>
    <div class="tip-area">
      <p>宽度的自适应是通过动态监测页面可视区域来实现 , 而非媒体查询 <code>@media</code></p>
      <p>需要自适应的宽度长度需要自行在代码中调整</p>
    </div>

    <div class="warning-area">
      <h5>动画问题</h5>
      <p>在同一个位置控制两个元素交替出现时, 两个元素内容量差距过大时 , 会出现两个元素同时出现的闪烁问题</p>
    </div>
    <div class="tip-area" v-for="item in 12">
      <p>这是占位的~看看就行~~~</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        router: ``,
        responsiveLayout: `// ResponsiveLayout.vue
  watch: {
    '$store.state.viewWidth': {
      handler(newV, oldV) {
        if(newV > 1400) { // 自行调整
          this.mediaWild = true
        } else {
          this.mediaWild = false
        }
      }
    }
  },`
      }
    }
  }
</script>