/*
 本例展示了单个router组件的使用方式
 */
<template>
  <div class="default-container">
    <h2>表格 Table</h2>
    <p>为保证表格的最高可读性 , 在此约定表格的基本样式</p>

    <h3>基础</h3>
    <pre>&lt;el-table
    data="tableData"
    ref="table"
    ...
    &gt;
  &lt;el-table&gt;
  </pre>
    
    <h3>示例</h3>
    <el-table>
      
    </el-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          input: '',
          select: '',
        }
      }
    }
  }
</script>
