<template>
  <el-container direction="vertical">
    <el-header>
      <el-page-header @back="goBack" title="返回" content="详情页面"></el-page-header>
    </el-header>
    <el-main>
      <div class="block-wrap">
        <h4 class="block-label">加载</h4>
        <pre>// store.js
changeStatus(state, data) {
  state[data.key] = data.value
},
</pre>
<pre>// NavLayout.vue
&lt;div class="right-area" v-loading="$store.state.loading"&gt;
</pre>
<pre>// anyPage.vue 在任意页面中调用
this.$store.commit('changeStatus', {key: 'loading', value: false})</pre>
        <p class="margin-t-15">加载详情时 , 通常会伴随较大数量的查询行为 , 所以需要添加一个 <code>loading</code> 效果</p>
        <p><code>loading</code> 效果通过 <a href="https://vuex.vuejs.org/zh/" target="_blank">Vuex</a> 全局实现</p>
        <p>全局需要将右侧内容变为loading状态时 都可调用此方法</p>
        <el-button type="primary" size="small" :loading="$store.state.loading" @click="setLoading">手动触发</el-button><small class="margin-l-15">1.5秒后自动还原</small>
      </div>
      <div class="block-wrap">
        <h4 class="block-label">详情表单</h4>
        <div class="tip-area">
          <p>
            <span>详情中的展示表单 , 除</span>
            <el-popover placement="bottom" trigger="hover">
              <div>
                <p>
                  表单项内容明确地需要占据整行时 , 可以不使用<code>&lt;el-form-item&gt;</code> 进行嵌套 , 但要加上对应的样式类 , 使其与普通表单显示一致
                </p>
                <p> 如下面的 图片 & 备注 </p>
              </div>
              <strong slot="reference" type="text"> 特殊情况 <i class="el-icon-question"></i></strong>
            </el-popover>
            <span> 外依然需要包含在 <code>&lt;el-form&gt;</code> &gt; <code>&lt;el-form-item&gt;</code> 中</span>
          </p>
        </div>
        <el-form
          class="detail-form"
          :model="detailForm"
          ref="detailForm"
          size="small"
          :inline-message="true"
          label-suffix="：">
          <el-row :gutter="15">
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" v-for="item in 11" :key="`${item}detail`">
              <el-form-item :label="`名称${item}`">
                <span>这是文本{{ item }} , 标签和内容为左对齐</span>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 折行显示的内容 -->
          <label class="form-label"> 
            <el-popover
              placement="bottom"
              trigger="hover">
              <p>
                <p>与普通的栅格表单不同的是 , 图片此处是仿造的表单项</p>
                <p>此处为 <code>&lt;label&gt;</code> 标签 , 添加 <code>class="form-label"</code> </p>
                <p>未达到图片的最佳显示效果 , 每个图片项高度为相对高度 <code>height: 20vh</code>  , 以保证在各个宽度下都有尽可能有好的图片效果</p>
                <p>响应代码 <code>:xs="12" :sm="8" :md="6" :lg="4" :xl="3"</code></p>
              </p>
              <span slot="reference">图片 <i class="el-icon-question"></i>： </span>
            </el-popover>
          </label>
          <el-row class="images-preview" :gutter="15">
            <el-col
              :xs="12" :sm="8" :md="6" :lg="4" :xl="3"
              v-for="item in srcList"
              :key="`${item}image`">
              <el-image
                :src="item"
                fit="cover"
                :preview-src-list="[item]">
              </el-image>
            </el-col>
          </el-row>
          <label class="form-label">备注：</label>
          <p class="margin-tb-0">这是备注 , 并且特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别长</p>
        </el-form>
      </div>
      <div class="block-wrap">
        <h4 class="block-label">
          卡片列表
          <el-popover
            placement="bottom"
            trigger="hover">
            <p>
              <p>此处为响应式栅格</p>
              <p>响应代码 <code>:xs="12" :sm="12" :md="12" :lg="8" :xl="6"</code></p>
              <p>卡片的高度为 <code>min-height: 150px;</code></p>
            </p>
            <span slot="reference"><i class="el-icon-question"></i></span>
          </el-popover>
        </h4>
        <pre>&lt;el-card class="card-item"&gt;
    &lt;div class="card-info"&gt; // 右侧容器 横向flex布局
      &lt;el-image/&gt; // 左侧头像图片
      &lt;div class="card-info"&gt; // 右侧容器 竖向flex布局
        ... // 主要内容
      &lt;div&gt;
    &lt;div&gt;
  &lt;/el-card&gt;</pre>
        <el-row :gutter="15">
          <el-col class="padding-t-15" :xs="12" :sm="12" :md="12" :lg="8" :xl="6" v-for="item in 8" :key="`${item}card`">
            <el-card class="card-item" shadow="never">
              <el-image fit="cover" src="http://img.bqatj.com/img/60d6a742a8433fe4.jpg"/>
              <div class="card-info">
                <p> <strong>用户001{{ item }}</strong></p>
                <p>工号 : 1212</p>
                <p>手机 : 13355554444</p>
                <el-button size="small" type="primary" icon="el-icon-edit">操作按钮</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <div class="tip-area">
          <p>卡片样式是在 <code>&lt;el-card&gt;</code> 的基础上进行的修改</p>
          <p>去掉了边框 、 圆角 、 阴影</p>
        </div>
      </div>
    </el-main>
    <el-backtop target=".router-container">
      <el-popover
        placement="top-start"
        title="回到顶部"
        width="200"
        trigger="hover">
        <div>
          <p>回到顶部组件需要放到根组件下, 并放在最后</p>
        </div>
        <i slot="reference" class="el-icon-caret-top"></i>
      </el-popover>
    </el-backtop>
  </el-container>
</template>
<script>
  export default {
    data () {
      return {
        loading: true,
        detailForm: {},
        srcList: [
          'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          'http://photocdn.sohu.com/20120625/Img346436473.jpg',
          'http://k.zol-img.com.cn/dcbbs/22000/a21999018_01000.jpg',
          'http://b-ssl.duitang.com/uploads/item/201705/04/20170504161656_HXBG4.jpeg',
          'http://pic1.win4000.com/wallpaper/6/580487e53454e.jpg',
          'http://www.33lc.com/article/UploadPic/2012-9/201291210484236557.jpg'
        ]
      }
    },
    activated () { // 由于keepAlive的特性, 需要在此处写逻辑代码
      this.$store.commit('changeStatus', {key: 'loading', value: true})
      setTimeout(_ => {
        this.$store.commit('changeStatus', {key: 'loading', value: false})
      }, 1500)
    },
    methods: {
      /**
       * 回到列表页
       * @return {[type]} [description]
       */
      goBack () {
        this.$router.push({name: 'list'})
      },
      setLoading () {
        this.$store.commit('changeStatus', {key: 'loading', value: true})
        setTimeout(_ => {
          this.$store.commit('changeStatus', {key: 'loading', value: false})
        }, 1500)
      }
    }
  }
</script>