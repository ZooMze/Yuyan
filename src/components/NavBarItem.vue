<template>
  <div v-if="item.children">
    <!-- 单独节点 -->
    <template v-if="item.children.length == 0">
      <el-menu-item v-if="!item.meta.hidden" :index="item.path">
        <i class="el-icon-menu"></i>
        {{item.routerName}}
      </el-menu-item>
    </template>
    <!-- 包含子节点 -->
    <el-submenu v-else :index="item.path">
      <!-- 子分类 -->
      <template v-if="!item.meta.hidden">
        <template slot="title" >
          <i class="el-icon-menu"></i>
          {{item.routerName}}
        </template>
        <!-- 子分类 - 子节点 -->
        <template v-for="child in item.children">
          <!-- 递归 -->
          <nav-bar-item
            v-if="child.children && child.children.length > 0"
            :item="child"
            :key="child.path"/>
            <!-- 渲染子节点 -->
          <el-menu-item v-else-if="!child.meta.hidden" :key="child.path" :index="child.path">
            <i class="el-icon-location"></i>
            {{child.routerName}}
          </el-menu-item>
        </template>
      </template>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'navBarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
