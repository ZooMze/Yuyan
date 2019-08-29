<template>
  <div class="default-container">
    <h2>保持 KeepAlive</h2>
    <p>用户在从列表页进入详情页后 , 再返回到列表页 , 期望的是列表页的状态和内容等都完整的保留( keepAlive ) , 本框架也约定了此功能</p>
    <p>实现方式为 <a href="https://router.vuejs.org/zh/api/#router-view">Vue Router</a> 的 <code>Keep-alive</code> , 详情请参考文档</p>
    <p>
      <el-button type="primary" size="small" @click="$router.push({name: 'keepAliveInner'})"> 进入子页面 </el-button>
    </p>
    <h3>内容保留</h3>
    <p>本例展示了 <code>Keep-alive</code> 的使用效果 , 跳转至子级页面 , 以及子级页面的导航重定向</p>
    <pre> {{ keep }} </pre>
    <p>在 <code>input</code> 输入框中输入内容后 , 点击上方按钮进入子页面 , 然后回到本页面 , 查看效果</p>
    <el-form :model="form" ref="form" label-suffix="：" class="margin-tb-15" size="small">
      <el-form-item label="输入框">
        <el-input v-model="form.input" placeholder="请输入"></el-input>
      </el-form-item>
    </el-form>

    <div class="tip-area">
      <p>尽管 <code>keep-alive</code> 可以实现保持的功能 , 但如果用户在子页面强制刷新了整个网页 , 那么 <code>keep-alive</code> 将失效</p>
    </div>

    <h3>分页保留</h3>
    <p>分页不同于普通的组件数据 , 其存放信息是在 <code> Vuex </code> 中, 本框架约定 : 在router变化时 , <code>$store.state.pagination</code> 的值将被还原为初始 , 但为了保证keepAlive时 , 分页数据不被清空 , 进行了如下限制 , 可参考 <el-button type="text" @click="">路由 Router</el-button></p>
    <pre>{{ code }}</pre>
    <p>当前是第 {{ $store.state.pagination.pageNum }} 页 , 进入子页面后再返回 , 不会被还原 , 其余情况的router变化时 , 将被还原为第 1 页</p>
    <div class="margin-tb-15">
      <el-pagination
        @current-change="pageNumChange"
        :current-page="$store.state.pagination.pageNum"
        :page-sizes="[20, 40, 80, 100]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="200" background>
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        keep: 
  `// Index.vue
  <keep-alive>
    <router-view></router-view>
  </keep-alive>`,
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
      pageNumChange(val) {
        this.$store.commit('changePage', val)
        this.$message(`当前点击了第 ${val} 页`)
      }
    }
  }
</script>