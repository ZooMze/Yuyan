<template>
  <div class="default-container">
    <h2>全局 GlobalData</h2>
    <p>在本框架中 , 为了方便快捷调用以及全局访问高频内容 , 将若干内容注册到了Vue全局实例下</p>
    <p>你可以在任意组件内访问 <code>$*Name*</code></p>
    <h3>$common</h3>
    <p>全局的基本变量（区别于 <a href="https://vuex.vuejs.org/zh/" target="_blank">Vuex</a> ）和方法函数</p>
    
    <p>具体包含的内容请至 <code>src/plugins/common.js</code> 中查看 , 此处不再赘述</p>
    <el-button type="primary" @click="request">测试请求</el-button>
    <div class="warning-area">
      <p>请勿修改 <code>$common</code> 内的数据和重定义方法 , 尽管他们是可以被重定义的</p>
    </div>

    <h3>$axios</h3>
    <p>全局的XHRequest , 并注册了(请求/响应)拦截器</p>
    <p>使用方式与自行引入axios无异 , 更多文档请查阅 <a href="http://www.axios-js.com/zh-cn/docs/">axios</a></p>

    <h3>$echarts</h3>
    <p>全局快速生成图表内容的方法函数</p>
    <p>点击这里预览 <i class="el-icon-right margin-r-15"></i><el-button type="text" @click="$router.push({name: 'charts'})" size="small">图表 Charts</el-button></p>

    <h3>$md5</h3>
    <p>全局快速生成加密字符串</p>
    <el-input v-model.trim="text" placeholder="输入字符进行加密">
      <el-button slot="append" type="primary" @click="getMd5" icon
      ="el-icon-search">获取当前的md5</el-button>
    </el-input>
    <p class="margin-t-15">生成的md5为 : <strong>{{ md5 }}</strong></p>
    
    <h3>参与开发</h3>
    <p>开发者可以自行创建公用 <code>.js</code> , 命名规则不同于vue组件 , 采用驼峰命名法则</p>
    <p>注册至全局时 , 变量名前需要加上 <code>$</code> 符号</p>
    <p><code>.js</code> 需要统一放在 <code>src/plugins</code> 目录下</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        text: '',
        md5: '',
        navBarItem: 
`// NavBarItem.vue
<el-menu-item v-else-if="!child.meta.hidden && checkAuthority(child.meta.id)" :key="child.path" :index="child.path">
  {{child.routerName}}
</el-menu-item>
...
/**
 * 根据当前id 检查权限 决定是否显示导航(二级导航需要检查当前的显示模式)
 * @param  {[type]} id [description]
 * @return 
 */
checkAuthority(id) {
  let type, flag = false
  if(!id) { // 未传id 则返回false
    type = true
  }
  let array = sessionStorage.getItem('extra').split(',').map(item => {
    return parseInt(item)
  })
  try {
    array.forEach(item => {
      if(item == id) {
        flag = true
        throw new Error('找到了')
      }
    })
  } catch (error) {}
  return (type || flag)
},
...`,
        code: 
  `// App.vue
  watch: {
    "$route": {
      handler (to, from) {
        // 在导航跳转时还原分页
        if(to.meta.routerName && from.meta.routerName) {
          this.$store.commit('changePage', 1)
        }
      }
    }
  }`,
        form: {
          input: ''
        }
      }
    },
    mounted() {
      console.log(this.$store.state.pagination.pageNum)
    },
    methods: {
      request() {
        let config = {
          url: 'meeting/admin_login/adminLogin'
        }
        this.$axios(config).then(res => {
          this.$message.success(res.msg)
        }).catch(err => {
          this.$message.error(err.msg)
        })
      },
      pageNumChange(val) {
        this.$store.commit('changePage', val)
        this.$message(`当前点击了第 ${val} 页`)
      },
      getMd5 () {
        if(!this.text) {
          this.$message.error("请输入内容哦~")
          this.md5 = ''
        } else {
          this.md5 = this.$md5(this.text)
        }
      }
    }
  }
</script>