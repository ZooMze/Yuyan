import Vue from 'vue'
import Router from 'vue-router'

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


// 商城
// -- 订单管理
const menuExampleIndex = () => import('./views/menuExample/Index.vue')
const functionMain     = () => import('./views/menuExample/FunctionMain.vue')
const functionFolder   = () => import('./views/menuExample/functionFolder/Index.vue')
const function1        = () => import('./views/menuExample/functionFolder/Function1.vue')
const function2        = () => import('./views/menuExample/functionFolder/Function2.vue')
const functionFolder2  = () => import('./views/menuExample/functionFolder/functionFolder2/Index.vue')
const function3        = () => import('./views/menuExample/functionFolder/functionFolder2/Function3.vue')
const function4        = () => import('./views/menuExample/functionFolder/functionFolder2/Function4.vue')


Vue.use(Router)

// router配置说明
// 含有children的路由 需要配置一个Index.vue 用于加载子页面
// name               路由元名
// meta               附带属性
// meta.routerName    路由显示的名称
// meta.showNavLayout 当前页是否需要渲染导航
// meta.hidden        当前页是否要在导航中隐藏(详情页需要隐藏)
// meta.redirectName  在导航中隐藏的页面重新定位导航的名称(详情页需要配置此参数, 否则导航不会重新定位)

export default new Router({
  mode: "history",
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
      meta: {
        routerName: '功能 Ability',
        icon: 'el-icon-files',
        showNavLayout: true
      },
      children: [
        {
          path: '/keepAlive',
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
            showNavLayout: true,
            redirectName:  'keepAlive'
          },
        }
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
      routerName: "登录页",
      component: Login,
      meta: {
        showNavLayout: false
      }
    },
    {
      path: "",
      redirect: "/intro",
      routerName: "重定向router",
      meta: {
        showNavLayout: false
      },
    },
  ]
})
