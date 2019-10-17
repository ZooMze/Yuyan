/*
 本例展示了单个router组件的使用方式
 */
<template>
  <div class="default-container">
    <h2>组件 Components</h2>
    <p>业务场景千变万化 , 但仍有组件内容是可复用的 , 为此本框架提供了若干个自定义组件 , 用来进行复用和解决繁琐维护等问题</p>

    <h3>验证码</h3>
    <pre> {{ verificationCode }}</pre>
    <p>验证码的主要繁琐点在于计时器的产生和还原 , 同时为了适应表单项做双向绑定 , 依托于自定义组件的 <a href="https://cn.vuejs.org/v2/guide/components-custom-events.html#自定义组件的-v-model">v-model</a> 实现</p>
    <p>你可以像element的其他表单项组件一样自由地使用 <code>&lt;verification-code&gt;</code></p>
    <p>详情请参考源码  <code>src/components/VerificationCode.vue</code></p>

    <p>示例 :</p>
    <el-form :model="formCode" :rules="formCodeRules" size="small" ref="formCode" label-width="100px" label-position="left" label-suffix="：">
      <el-form-item label="验证码凭证">
        <verification-code v-model="formCode.number"/>
      </el-form-item>
      <el-form-item label="验证码" prop="vCode">
        <el-input v-model="formCode.vCode"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="checkValidate('formCode')">检查表单</el-button>
      </el-form-item>
    </el-form>
    <div class="tip-area">
      <p>收取验证码组件的输入字段本身不是必填字段 , 但是组件内已经做了非空验证</p>
      <p>使用时请 <strong>不要</strong> 给本组件所在的表单项中添加验证</p>
    </div>

    <h3>上传</h3>
    <p>直接定义一套完整的图片上传内容, 同时可以实现同页面下多个上传组件已最少的代码行数进行工作</p>
    <p>详情请参考源码  <code>src/views/components/Index.vue</code></p>

    <el-form :model="formUpload" :rules="formUploadRules" size="small" ref="formUpload" label-width="100px" label-position="left" label-suffix="：">
      <el-form-item label="图片" prop="imgList">
        <el-upload
          :action="`${$common.basePath}meeting/meeting/appImg`"
          :file-list="formUpload.imgList"
          list-type="picture-card"
          :on-success="(response, file, fileList) => {handleSuccess(response, file, fileList, 'formUpload')}"
          :on-remove="(file, fileList) => {handleRemove(response, file, fileList, 'formUpload')}"
          :on-error="handleError">
          <i class="el-icon-plus"></i>
        </el-upload>
        <!-- <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog> -->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="checkValidate('formUpload')">检查表单</el-button>
      </el-form-item>
    </el-form>
    <div class="tip-area">
      <p>上传组件即使封装为一行代码的组件, 仍需要响应多个事件 , 所以作为复用代码块进行使用</p>
      <p>使用时需要放入关联的事件回调</p>
    </div>

    <h3>标签编辑</h3>
    <p>实现动态编辑标签项 , 在标签变化时回调事件 <code>@changed</code></p>
    <p>本例也展示了多个重复组件时 , 便捷地进行表单验证 , 详情请参考源码 <code>src/components/TagEditor.vue</code></p>
    <el-form :model="formTags" :rules="formTagsRules" size="small" ref="formTags" label-width="100px" label-position="left" label-suffix="：">
      <el-form-item label="标签项" prop="tags">
        <tag-editor ref="formTags" :tags="formTags.tags" @changed="checkValidate('formTags', 'tags')"></tag-editor>
      </el-form-item>
      <el-form-item label="标签项2" prop="tags2">
        <tag-editor  ref="formTags2" :tags="formTags.tags2" @changed="checkValidate('formTags', 'tags2')"></tag-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="checkValidate('formTags')">检查表单</el-button>
      </el-form-item>
    </el-form>
    <div class="tip-area">
      <p>使用此组件时 , 在无特殊情况下都应处理 <code>@changed</code> 事件 , 进行动态表单验证</p>
    </div>
    <div class="warning-area">
      <p>当重复使用多个相同组件时 , 最好使用不同的 <code>ref="xxx"</code> 来区分</p>
    </div>

    <h3>图文列表</h3>
    <p>较为常见的列表展现形式 , 以图片作为背景的列表 , 鼠标浮动显示文本内容( 也可以设置为常驻显示 <code>trigger="always"</code> )</p>
    <p>组件除了源数据字段以外都非必传 , 并已配置好默认值 , 详情请参考源码 <code>src/components/ImgList.vue</code></p>
    <p>在 <el-button type="text" size="mini" @click="$router.push({name: 'dashboard'})">工作台 Dashboard</el-button> 中查看实际应用效果吧~</p>
    <img-list :list="listData" trigger="always"></img-list>
    <img-list :list="listData2" trigger="hover" statusKey="status2" titleKey="title2" bottomKey="bottom2"></img-list>
    <div class="tip-area">
      <p>本组件触发机制实则有两个触发源 , 分别为 底部文字 和 背部图片</p>
    </div>
  </div>
</template>

<script>
  import verificationCode from '@/VerificationCode.vue'
  import tagEditor from '@/TagEditor.vue'
  import imgList from '@/ImgList.vue'
  export default {
    components: {
      'verification-code': verificationCode,
      'tag-editor': tagEditor,
      'img-list': imgList
    },
    watch:{
      'formTags.tags': {
        handler(n,o) {
          console.log(n)
        }
      }
    },
    data () {
      /* 长度验证 */
      var validateLength = (rule, value, callback) => {
        if (!!value && value.length > 0 ) {
          callback();
        } else {
          callback(new Error());
        }
      };
      return {
        listData: [
          {status: '', title: '这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示', bottom: ''},
          {status: '', title: '这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示', bottom: '中国·四川·成都'},
          {status: '状态', title: '这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示', bottom: ''},
          {status: '状态', title: '这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示', bottom: '中国·四川·成都'}
        ],
        listData2: [
          {status2: '2状态', title2: '2这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示', bottom2: '2中国·四川·成都'},
          {status2: '2状态', title2: '', bottom2: '2中国·四川·成都'},
          {status2: '2状态', title2: '2这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示', bottom2: '2中国·四川·成都'},
          {status2: '2状态', title2: '2这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示这是标题并且很长太多不会完全显示', bottom2: '2中国·四川·成都'}
        ],

        verificationCode: `import verificationCode from '@/VerificationCode.vue'
    ...
    components: {
      'verification-code': verificationCode
    }
    ...
    <verification-code v-model="form.number"></verification-code>`,
        formCode: {
          number: '',
          vCode: ''
        },
        formCodeRules: {
          vCode: [{ required: true, trigger: 'blur', message: '请输入验证码 !' }]
        },
        formUpload: {
          imgList: []
        },
        formUploadRules: {
          imgList: [{ required: true, validator: validateLength, trigger: 'change', message: '请添加图片 !'}]
        },
        formTags: {
          tags: [],
          tags2: []
        },
        formTagsRules: {
          tags: [{ required: true, validator: validateLength, trigger: 'blur', message: '请添加标签项 !'}],
          tags2: [{ required: true, validator: validateLength, trigger: 'blur', message: '请添加标签项 !'}]
        },
      }
    },
    mounted() {
      window.c = this
    },
    methods: {
      /**
       * 表单验证的方法, 方便进行快捷验证
       * @param  {[type]} formName [description]
       * @param  {[type]} prop     [description]
       * @return {[type]}          [description]
       */
      checkValidate(formName, prop) {
        if(prop) {
          this.$refs[formName].validateField(prop, valid => {})
        } else {
          this.$refs[formName].validate(valid => {})
        }
      },
      handleSuccess(response, file, fileList, formName) {
        this[formName].imgList = fileList
        this.checkValidate(formName)
      },
      handleRemove(file, fileList, formName) {
        debugger
        this[formName].imgList = fileList
        this.checkValidate(formName)
      },
      handleError(response, file, fileList) {
        this.$message.error('上传图片失败! 请稍后再试')
      }
    }
  }
</script>
