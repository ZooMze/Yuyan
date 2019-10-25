/*
 本例展示了单个router组件的使用方式
 */
<template>
  <div class="fluid-container">
    <h2>响应式</h2>
    <p>为了适应手机端的显示 , 约定了另一套显示方案</p>
    <h3>基本</h3>
    <p>依托于媒体查询进行动态宽度的识别以及样式展示的切换 , 此功能在 <code>ResponsiveLayout</code> 中实现</p>
    <div class="tip-area">
      <p>需要注意的是 , 虽然顶部变为响应式 , 但如果开发者将普通的 <code>NavLayout</code> 和 <code>ResponseiveLayout</code> 混用时 , 导航的功能依然保留并通用</p>
    </div>
    <div class="warning-area" v-for="item in 12">
      <p>尽管两种布局模式可以混用 , 但为了使用和体验的一致性 , 不建议两者混用</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>