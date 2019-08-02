<template>
  <div class="view-container has-foot">
    <el-breadcrumb>
      <el-breadcrumb-item :to="{name: 'function2'}">功能标题</el-breadcrumb-item>
      <el-breadcrumb-item>详情页</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="view-body">
      <p>页面刷新 导航也不会丢失</p>
      <p>详情页不在导航中显示</p>
      <p>点击左侧导航/上方面包屑 可以回到列表页</p>
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