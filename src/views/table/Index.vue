/*
 本例展示了单个router组件的使用方式
 */
<template>
  <div class="default-container">
    <h2>表格 Table</h2>
    <p>为保证表格的最高可读性和一致性 , 在此约定表格的基本样式</p>

    <h3>基础</h3>
    <pre>&lt;el-table
    data="tableData"
    ref="table"
    border // 边框
    stripe // 斑马纹
    ...
    &gt;
  &lt;el-table&gt;
  </pre>
    
    <h3>简单示例</h3>
    <p>表格的尺寸 <code>size="small"</code> , 表格内的按钮依然遵循 <el-button type="text" size="mini" @click="$router.push({name: 'button'})"> 按钮 Button</el-button> 的按钮尺寸定义</p>
    <p>末尾有操作项的表格 , 需要自行微调末尾列的宽度 <code>width</code> , 使按钮刚好撑满操作列 , 如果有按钮动态变化 , 以变换后最长的长度为准</p>
    <el-table ref="table" :data="tableData" border stripe>
      <el-table-column
        type="selection"
        width="50"
        align="center">
      </el-table-column>
      <el-table-column v-for="col in columns"
        :prop="col.prop"
        :key="col.id"
        :label="col.label"
        :width="col.width">
      </el-table-column>
      <el-table-column label="操作" width="302" align="left">
        <template slot-scope="scope">
          <el-button type="default" size="small">操 作</el-button>
          <el-button type="primary" size="small" v-if="scope.row.name == '与燕科技'" @click="stopRefresh">停止旋转</el-button>
          <el-button type="warning" size="small" icon="el-icon-refresh-left" :loading="loading" v-if="scope.row.name == '与燕科技'" @click="changeInputText">{{ inputText }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="tip-area">
      <p>在实际产品中 , 表格中的按钮点击前后需要修改文本时 , 应尽量将文案设置为 <strong>统一长度</strong> , 如: (上架 / 下架 ; 开始任务 / 结束任务等)</p>
    </div>

    <h3>实时操作</h3>
    <p>在复杂表单中 , 为了简化页面的操作 , 表格可以动态直接编辑, 而不需要打开Dialog或者进入详情编辑</p>
    <p>用户点击某个单元格 , 元素变为可编辑的模式 , 输入内容后按下回车 或点击外部十七失去光标时 , 变回原本的文本模式</p>
    <div class="warning-area">
      <p>* 此功能有局限性 , 修改复杂表格项时 , 此功能无法满足需求</p>
      <p>* 使用此功能时 , 表格数据不会 <strong>实时保存</strong> , 需要一个按钮来将已编辑过的整个表格进行提交保存</p>
    </div>
    <el-button size="small" type="default" icon="el-icon-plus" @click="addRow">添 加</el-button>
    <el-button size="small" type="primary" icon="el-icon-check" @click="">保 存</el-button>
    <el-table class="margin-t-15" ref="tableEdit" :data="tableDataEdit" border stripe @cell-click="clickCell">
      <el-table-column v-for="(col, index) in columns"
        :prop="col.prop"
        :key="col.id"
        :index="index"
        :label="col.label"
        :width="col.width">
        <template slot-scope="scope">
          <el-input
            ref="inputInTable"
            size="small"
            v-if="editPosition.row == scope.row && col.prop == editPosition.prop"
            v-model="scope.row[col.prop]"
            @blur="resetPosition"
            @keyup.enter.native="resetPosition"></el-input>
          <span v-else>{{ scope.row[col.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="302" align="left">
        <template slot-scope="scope">
          <el-button type="danger" size="small" @click="deleteRow(scope)">删 除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <p>此功能的具体实现逻辑可参考代码 <code>views/table/Index.vue</code> </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        inputText: '开始旋转',
        form: {
          input: '',
          select: '',
        },
        tableData: [{
          name: '叩码科技',
          info: '科技公司',
          date: '2019-09-28 18:00'
        },{
          name: '与燕科技',
          info: '科技公司',
          date: '2019-09-28 18:00'
        },{
          name: '别的科技',
          info: '别的科技公司',
          date: '2019-09-28 18:00'
        }],

        tableDataEdit: [{
          name: '叩码科技',
          info: '科技公司',
          date: '2019-09-28 18:00'
        },{
          name: '与燕科技',
          info: '科技公司',
          date: '2019-09-28 18:00'
        },{
          name: '别的科技',
          info: '别的科技公司',
          date: '2019-09-28 18:00'
        }],
        // 编辑input出现的位置, 根据row和prop的信息进行准确定位
        editPosition: {
          prop: null, // 属性名
          row: null // 序列
        },
        columns: [
          {
            id: 1,
            prop: 'name',
            label: '名称',
            width: ''
          },
          {
            id: 2,
            prop: 'info',
            label: '描述',
            width: ''
          },
          {
            id: 3,
            prop: 'date',
            label: '日期',
            width: ''
          },
        ]
      }
    },
    methods: {
      changeInputText() {
        this.inputText = '正在旋转'
        this.loading = true
      },
      stopRefresh() {
        if(this.loading) {
          this.loading = false
          this.inputText = '开始旋转'
        } else {
          this.$message.warning("你并没有转")
        }
      },
      /**
       * 表格添加一行
       */
      addRow () {
        this.tableDataEdit.push({
          name: '',
          info: '',
          date: ''
        })
      },
      /**
       * 单元格点击事件 定位input位置 将对应格改为Input 并赋予焦点
       * @param  {[type]} row    [description]
       * @param  {[type]} column [description]
       * @param  {[type]} cell   [description]
       * @param  {[type]} event  [description]
       * @return {[type]}        [description]
       */
      clickCell (row, column, cell, event) {
        this.editPosition = {
          prop: column.property,
          row: row
        }
        this.$nextTick(_ => {
          this.$refs.inputInTable[0].focus()
        })
      },
      /**
       * 还原定位的位置
       * @return {[type]} [description]
       */
      resetPosition() {
        this.editPosition = {
          prop: null,
          row: null
        }
      },
      /**
       * 表格删除一行
       */
      deleteRow (scope) {
        this.tableDataEdit.splice(scope.$index, 1)
      },
    }
  }
</script>
