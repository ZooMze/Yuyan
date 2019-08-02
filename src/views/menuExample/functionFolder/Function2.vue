<template>
  <div class="view-container has-foot">
    <el-breadcrumb>
      <el-breadcrumb-item>功能标题</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="view-body">
      <p>页面主体内容...</p>
      <el-button type="primary" @click="$router.push({name: 'function1'})">进入详情页</el-button>
    </div>
    <div class="view-footer">
      <el-pagination
        :current-page="1"
        :page-sizes="[15, 30, 45, 60]"
        :page-size="15"
        layout="total, sizes, prev, pager, next, jumper"
        :total="20">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>