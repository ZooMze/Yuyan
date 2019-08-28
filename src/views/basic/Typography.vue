<template>
  <div class="default-container">
    <h2 class="margin-t-0">字体 Typography</h2>
    <p>为了视觉的统一, 字体与ElementUI一致</p>
    
    <h3>字体</h3>
    <p>采用统一的字体 , 代码如下 : </p>
    <pre>font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;</pre>

    <h3>字号</h3>
    <p>重新修改了文本标签的样式 , 开发者可以直接使用 : </p>
    <div class="demo-table">
      <el-table :data="fonts">
        <el-table-column label="标签" width="180">
          <template slot-scope="scope">
            <span :class="scope.row.tag"> {{ returnText(scope.row, 'tag')}} </span>
          </template>
        </el-table-column>
        <el-table-column label="层级" width="220">
          <template slot-scope="scope">
            <span :class="scope.row.tag"> {{ returnText(scope.row, 'level')}} </span>
          </template>
        </el-table-column>
        <el-table-column label="字体大小" width="120">
          <template slot-scope="scope">
            <span :class="scope.row.tag"> {{ returnText(scope.row, 'size')}} </span>
          </template>
        </el-table-column>
        <el-table-column label="字重" width="120">
          <template slot-scope="scope">
            <span :class="scope.row.tag"> {{ returnText(scope.row, 'weight')}} </span>
          </template>
        </el-table-column>
        <el-table-column label="示例">
          <template slot-scope="scope">
            <span :class="scope.row.tag"> {{ returnText(scope.row, null)}} </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fonts: [
          {
            tag: 'h1',
            level: '一级标题',
            size: '32px',
            weight: 'bold'
          },
          {
            tag: 'h2',
            level: '二级标题',
            size: '24px',
            weight: 'bold'
          },
          {
            tag: 'h3',
            level: '三级标题',
            size: '18px',
            weight: 'bold'
          },
          {
            tag: 'h4',
            level: '四级标题',
            size: '16px',
            weight: 'bold'
          },
          {
            tag: 'p',
            level: '正文',
            size: '14px',
            weight: 'normal'
          },
          {
            tag: 'small',
            level: '辅助文字',
            size: '12px',
            weight: 'normal'
          }
        ]
      }
    },
    methods: {
      // returnClass(row) {
      //   let classNames = ''
      //   switch(row.tag) {
      //     case h1:
      //       classNames = 'h1';
      //       break;
      //     case h2:
      //       classNames = 'h2';
      //       break;
      //     case 'h3':
      //       classNames = 'h3';
      //       break;
      //     case 'h4':
      //       classNames = 'h4';
      //       break;
      //     case 'p':
      //       classNames = 'p';
      //       break;
      //     case 'small':
      //       classNames = 'small';
      //       break;
      //   }
      //   return 'bg-primary text-default'
      // }, 
      returnText(row, key) {
        return key ? row[key] : '与燕科技 © copyright 2019'
      }
    }
  }
</script>
<style scoped lang="less">
  .tag-width {
    display: inline-block;
    width: 50px;
  }

  .demo-table {
    .h1, .h2, .h3, .h4 {
      font-weight: bold;
      color: #333333;
    }
  }
</style>