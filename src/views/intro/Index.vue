/*
 本例展示了单个router组件的使用方式
 */
<template>
  <div class="default-container">
    <h2>引言</h2>
    <h3>与燕科技 - 前端样式框架 v1.1</h3>
    <small>by ZooMze & Qingqing Yang</small>
    <ul>
      <li><p>基于 <a href="https://element.eleme.cn/2.11/#/zh-CN" target="_blank">elmentUI</a> 进行搭建, 并对其做出本地化调整</p></li>
      <li><p>本样式框架旨在为开发人员提供更快捷高效的开发体验, 简化以至于省去繁琐的样式修改流程</p></li>
      <li><p>预制了快捷并符合设计规范的样式(class), 开发者无需自己书写基本的样式</p></li>
      <li><p>定制一套完整的多类型规范模板, 复用模板可以直接生成一个完整的模块(block)</p></li>
    </ul>
    <p><i class="el-icon-back"></i> 点击左侧导航开始浏览~</p>

    <h3>更新日志</h3>
    <el-timeline :reverse="false">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :type="activity.type"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activities: [{
          content: '添加了 预制类 的说明 , 添加了 表单(部分)',
          timestamp: '2019-08-28',
          type: 'primary',
        }, {
          content: '添加了基本的内容文档 , 隐藏一些不需要的样式',
          timestamp: '2019-08-27'
        }, {
          content: '初始化',
          timestamp: '2019-08-26'
        }]
      }
    }
  }
</script>