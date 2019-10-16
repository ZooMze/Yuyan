<template>
  <el-container direction="vertical">
    <el-header>
      <h3>列表页</h3> 
    </el-header>
    
    <el-row :gutter="15">
      <el-col :span="8" v-for="item in 3" :key="`${item}count`">
        <div class="block-wrap">
          <p class="count-number text-primary">999</p>
          <p class="count-title" v-if="item == 1">
            <el-popover
              placement="top-start"
              title="计数器"
              trigger="hover">
              <div>
                <p>这是一些栅格 <code>&lt;el-col&gt;&lt;div&gt;...&lt;div&gt;&lt;el-col&gt;</code></p>
                <p>他们不处于任何布局容器之中, 他们应作为 <code>&lt;e-container&gt;</code> 下的第一子元素</p>
                <p>请确保栅格中 <code>&lt;el-col&gt;</code> 第一子元素为 <code>&lt;div&gt;</code></p>
                </div>
              <span slot="reference">计数器 <i class="el-icon-question"></i></span>
            </el-popover>
          </p>
          <p class="count-title" v-else>计数器</p>
        </div>
      </el-col>
    </el-row>
    
    <el-main>
      <div class="block-wrap">
        <pre> {{ block }} </pre>
        <el-form
          :model="searchForm"
          ref="searchForm"
          size="small"
          label-suffix="：">
          <el-row :gutter="60">
            <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="8">
              <el-form-item label="多选1" label-width="80px">
                <el-popover
                  slot="label"
                  placement="top-start"
                  trigger="hover">
                  <div>
                    <p>多选框通常会占据较长的宽度 , 所以 <code>&lt;el-col&gt;</code> 的响应式的代码有所不同</p>
                    <p>响应代码: <code>:xs="24" :sm="24" :md="24" :lg="16" :xl="8"</code></p>
                    <p>如果内容需要占据的行宽过长或很短 , 在保证其不会随意换行的前提下 , 请自行调整至最佳显示效果</p>
                    <!-- <p>他们不处于任何布局容器之中</p>
                    <p>请确保栅格中 <code>&lt;el-col&gt;</code> 第一子元素为 <code>&lt;div&gt;</code></p> -->
                    </div>
                  <span slot="reference"><i class="el-icon-question"></i> 多选1：</span>
                </el-popover>
                <el-checkbox-group v-model="searchForm.check">
                  <el-checkbox label="复选框 A"></el-checkbox>
                  <el-checkbox label="复选框 B"></el-checkbox>
                  <el-checkbox label="复选框 C"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
            <el-col :span="8" :xs="24" :sm="24" :md="24" :lg="16" :xl="8">
              <el-form-item label="多选2" label-width="80px">
                <el-checkbox-group v-model="searchForm.check2">
                  <el-checkbox label="复选框 AA"></el-checkbox>
                  <el-checkbox label="复选框 BB"></el-checkbox>
                  <el-checkbox label="复选框 CC"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="60">
            <el-col :span="8" :xs="24" :sm="24" :md="12" :lg="8" :xl="8" v-for="item in 5" :key="`${item}search`">
              <el-form-item :label="`关键字${item}`" label-width="80px">
                <el-input v-model="searchForm.keyword" placeholder="请输入关键字"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="">
                <el-button type="primary" icon="el-icon-search">搜 索</el-button>
                <el-button icon="el-icon-refresh-left">重 置</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <div class="tip-area">
          <p>搜索表单复杂度根据产品有所不同 , 为了尽量展现最好的显示效果 , 搜索表单需要做到响应式</p>
          <p>提供了一套简单泛用性较广的响应式方案 </p>
          <p>响应代码: <code>:span="8" :xs="24" :sm="24" :md="12" :lg="8" :xl="8"</code></p>
        </div>

        <el-button icon="el-icon-plus" class="margin-b-15" type="primary" size="small">添 加</el-button>
        <el-table :data="tableData">
          <el-table-column v-for="col in columns"
            :prop="col.id"
            :key="col.id"
            :label="col.label"
            :width="col.width ? col.width : ''">
          </el-table-column>
          <el-table-column label="操作" width="382" align="left">
          <template slot-scope="scope">
            <el-button type="default" size="small" icon="el-icon-more">操 作</el-button>
            <el-button type="primary" size="small" icon="el-icon-tickets" @click="$router.push({name: 'detail'})">详 情</el-button>
            <el-button type="warning" size="small" icon="el-icon-refresh-left">重 置</el-button>
            <el-button type="danger" size="small" icon="el-icon-delete">删 除</el-button>
          </template>
        </el-table-column>
        </el-table>
        <el-pagination
          class="margin-t-15"
          :current-page="$store.state.pagination.pageNum"
          :page-sizes="[20, 40, 80, 100]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100" background>
        </el-pagination>
      </div>

    </el-main>
    <el-footer>
      <p>这是页面底部 , 可以放置一些额外的内容</p>
    </el-footer>
  </el-container>
</template>
<script>
  export default {
    data () {
      return {
        block: `// 主体页面
  <el-container direction="vertical">
    <el-header>
      // 正常标题
      <h3>列表页</h3>
      // 详情中的标题
      <el-page-header @back="goBack" title="返回"content="详情页面"></el-page-header>
    </el-header>
    <el-main> // 没有样式
      <div class="block-wrap"> // 模块包裹元素 (自带paddding: 15px;)
      ...
      </div>
    </el-main>
    <el-footer>
      ...
    </el-footer>
  </el-container>`,
        searchForm: {
          keyword: '',
          check: [],
          check2: []
        },
        tableData: [
          {
            series: 'dgfh5dgfjh4sh2sfg4h56fdh',
            name: '名字',
            des: '描述'
          },
          {
            series: 'dgfh5dgfjh4sh2sfg4h56fdh',
            name: '名字2',
            des: '描述2'
          }
        ],
        columns: [
          {
            id: 'series',
            label: '序列',
            width: '200px'
          },
          {
            id: 'name',
            label: '名称',
          },
          {
            id: 'des',
            label: '描述',
          }
        ]
      }
    },
    mounted () {
      this.getRouter()
    },
    methods: {
      /**
       * 获取路由 , 保存至面包屑
       * @return {[type]} [description]
       */
      getRouter () {
        console.log(this.$route)
        this.routes = this.$route.matched
      },
      goBack () {
        
      }
    }
  }
</script>