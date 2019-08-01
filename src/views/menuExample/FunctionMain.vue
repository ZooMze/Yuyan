<template>
  <div class="view-container has-foot">
    <el-breadcrumb>
      <el-breadcrumb-item>页面标题</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="view-header">
      <el-button class="gradient" type="primary" size="middle"><i class="el-icon-plus"></i>&nbsp;按钮</el-button>
      <div class="search-area">
        <el-form :model="searchForm" ref="searchForm" :inline="true">
          <el-form-item>
            <el-date-picker
              v-model="searchForm.dateRange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-input v-model="searchForm.keyword" placeholder="请输入关键字搜素">
              <el-button slot="append"><i class="el-icon-search"></i>&nbsp;搜素</el-button>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- <el-button class="right-button" type="text" size="middle">右侧按钮<i class="el-icon-plus"></i></el-button> -->

    <div class="view-body">
      <el-table :data="tableData" stripe center border>
          <el-table-column prop="data" label="列名">
          </el-table-column>
          <el-table-column prop="data" label="列名2">
          </el-table-column>
          <el-table-column label="操作" width="275px" fixed="right">
            <template slot-scope="scope">
              <el-button type="default" size="mini">操作</el-button>
              <el-button type="primary" size="mini">操作</el-button>
              <el-button type="warning" size="mini">操作</el-button>
              <el-button type="danger" size="mini">操作</el-button>
            </template>
          </el-table-column>
      </el-table>
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
    data() {
      return {
        searchForm: {
          dateRange: [],
          keyword: null
        },
        tableData: [
          {data:1}, {data:2}, {data:3}
        ]
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>