<template >
  <div id="login">
    
      <div class="main-area">
        <div>&nbsp;</div>
        <transition name="el-zoom-in-center">
          <h1 v-show="timePass > 500" class="align-center">与燕科技前端通用框架 v1.2</h1>
        </transition>
        <transition name="el-zoom-in-center">
          <h2 v-show="timePass > 1000" class="align-center">by Zoomze</h2>
        </transition>
      </div>

      <transition name="el-zoom-in-bottom">
        <div class="align-center" v-show="timePass > 2000">
          <el-button type="primary" @click="submitLogin" size="large">立即体验</el-button>
         </div>
      </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        timePass: 0,
        loginForm: {
          user_name: "admin",
          password: null,
        },
        rules2: {
          account: [
            { required: true, message: "请输入账号", trigger: "blur" }
          ],
          checkPass: [
            { required: true, message: "请输入密码", trigger: "blur" }
          ]
        },
        checked: true
      };
    },
    mounted() {
      setInterval(_ => {
        this.timePass += 100
      }, 100)
    },
    methods: {
       handleReset2() {
         this.$refs.loginForm.resetFields();
         console.log(this.$refs.loginForm.resetFields);
       },
       /**
        * 登录
        * @return {[type]} [description]
        */
       submitLogin() {
        var self = this;
        // let config = {
        //   method: "post",
        //   data: this.loginForm,
        //   url: `${this.$common.basePath}/admin/admin/adminLogin`
        // }
        this.loading = true
        // self.$axios(config).then(response => {
          //保存相关信息至session并设置请求头
          // self.$store.commit('saveUserData', JSON.stringify(response.data))
          // sessionStorage.setItem("user", JSON.stringify(response.data))
          // sessionStorage.setItem("userId", response.data.user_id)
          // sessionStorage.setItem("token", response.data.token)
          // self.$axios.defaults.headers.common['token'] = response.data.token;
          self.$router.push({name: "intro"})
        // }).catch(error => {
        //   self.$message.error(error.msg)
        //   self.loading = false
        // })
      },
    }
  };
</script>

<style lang="less">
  #login {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: url('../assets/imgs/logo.png') no-repeat center;
  }
</style>