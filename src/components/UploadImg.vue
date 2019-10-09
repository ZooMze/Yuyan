<template>
    <div :class="{'upload-component': true,'hide-plus': hidePlus || beforeUHidePlus}" >
        <el-upload
                ref="upload-component"
                :multiple="false"
                list-type="picture-card"
                :action="action"
                :on-success="handleAvatarSuccess"
                :on-preview="previewAvatar"
                :on-remove="removeAvatar"
                :before-upload="handleBeforeUpload"
                :before-remove="beforeRemove"
                :file-list="showFileList"
                :name="name">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog  append-to-body :visible.sync="dialogVisible" title="图片预览">
            <img width="100%" :src="dialogUrl" alt="">
        </el-dialog>
    </div>
</template>
<script>
export default {
  name: 'UploadImg',
  props: {
    name: {
      type: String,
      default: 'img'
    },
    fileList: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => []
    },
    limit: {
      type: Number,
      default: 0
    },
    action: {
      type: String,
      default: ""
    }
  },
  computed: {
    showFileList () {
      return this.fileList.map(v => {
        return {
          name: v, url: this.$common.filePath + v
        }
      })
    },
    hidePlus () {
      return this.limit && this.uploadFileList.length >= this.limit
    }
  },
  data () {
    return {
      uploadFileList: [],
      dialogUrl: '',
      dialogVisible: false,
      beforeUHidePlus: false
    }
  },
  created () {
  },
  mounted () {
    console.log(this.action)
    this.uploadFileList = this.fileList
  },
  methods: {
    /*
          **@desc 上次成功
          **@param res 结果
          **@param file 上次成功文件
          */
    handleAvatarSuccess (res, file, fileList) {
      this.beforeUHidePlus = false
      this.uploadFileList = fileList.map(v => {
        if (v.hasOwnProperty('response')) {
          return v.response.data
        } else {
          if (v.url.indexOf(this.$common.filePath) !== -1) {
            let index = v.url.indexOf(this.$common.filePath) + this.$common.filePath.length
            return v.url.substr(index)
          } else {
            return v.url
          }
        }
      })

      this.$emit('uploadSuccess', res, file, this.uploadFileList)
    },
    /*
      **@desc 上次文件前
      **@param file 上次成功文件
      */
    handleBeforeUpload (file) {
      if (!file.type || 'image/jpeg,image/png'.indexOf(file.type) === -1) {
        this.$message.error('上传图片只支持是 JPG/PNG 格式!')
        return false
      } else {
        this.beforeUHidePlus = true
      }
    },
    /*
          **@desc 删除图片
          **@param file 上次成功文件
          */
    removeAvatar (file, fileList) {
      this.uploadFileList = fileList.map(v => {
        if (v.hasOwnProperty('response')) {
          return v.response.data
        } else {
          if (v.url.indexOf(this.$common.filePath) !== -1) {
            let index = v.url.indexOf(this.$common.filePath) + this.$common.filePath.length
            return v.url.substr(index)
          } else {
            return v.url
          }
        }
      })
      this.$emit('removeUpload', file, this.uploadFileList)
    },
    beforeRemove (file, fileList) {
    },
    /*
      **@desc 预览图片
      **@param file 上次成功文件
      */
    previewAvatar (file) {
      if (file.hasOwnProperty('response')) {
        this.dialogUrl = this.$common.filePath + file.response.data
      } else {
        this.dialogUrl = file.url
      }
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="less">
    .el-icon-close-tip{
        display: none !important;
    }
    .hide-plus div.el-upload.el-upload--picture-card:last-child {
        display: none;
    }
</style>
<style lang="less" scoped>
    .upload-component{
        width: 100%;
    }
</style>
