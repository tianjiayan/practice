import Layout from '../../views/layout'
export default {
  path: '/sys',
  name: 'sys:user:list',
  redirect: '/sys/users',
  meta: {
    title: '系统管理',
    icon: 'avatar'
  },
  component: Layout,
  children: [
    {
      path: '/sys/users',
      component: () => import('../../views/users'),
      meta: {
        title: '用户管理',
        icon: 'el-icon-s-custom'
      }
    }
  ]
}
