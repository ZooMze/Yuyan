import Vue from 'vue'
import Router from 'vue-router'

// 解决重复router会报错的问题
// https://www.cnblogs.com/rever/p/11577322.html
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

// 登录
const Login = () => import('./views/Login.vue')


// Intro
const intro = () => import('./views/intro/Index.vue')
// Basic
const basicIndex = () => import('./views/basic/Index.vue')
const typography = () => import('./views/basic/Typography.vue')
const color      = () => import('./views/basic/Color.vue')
const button     = () => import('./views/basic/Button.vue')
const layout     = () => import('./views/basic/Layout.vue')
const classes    = () => import('./views/basic/Classes.vue')

// Table
const table = () => import('./views/table/Index.vue')

// Form
const form = () => import('./views/form/Index.vue')

// Ability
const abilityIndex   = () => import('./views/ability/Index.vue')
const keepAlive      = () => import('./views/ability/KeepAlive.vue')
const keepAliveInner = () => import('./views/ability/KeepAliveInner.vue')
const authority      = () => import('./views/ability/Authority.vue')
const globalData     = () => import('./views/ability/GlobalData.vue')

// Components
const components = () => import('./views/components/Index.vue')

// Example
const exampleIndex = () => import('./views/example/Index.vue')
const list         = () => import('./views/example/List.vue')
const detail       = () => import('./views/example/Detail.vue')
const charts       = () => import('./views/example/Charts.vue')
const dashboard    = () => import('./views/example/Dashboard.vue')

// Responsive
const responsive = () => import('./views/responsive/Index.vue')

// 商城
// -- 订单管理
// const menuExampleIndex = () => import('./views/menuExample/Index.vue')
// const functionMain     = () => import('./views/menuExample/FunctionMain.vue')
// const functionFolder   = () => import('./views/menuExample/functionFolder/Index.vue')
// const function1        = () => import('./views/menuExample/functionFolder/Function1.vue')
// const function2        = () => import('./views/menuExample/functionFolder/Function2.vue')
// const functionFolder2  = () => import('./views/menuExample/functionFolder/functionFolder2/Index.vue')
// const function3        = () => import('./views/menuExample/functionFolder/functionFolder2/Function3.vue')
// const function4        = () => import('./views/menuExample/functionFolder/functionFolder2/Function4.vue')


Vue.use(Router)

// router配置说明
// 含有children的路由 需要配置一个Index.vue 用于加载子页面
// name               路由元名
// meta               附带属性
// meta.routerName    路由显示的名称
// meta.showNavLayout 当前页是否需要渲染导航
// meta.hidden        当前页是否要在导航中隐藏(详情页需要隐藏)
// meta.redirectName  在导航中隐藏的页面重新定位导航的名称(详情页需要配置此参数, 否则导航不会重新定位)
// meta.detail        标明当前页面是属于详情页 , 顶部的返回按钮将会显示

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        // 通过 to.hash 的值來找到对应的元素
        selector: to.hash
      }
    }
  },
  routes: [
    {
      path: '/intro',
      name: 'intro',
      component: intro,
      meta: {
        routerName: '引言 Intro',
        icon: 'el-icon-guide',
        showNavLayout: true
      },
      children: []
    },
    {
      path: '/responsive',
      name: 'responsive',
      component: responsive,
      meta: {
        routerName: '响应式 Responsive',
        icon: 'el-icon-rank',
        showResponsiveLayout: true,
      },
      children: []
    },
    {
      path: '/basic',
      name: 'basic',
      component: basicIndex,
      meta: {
        routerName: '基本 Basic',
        icon: 'el-icon-view',
        showNavLayout: true
      },
      children: [
        {
          path: 'layout',
          name: 'layout',
          component: layout,
          meta: {
            routerName: '布局 Layout',
            showNavLayout: true,
          }
        },
        {
          path: 'typography',
          name: 'typography',
          component: typography,
          meta: {
            routerName: '字体 Typography',
            showNavLayout: true,
          }
        },
        {
          path: 'color',
          name: 'color',
          component: color,
          meta: {
            routerName: '色彩 Color',
            showNavLayout: true,
          }
        },
        {
          path: 'button',
          name: 'button',
          component: button,
          meta: {
            routerName: '按钮 Button',
            showNavLayout: true,
          }
        },
        {
          path: 'classes',
          name: 'classes',
          component: classes,
          meta: {
            routerName: '预制类 Classes',
            showNavLayout: true,
          }
        },
      ]
    },
    {
      path: '/table',
      name: 'table',
      component: table,
      meta: {
        routerName: '表格 Table',
        icon: 'el-icon-notebook-2',
        showNavLayout: true
      },
      children: []
    },
    {
      path: '/form',
      name: 'form',
      component: form,
      meta: {
        routerName: '表单 Form',
        icon: 'el-icon-document-copy',
        showNavLayout: true
      },
      children: []
    },
    {
      path: '/ability',
      name: 'ability',
      component: abilityIndex,
      redirect: { name: 'keepAlive' },
      meta: {
        routerName: '功能 Ability',
        icon: 'el-icon-files',
        showNavLayout: true
      },
      children: [
        {
          path: 'keepAlive',
          name: 'keepAlive',
          component: keepAlive,
          meta: {
            routerName: '保持 keepAlive',
            keepAlive: true,
            showNavLayout: true
          },
        },
        {
          path: 'keepAliveInner',
          name: 'keepAliveInner',
          component: keepAliveInner,
          meta: {
            hidden: true,
            keepAlive: true,
            showNavLayout: true,
            redirectName:  'keepAlive',
            detail: true,
          },
        },
        {
          path: 'authority',
          name: 'authority',
          component: authority,
          meta: {
            routerName: '权限 Authority',
            showNavLayout: true,
          },
        },
        {
          path: 'globalData',
          name: 'globalData',
          component: globalData,
          meta: {
            routerName: '全局 GlobalData',
            showNavLayout: true,
          },
        }
      ]
    },
    {
      path: '/components',
      name: 'components',
      component: components,
      meta: {
        routerName: '组件 Components',
        icon: 'el-icon-box',
        showNavLayout: true
      },
      children: []
    },
    {
      path: '/example',
      name: 'example',
      component: exampleIndex,
      redirect: {name : 'list'},
      meta: {
        routerName: '实例 Example',
        icon: 'el-icon-star-off',
        showNavLayout: true
      },
      children: [
        {
          path: 'list',
          name: 'list',
          component: list,
          meta: {
            routerName: '列表页 List',
            keepAlive: true,
            showNavLayout: true
          },
        },
        {
          path: 'detail',
          name: 'detail',
          component: detail,
          meta: {
            hidden: true,
            showNavLayout: true,
            redirectName:  'list',
            keepAlive: true,
            detail: true,
          },
        },
        {
          path: 'charts',
          name: 'charts',
          component: charts,
          meta: {
            routerName: '图表页 Charts',
            showNavLayout: true,
          },
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: dashboard,
          meta: {
            routerName: '工作台 Dashboard',
            showNavLayout: true,
          },
        },
      ]
    },
    // {
    //   path: '/menuExapmle',
    //   name: 'meunExample',
    //   routerName: '功能列表',
    //   component: menuExampleIndex,
    //   meta: {
    //     showNavLayout: true
    //   },
    //   children: [
    //     {
    //       path: 'functionMain',
    //       name: 'functionMain',
    //       routerName: '功能一',
    //       component: functionMain,
    //       meta: {
    //         showNavLayout: true,
    //       }
    //     },
    //     {
    //       path: 'functionFolder',
    //       name: 'functionFolder',
    //       redirect: '/menuExapmle/functionFolder/function2',
    //       routerName: '功能分类',
    //       component: functionFolder,
    //       meta: {
    //         showNavLayout: true
    //       },
    //       children: [
    //         {
    //           path: 'function1',
    //           name: 'function1',
    //           routerName: '功能一(详情)',
    //           component: function1,
    //           meta: {
    //             showNavLayout: true,
    //             hidden:        true,
    //             redirectName:  'function2'
    //           }
    //         },
    //         {
    //           path: 'function2',
    //           name: 'function2',
    //           routerName: '功能二',
    //           component: function2,
    //           meta: {
    //             showNavLayout: true
    //           }
    //         },
    //         {
    //           path: 'functionFolder2',
    //           name: 'functionFolder2',
    //           routerName: '功能分类2',
    //           component: functionFolder2,
    //           meta: {
    //             showNavLayout: true
    //           },
    //           children: [
    //             {
    //               path: 'function3',
    //               name: 'function3',
    //               routerName: '树结构示例',
    //               component: function3,
    //               meta: {
    //                 showNavLayout: true
    //               }
    //             },
    //             {
    //               path: 'function4',
    //               name: 'function4',
    //               routerName: '功能四',
    //               component: function4,
    //               meta: {
    //                 showNavLayout: true,
    //               }
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //   ]
    // },
    
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        routerName: "登录页",
        showNavLayout: false
      }
    },
    {
      path: "",
      redirect: "/intro",
      meta: {
        routerName: "重定向router",
        showNavLayout: false
      },
    },
  ]
})
