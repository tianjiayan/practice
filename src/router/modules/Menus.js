import Layout from '../../views/layout'
export default {
  path: '/sys',
  name: 'sys:menu:list',
  redirect: '/sys/users',
  meta: {
    title: '系统管理',
    icon: 'el-icon-s-operation'
  },
  component: Layout,
  children: [
    {
      path: '/sys/menus',
      component: () => import('../../views/menus'),
      meta: {
        title: '菜单管理',
        icon: 'el-icon-menu'
      }
    }
  ]
}
