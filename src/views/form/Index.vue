/*
 本例展示了单个router组件的使用方式
 */
<template>
  <div class="default-container">
    <h2>表单 Form</h2>
    <p>实际业务中表单情况大同小异 , 但仍有规律可循</p>
    <p>本例尽可能全面地以完整表单的形式展示表单以及组件的使用方式以及布局模式</p>

    <h3>基础</h3>
    <p>任何表单元素都应包含在 <code>&lt;el-form&gt;</code> 中 , 大小控制 <code>size="small"</code> , label统一添加中文冒号 <code>label-suffix="："</code></p>
    <pre>&lt;el-form
    label-suffix="："
    ref="form"
    :model="form"
    label="120px"
    size="small"
    ...
    &gt;
  &lt;el-form&gt;
  </pre>
    
    <h3>示例</h3>
    <el-form
      :model="form"
      ref="form"
      label-width="120px"
      label-suffix="："
      size="small">
      <el-form-item label="普通输入框">
        <el-input v-model="form.name" placeholder="这是最基础的输入框(可清空) , 默认占满form的宽度" clearable></el-input>
      </el-form-item>
      <el-form-item label="普通单选框">
        <el-select v-model="form.select" placeholder="这是最基础的单选框(可输入筛选, 可清空) , 单页最多显示7条 , class='fill-width'" class="fill-width" filterable clearable>
          <el-option v-for="item in 10" :key="`选项${item}`" :label="`选项${item}`" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <p class="margin-0">更多表单正在商讨中...</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交按钮</el-button>
        <el-button>取消按钮</el-button>
      </el-form-item>
    </el-form>
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
