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
                <el-row :gutter="15" class="image-card-row">
                  <el-col :span="6" v-for="item in 8">
                    <el-card shadow="hover">
                      <el-image fit="cover" src="http://photocdn.sohu.com/20120625/Img346436473.jpg"/>
                    </el-card>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <!-- 右侧 -->
        <el-col :span="6">
          <div class="block-wrap" v-for="item in 3">
            <p>121</p>
          </div>
        </el-col>
      </el-row>
    </el-main>

  </el-container>
</template>
<script>
  export default {
    data () {
      return {
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