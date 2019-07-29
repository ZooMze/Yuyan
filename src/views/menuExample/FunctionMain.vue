<template>
  <div class="view-container has-foot">
    <el-breadcrumb>
      <el-breadcrumb-item>标题</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button class="right-button" type="text" size="middle">右侧按钮<i class="el-icon-plus"></i></el-button>

    <div class="view-body">
      <p>页面主体内容...</p>
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