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
    label="97px"
    size="small"
    ...
    &gt;
  &lt;el-form&gt;
  </pre>

    <div class="tip-area">
      <p>表单中涉及到横向布局时 , 优先采用栅格 , 不需要做动态宽度时 , 请自行写样式调整布局</p>
      
    </div>

    <h3>示例</h3>
    <p>复用本表单的代码 , 可以快速生成一个基本表单</p>
    <p>表单默认情况下是占满父级元素 ， 此处用栅格将其限制在 <code>:span=18</code></p>
    <el-row>
      <el-col :span="18">
        <el-form
          :model="form"
          ref="form"
          :rules="formRules"
          label-width="97px"
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
          <el-form-item label="多个输入框">
            <el-row type="flex" justify="space-between">
              <el-col :span="7">
                <el-input v-model="form.multi1" placeholder="span=7">
                  <template slot="prepend">前缀</template>
                </el-input>
              </el-col>
              <el-col :span="9">
                <el-input v-model="form.multi2" placeholder="span=9">
                  <template slot="prepend">前缀</template>
                  <template slot="append">后缀</template>
                </el-input>
              </el-col>
              <el-col :span="7">
                <el-input v-model="form.multi3" placeholder="span=7">
                  <template slot="append">后缀</template>
                </el-input>
              </el-col>
            </el-row>
            <small class="margin-0">注: 附带信息的el-input不可使用el-input-number , 为达到验证的效果请使用正则。 此处搜索使用栅格布局 , 试着改变浏览器的宽度查看效果</small>

          </el-form-item>
          <!-- <el-form-item label="图片上传" prop="imageList">
          </el-form-item> -->
          <el-form-item label="多选框">
            <el-checkbox-group v-model="form.checkboxs">
              <el-checkbox value="值1" label="标签1"></el-checkbox>
              <el-checkbox value="值2" label="标签2"></el-checkbox>
              <el-checkbox value="值3" label="标签3"></el-checkbox>
              <el-checkbox value="值4" label="标签4"></el-checkbox>
              <el-checkbox value="值5" label="标签5"></el-checkbox>
              <el-checkbox value="值6" label="标签6"></el-checkbox>
              <el-checkbox value="值7" label="标签7(多余选项将换行)"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="单选框">
            <el-radio-group v-model="form.radio">
              <el-radio value="值1" label="标签1"></el-radio>
              <el-radio value="值2" label="标签2"></el-radio>
              <el-radio value="值3" label="标签3"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="时间区间">
            <el-date-picker
              v-model="form.dateRange"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="标签">
            <tag-editor :tags="form.tags"></tag-editor>
            <small class="margin-0 display-block">点击添加后输入内容 , 输入完成后按下Enter键即可</small>
          </el-form-item>
          <el-form-item label-width="0">
            <el-row :gutter="0" type="flex" justify="space-between">
              <el-col :span="10">
                <el-form-item label="搜索项1">
                  <el-select v-model="serach1" class="fill-width">
                    <el-option value="选项1" label="选项1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="搜索项2">
                  <el-select v-model="serach2" class="fill-width">
                    <el-option value="选项1" label="选项1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="2" :offset="1">
                <el-button class="fill-width" size="small" type="primary">添 加</el-button>
              </el-col>
            </el-row>
            <small>此处搜索使用栅格布局 , 试着改变浏览器的宽度查看效果</small>
          </el-form-item>
          <el-table :data="tableData" border>
            <el-table-column v-for="col in columns"
              :prop="col.prop"
              :key="col.id"
              :label="col.label"
              :width="col.width">
            </el-table-column>
          </el-table>
          <el-form-item class="margin-t-15">
            <el-button type="primary" @click="submitForm">提交按钮</el-button>
            <el-button>取消按钮</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
  import tagEditor from '@/TagEditor.vue'
  export default {
    components: {
      'tag-editor': tagEditor
    },
    data () {
      return {
        // 表单
        form: {
          input: '',
          select: '',
          multi1: '',
          multi2: '',
          multi3: '',
          imageList: [],
          checkboxs: [],
          radio: '',
          tags: ['这是已添加的']
        },
        formRules: {
          imageList: [{required: true, message: '请上传图片', trigger: 'change'}]
        },
        // 表单附属变量
        tagInputVisible: false, //标签操作的输入框显示
        tagInputValue: '', //标签操作的值
        imgPreviewDialog: false,
        targetUrl: '',
        serach1: null,
        serach2: null,
        tableData: [],
        columns: [
          {
            id: 1,
            prop: 'prop1',
            label: '标题',
            width: ''
          },
          {
            id: 2,
            prop: 'prop2',
            label: '描述',
            width: ''
          },
        ]
      }
    },
    mounted() {
    },
    methods: {
      // upload(e, e1, e2) {
      //   let formData = new FormData()
      //   formData.append('img', e.file)
      //   let config = {
      //     url: `${this.$common.basePath}/manage/housing_information/appImg`,
      //     method: 'post',
      //     headers: {
      //       'content-type': 'multipart/form-data'
      //     },
      //     data: formData
      //   }
      //   this.$axios(config)
      // },
      //图片上传成功
      handleSuccess(formName, response, file) {
        this[formName].imageList.push(file);
        // this.$refs[formName].validateField('imageList')
      },
      //图片上传成功
      handleRemove(formName, response, file) {
        this[formName].imageList = fileList;
        this.$refs[formName].validateField('imageList')
      },
      handlePreview(file) {
        debugger
      },
      //图片上传成功
      handleExceed(formName, response, file) {
        this[formName].imageList.push(file);
        // this.$refs[formName].validateField('imageList')
      },
      deleteTag(tag) {
        this.form.tags.splice(this.form.tags.indexOf(tag), 1);
      },
      /**
       * 点击显示tag 的 Input
       * @return {[type]} [description]
       */
      showTagInput() {
        this.tagInputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      /**
       * tag 的input 输入确认
       * @return {[type]} [description]
       */
      handleTagInputConfirm() {
        let tagInputValue = this.tagInputValue;
        if (tagInputValue) {
          this.form.tags.push(tagInputValue);
        }
        this.tagInputVisible = false;
        this.tagInputValue = '';
      },
      submitForm() {
        this.$refs.form.validate(valid => {

        })
      }
    }
  }
</script>
