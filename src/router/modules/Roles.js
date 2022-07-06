import Layout from '../../views/layout'
export default {
  path: '/sys',
  name: 'sys:role:list',
  redirect: '/sys/users',
  meta: {
    title: '系统管理',
    icon: 'el-icon-s-operation'
  },
  component: Layout,
  children: [
    {
      path: '/sys/roles',
      component: () => import('../../views/roles'),
      meta: {
        title: '角色管理',
        icon: 'el-icon-rank'
      }
    }
  ]
}
