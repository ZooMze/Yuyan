<template>
  <div class="default-container">
    <h2 class="margin-t-0">预制类 Classes</h2>
    <p>为了遵循在HTML代码中不出现style的约定 , 本框架提供了快捷样式类 , 在标签中直接添加即可快速添加一些基本样式</code></p>
    <p>在开发过程中 , 经常因为需要一个很小的样式就要新创建一个class来书写样式 , 因此预制了一些快速的class , 来解决这个繁琐的问题</p>

    <h3>基本</h3>
    <p>提供最基本的样式</p>
    <div>
      <el-row class="margin-b-15" :gutter="15">
        <el-col :span="12">
          <el-table :data="basic">
            <el-table-column prop="value" label="类名">
            </el-table-column>
            <el-table-column prop="info" label="代码内容">
              <template slot-scope="scope">
                <code>{{scope.row.info}}</code>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>

    <h3>
      <el-popover placement="bottom" trigger="hover" title="默认边距">
        <div>
          <p>
            全局自带边距的元素: <code>&lt;h&gt;</code> 标签 ,  <code>&lt;p&gt;</code> 标签等 , 自带下边距15px ; <code>&lt;div class="block-wrap"&gt;</code> , 自带上边距15px
          </p>
          <p>需要覆盖这些边距样式时请自行写样式</p>
        </div>
        <span slot="reference"> 边距 <i class="el-icon-question"></i></span>
      </el-popover>
    </h3>
    <p>为保证视觉的统一 , 框架设计为在主体部分 统一使用 <strong>15px</strong> 的边距 , 因此提供了一些快捷边距类 , 分为 ' 0px边距 ' 和 ' 15px正常边距 '
    <pre>
      // 用法
      class="margin *-direction* *-length*" // 快速添加外边距
      class="padding *-direction* *-length*" // 快速添加内边距
      // 示例
      class="margin-t-15" // 快速设置上外边距 = 15px
      class="padding-tb-15" // 快速设置上下内边距 = 15px
      class="margin-0" // 快速设置四向外边距 = 0</pre>
    <div>
      <el-row class="margin-b-15" :gutter="15">
        <el-col :span="12">
          <h4>direction 可选值</h4>
          <el-table :data="direction">
            <el-table-column prop="value" label="值"></el-table-column>
            <el-table-column prop="info" label="描述"></el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12">
          <h4>length 可选值</h4>
          <el-table :data="length">
            <el-table-column prop="value" label="值"></el-table-column>
            <el-table-column prop="info" label="描述"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>

    <h3 id="fontsizes">文本字号</h3>
    <p>在非预期的标签中放入文本 , 会出现样式无法覆盖的问题 , 对此预定义了一系列文本大小的预制类</p>
    <div>
      <el-row class="margin-b-15" :gutter="15">
        <el-col :span="12">
          <el-table :data="fontSizes" stripe>
            <el-table-column  label="类名">
              <template slot-scope="scope">
                <p>{{scope.row.value}}</p>
              </template>
            </el-table-column>
            <el-table-column label="描述">
              <template slot-scope="scope">
                <p class="margin-0" :class="scope.row.value">{{scope.row.info}}</p>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>

    <h3 id="fontcolor">文本色彩</h3>
    <p>结合 <el-button type="text" size="mini" @click="$router.push({name: 'color'})"> 色彩 Color</el-button> 的颜色  根据不同的业务情况利用辅助颜色对 <strong>文字</strong> 进行标注和补充等</p>
    <div>
      <el-row class="margin-b-15" :gutter="15">
        <el-col :span="12">
          <el-table :data="classes" stripe>
            <el-table-column prop="value" label="类名">
            </el-table-column>
            <el-table-column prop="info" label="描述">
              <template slot-scope="scope">
                <span :class="{'text-white-bg': scope.row.value == 'text-white'}"><span :class="scope.row.value">{{scope.row.info}}</span></span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>

    
  </div>
</template>
<script>
  export default {
    data () {
      return {
        basic: [
          {
            value: 'fill-width',
            info: 'width: 100%;'
          },
          {
            value: 'fr',
            info: 'float: left;'
          },
          {
            value: 'align-left',
            info: 'text-align: left;'
          },
          {
            value: 'align-left-through',
            info: 'text-align: left; // 穿透样式'
          },

          {
            value: 'align-right',
            info: 'text-align: right;'
          },
          {
            value: 'align-center',
            info: 'text-align: center;'
          },
          {
            value: 'align-center',
            info: 'text-align: center;'
          }
        ],
        fontSizes: [
          {
            value: 'text-32',
            info: 'h1 - 文本'
          },
          {
            value: 'text-24',
            info: 'h2 - 文本'
          },
          {
            value: 'text-18',
            info: 'h3 - 文本'
          },
          {
            value: 'text-16',
            info: 'h4 - 文本'
          },
          {
            value: 'text-14',
            info: 'p - 文本'
          },
          {
            value: 'text-12',
            info: 'small - 文本'
          },
        ],
        classes: [
          {
            value: 'text-primary',
            info: 'primary - 文本'
          },
          {
            value: 'text-white',
            info: 'white - 白色文本'
          },
          {
            value: 'text-success',
            info: 'success - 文本'
          },
          {
            value: 'text-warning',
            info: 'warning - 文本'
          },
          {
            value: 'text-1',
            info: 'text - 主要文本'
          },
          {
            value: 'text-2',
            info: 'text - 正文文本'
          },
          {
            value: 'text-3',
            info: 'text - 辅助文本'
          },
          {
            value: 'text-4',
            info: 'text - 占位文本'
          }
        ],
        direction: [
          {
            value: '-t',
            info: 'top 上边距'
          },
          {
            value: '-r',
            info: 'right 右边距'
          },
          {
            value: '-b',
            info: 'bottom 底边距'
          },
          {
            value: '-l',
            info: 'left 左边距'
          },
          {
            value: '-lr',
            info: 'left & right 左右边距'
          },
          {
            value: '-tb',
            info: 'top & bottom 上下边距'
          },
          {
            value: 'null',
            info: 'all 全方向边距'
          }
        ],
        length: [
          {
            value: '-0',
            info: '0边距 0px'
          },
          {
            value: '-15',
            info: '正常边距 15px'
          }
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  .text-white-bg {
    background: #cbcbcb;
  }
</style>