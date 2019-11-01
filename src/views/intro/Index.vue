/*
 本例展示了单个router组件的使用方式
 */
<template>
  <div class="default-container">
    <h2>引言 Intro</h2>
    <h3>与燕科技 - 前端样式框架 v1.3</h3>
    <small>by ZooMze & Qingqing Yang</small>
    <p class="text-danger margin-b-0">本框架内容面向PC进行搭建 , 也提供了移动端优先的内容 <el-button type="text" @click="$router.push({name: 'responsive'})" size="mini">响应式 Responsive</el-button> 作为指引 </p>
    <ul>
      <li><p>基于 <a href="https://element.eleme.cn/2.11/#/zh-CN" target="_blank">elmentUI</a> 进行搭建, 并对其做出本地化调整</p></li>
      <li><p>本样式框架旨在为开发人员提供更快捷高效的开发体验, 简化以至于省去繁琐的样式修改流程</p></li>
      <li><p>框架自适应宽度 , 为达到最佳显示效果 , 页面宽度至少大于 <strong>1280px</strong></p></li>
      <li><p>预制了快捷并符合设计规范的样式(class), 开发者无需自己书写基本的样式</p></li>
      <li><p>预定义了多种变量以及函数 , 方便快捷调用</p></li>
      <li><p>定制一套完整的多类型规范模板, 复用模板可以直接生成一个完整的模块(block)</p></li>
    </ul>
    <p><i class="el-icon-back"></i> 点击左侧导航开始浏览~</p>

    <h3>更新日志</h3>
    <p>请前往 <a href="https://github.com/ZooMze/Yuyan">GitHub</a> 查看代码更新日志以及源码</p>
    <!-- <el-timeline :reverse="false">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :type="activity.type"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
    </el-timeline> -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activities: [
          {
            content: '组件 添加了 图片列表 天气组件 , 修改了拦截器',
            timestamp: '2019-10-17',
            type: 'primary',
          },
          {
            content: '组件 添加了 标签编辑功能, 添加了工作台实例',
            timestamp: '2019-10-16',
          },
          {
            content: '添加了 组件',
            timestamp: '2019-10-15',
          },
          {
            content: '丰富化了 全局 , 百度地图改为Vue组件式调用',
            timestamp: '2019-10-14',
          },
          {
            content: '添加了 权限 , 全局变量 , 图表 ; 版本改为v1.2 ',
            timestamp: '2019-10-12',
          },
          {
            content: '添加了 列表页 > 详情页 ; 优化 详情页下拉后顶部的返回按钮 , 优化了使用体验',
            timestamp: '2019-10-08',
          },
          {
            content: '修正 细则内容 ; 版本改为v1.1; 优化等',
            timestamp: '2019-10-08',
          },
          {
            content: '更新 表格',
            timestamp: '2019-09-27',
          },
          {
            content: '更新 表单',
            timestamp: '2019-09-04',
          },
          {
            content: '添加了 能力-保持',
            timestamp: '2019-08-31',
          },
          {
            content: '添加了 预制类 的说明 , 添加了 表单(部分)',
            timestamp: '2019-08-28',
          },
          {
            content: '添加了基本的内容文档 , 隐藏一些不需要的样式',
            timestamp: '2019-08-27'
          },
          {
            content: '初始化',
            timestamp: '2019-08-26'
          }
        ]
      }
    }
  }
</script>