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
    
    <h3>上传</h3>
    <p>直接定义一套完整的图片上传内容, 同时可以实现同页面下多个上传组件已最少的代码行数进行工作</p>
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

    <h3>标签编辑</h3>

  </div>
</template>

<script>
  import uploadImg from '@/UploadImg.vue'
  import verificationCode from '@/VerificationCode.vue'
  export default {
    components: {
      'verification-code': verificationCode,
      'upload-img': uploadImg
    },
    mounted() {
      window.c = this
    },
    data () {
      var validateLength = (rule, value, callback) => {
        if (!!value && value.length > 0 ) {
          callback();
        } else {
          callback(new Error('请上传照片'));
        }
      };
      return {
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
          vCode: [{ required: true, trigger: 'blur', message: '请输入验证码!' }]
        },
        formUpload: {
          imgList: []
        },
        formUploadRules: {
          imgList: [{ validator: validateLength, trigger: 'change'}]
        },
      }
    },
    methods: {
      checkValidate(formName) {
        this.$refs[formName].validate(valid => {
          console.log(valid)
        })
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
