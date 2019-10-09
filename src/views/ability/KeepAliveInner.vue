<template>
  <div class="default-container">
    <h2>保持 KeepAlive</h2>
    <p>您现在处于详情页 , 请观察左侧导航, 您现在处在详情页, 但是导航并不会丢失</p>
    <p>点击左侧 <strong>保持 KeepAlive</strong> 导航 , 或者 <el-button size="small" type="primary" @click="$router.push({name : 'keepAlive'})" icon="el-icon-back">返 回</el-button>   </p>
    <p>试着刷新页面 , 左侧导航仍保持在 <strong>父级</strong> , 但是 <code>keep-alive</code> 将失效!</p>
  </div>
</template>
<script>
  export default {

  }
</script>