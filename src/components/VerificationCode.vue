/**
 * 自定义发送验证码组件 
 在父组件调用语法糖v-model 子组件中同样使用 并抛出事件 达到v-model的目的
 by ZooMze 2019/10/15
 参数: 
  url: String, //发送验证码的URL
 */
<template>
  <div>
    <el-input type="text" v-model="inputValue" placeholder="请输入内容获取验证码">
      <el-button
      slot="append"
      type="default"
      icon="el-icon-message"
      @click="sendVerificationMsg"
      :disabled="!inputValue || (timeRest < 5 && timeRest > 0)">{{ text }}</el-button>
    </el-input>
  </div>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        defaul: '',
      }
    },
    data () {
      return {
        inputValue: '',
        text: '获取验证码',
        loading: false,

        clock: null, //定时器
        timeRest: 5, //时间
      }
    },
    watch: {
      'inputValue': {
        handler(n, o) {
          this.$nextTick(_ => {
            this.$emit('input', n) //实现v-model的核心
          })
        },
        deep: true
      },
      'timeRest': {
        handler(n, o) {
          if(n > 0 && n < 5) { //已进入倒计时
            this.text = `${this.timeRest}秒后重新获取`
          } else {
            this.text = `获取验证码`
          }
        },
        deep: true
      }
    },
    mounted() {
      window.c = this
    },
    methods: {
      /**
       * 发送验证码请求, 验证新手机与旧手机使用同一个接口
       * @return {[type]} [description]
       */
      sendVerificationMsg() {
        this.$message.success(`以 ${this.inputValue} 作为凭据获取验证码!`)
        this.countdown()
        // let config = {
        //   method: "post",
        //   data: {
        //     tel: inputValue,
        //     userid: sessionStorage.getItem("userId") 
        //   },
        //   url: `${this.$common.basePath}/admin/admin/codeMsg`
        // }
        // this.$refs[formName].validateField('tel', valid => {
        //   if(!valid) {
        //     this.countdown()
        //     this.$axios(config).then(response => {
        //       this.$message.success(response.msg)
        //     }).catch(error => {
        //       this.$message.error(error.msg)
        //     })
        //   }
        // })
      },
      /**
       * 倒计时 同时禁用获取按钮(0秒时不显示 意味着最后一秒时按钮已经取消禁用了, 但计时仍在继续)
       * @return {[type]} [description]
       */
      countdown() {
        let self = this
        
        self.clearClock()
        self.timeRest = 5
        self.clock = setInterval(_ => {
          if (self.timeRest > 0) {
            self.timeRest -= 1
          } else {
            clearInterval(self.clock)
          }
        }, 1000)
      },
      /**
       * 还原定时器为初始状态
       * @return {[type]} [description]
       */
      clearClock() {
        if(this.clock) {
          clearInterval(this.clock)
        }
        this.clock    = null
        this.timeRest = 5
      },
    }
  }
</script>

<style lang="less" scoped>
  
</style>