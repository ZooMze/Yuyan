/**
 * 自定义标签编辑
 快速对el-tag 进行增删改操作 , 使用v-model回调
 by ZooMze 2019/10/15
 参数: 
  tags: Array, //tag数组
 */
<template>
  <div>
    <el-tag
      :key="tag"
      v-for="tag in tags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{ tag }}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添 加</el-button>
  </div>
</template>

<script>
  export default {
    props: {
      tags: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
        this.$emit('changed')
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.tags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style lang="less" scoped>
  .button-new-tag {
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    vertical-align: top;
  }
</style>