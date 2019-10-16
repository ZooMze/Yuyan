<template>
  <div>
    <el-upload
      :action="action"
      :file-list="fileList"
      list-type="picture-card"
      :on-success="handleSuccess"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
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
      default: _ =>[]
    },
    limit: {
      type: Number,
      default: 0
    },
    action: {
      type: String,
      required: true,
    }
  },
  computed: {
  },
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    handleSuccess(response, file, fileList) {
      this.$emit('change', fileList)
      console.log(file, fileList);
    },
    handleRemove(file, fileList) {
      
      this.fileList = fileList
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
}
</script>
<style lang="less">
    // .el-icon-close-tip{
    //     display: none !important;
    // }
    // .hide-plus div.el-upload.el-upload--picture-card:last-child {
    //     display: none;
    // }
</style>
<style lang="less" scoped>
    // .upload-component{
    //     width: 100%;
    // }
</style>
