import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Layout from '../views/layout'
//公有路由表
export const publicRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]
//私有路由表
export const privateRoutes = [
  {
    path: '',
    // component: Layout,
    meta: { title: '系统管理' },
    children: [
      {
        path: 'sys/users',
        // name:'users',
        component: () => import('../views/users'),
        meta: { title: '用户管理' }
      },
      {
        path: 'sys/roles',
        // name:'users',
        component: () => import('../views/roles'),
        meta: { title: '角色管理' }
      },
      {
        path: 'sys/menus',
        // name:'users',
        component: () => import('../views/menus'),
        meta: { title: '菜单管理' }
      }
    ]
  },
  {
    path: '',
    meta: { title: '系统工具' },
    children: [
      {
        path: 'sys/dicts',
        name: 'sys:dict:list',
        component: () => import('../views/dicts')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
