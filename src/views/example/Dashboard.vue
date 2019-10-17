<template>
  <el-container direction="vertical">
    <el-header>
      <h3>工作台 Dashboard</h3> 
    </el-header>
    <el-main>
      <el-row :gutter="15">
        <!-- 左侧 -->
        <el-col :span="18">
          <el-row :gutter="15">
            <el-col :span="4" v-for="item in 10">
              <div class="block-wrap">
                <p class="count-number text-primary">{{ parseInt(Math.random(100) * 100000) }}</p>
                <p class="count-title">计数器</p>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="block-wrap">
                <h4>相关信息</h4>
                <img-list :list="listData" trigger="hover"></img-list>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="block-wrap">
                <h4>相关信息2</h4>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <!-- 右侧 -->
        <el-col :span="6">
          <div class="block-wrap">
            <weather></weather>
          </div>
        </el-col>
      </el-row>
    </el-main>

  </el-container>
</template>
<script>
  import imgList from '@/ImgList.vue'
  import weather from '@/Weather.vue'
  export default {
    components: {
      'img-list': imgList,
      'weather': weather
    },
    data () {
      return {
        listData: [{name: '名称'},{name: '名称'},{name: '名称'},{name: '名称'},{name: '名称'},{name: '名称'},{name: '名称'}],
      }
    },
    mounted () {
      
    },
    methods: {
    }
  }
</script>
<style lang="less" scoped>

</style>