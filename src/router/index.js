import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../views/layout'
//公有路由表
export const publicRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/layout'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index/index.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/users',
        // name:'users',
        component: () => import('../views/users'),
        meta: { title: '用户管理', icon: 'el-icon-s-custom' }
      },
      {
        path: '/roles',
        // name:'users',
        component: () => import('../views/roles'),
        meta: { title: '角色管理', icon: 'el-icon-rank' }
      },
      {
        path: '/menus',
        // name:'users',
        component: () => import('../views/menus'),
        meta: { title: '菜单管理', icon: 'el-icon-menu' }
      },
      {
        path: '',
        meta: { title: '系统工具', icon: 'el-icon-s-tools' },
        name: 'sys:tools',
        component: null,
        children: [
          {
            path: '/dicts',
            name: 'sys:dict:list',
            component: () => import('../views/dicts'),
            meta: { title: '数字字典' }
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]
//私有路由表
// export const privateRoutes = [
// {
//   path: '',
//   component: layout,
//   meta: { title: '系统管理', icon: 'el-icon-s-operation' },
//   children: [
//     {
//       path: 'sys/users',
//       // name:'users',
//       component: () => import('../views/users'),
//       meta: { title: '用户管理', icon: 'el-icon-s-custom' }
//     },
//     {
//       path: 'sys/roles',
//       // name:'users',
//       component: () => import('../views/roles'),
//       meta: { title: '角色管理', icon: 'el-icon-rank' }
//     },
//     {
//       path: 'sys/menus',
//       // name:'users',
//       component: () => import('../views/menus'),
//       meta: { title: '菜单管理', icon: 'el-icon-menu' }
//     }
//   ]
// },
// {
//   path: '',
//   meta: { title: '系统工具', icon: 'el-icon-s-tools' },
//   name: 'sys:tools',
//   component: null,
//   children: [
//     {
//       path: 'sys/dicts',
//       name: 'sys:dict:list',
//       component: () => import('../views/dicts'),
//       meta: { title: '数字字典' }
//     }
//   ]
// }
// ]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
