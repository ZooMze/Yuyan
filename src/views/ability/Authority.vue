<template>
  <div class="default-container">
    <h2>权限 Authority</h2>
    <p>后台管理系统常伴随着大量权限以及角色信息 , 本框架提供了最快捷的菜单级权限控制</p>
    <p>依托于后台保存的权限数组信息, 在页面上渲染对应的菜单项</p>
    <p>在 <code>router.js</code> 中为每一项导航配置对应的权限ID</p>

    <h3>功能实现</h3>
    <p>导航依托于自定义组件 <code>Navbar</code> 和 <code>NavBarItem</code> 进行渲染</p>
    <pre> {{ router }} </pre>

    <pre> {{ navBarItem }} </pre>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        router: `// router.js
...
{
  path: 'layout',
  name: 'layout',
  component: layout,
  meta: {
    routerName: '布局 Layout',
    showNavLayout: true,
    id: 666
  }
},
...`,
        navBarItem: 
`// NavBarItem.vue
<el-menu-item v-else-if="!child.meta.hidden && checkAuthority(child.meta.id)" :key="child.path" :index="child.path">
  {{child.routerName}}
</el-menu-item>
...
/**
 * 根据当前id 检查权限 决定是否显示导航
 * @param  {number} id 当前导航的权限id
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