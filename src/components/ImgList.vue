/**
 * 附带图片背景的预览组件
 常用的图片文字展示列表 , 用在首页工作台等
 by ZooMze 2019/10/16
 参数: 
  list: Array, //列表数据
  trigger: String, // 'hover' 浮动显示(默认) 'always' 始终显示
  statusKey: String // 右上角状态所对应的字段 默认 'status'
  titleKey: String // 主要标题所对应的字段 默认 'title'
  bottomKey: String // 左下角补充信息所对应的字段 默认 'bottom'
 */
<template>
  <el-row :gutter="15" class="image-card-row">
    <el-col :span="6" v-for="(item, index) in list" :key="`${index}图片列表`">
      <el-card shadow="hover">
        <div @mouseenter="showInfo = index" @mouseleave
        ="leaveCard">
          <el-image fit="cover"  src="http://photocdn.sohu.com/20120625/Img346436473.jpg"/>
          <!-- 完整浮层内容 -->
          <transition name="slide-down">
            <div
              v-show="(showInfo == index && trigger == 'hover') || trigger == 'always'"
              class="hover-wrap mouse-class">
              <p class="top margin-b-0"><small>{{ item[statusKey] ? item[statusKey] : '&nbsp;' }}</small></p>
              <h4 class="margin-b-0">{{ item[titleKey] ? item[titleKey] : "这是默认标题" }}</h4>
              <p class="bottom"><small>{{ item[bottomKey] ? item[bottomKey] : '&nbsp;' }}</small></p>
            </div>
          </transition>
          <!-- 底部缩略标题 -->
          <transition name="slide-up">
            <div
              v-show="showInfo != index && trigger == 'hover'"
              class="brief"
              @mouseenter.stop="showInfo = index">
              <p>{{ item[titleKey] ? item[titleKey] : "这是默认标题" }}</p>
            </div>
          </transition>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script type="text/javascript">
  export default {
    props: {
      list: {
        type: Array,
        required: true
      },
      trigger: {
        type: String,
        default: 'hover'
      },
      statusKey: {
        type: String,
        default: 'status'
      },
      titleKey: {
        type: String,
        default: 'title'
      },
      bottomKey: {
        type: String,
        default: 'bottom'
      }
    },
    watch: {
      showInfo: {
        handler(newV, oldV) {
          
        }
      }
    },
    data() {
      return {
        showInfo: -1
      }
    },
    methods: {
      leaveCard () {
        this.showInfo = -1
      }
    }
  }
</script>
<style type="text/css">
  .mouse-class{
    cursor: pointer;
  }
</style>