import Layout from '../../views/layout'
export default {
  path: '/tool',
  name: 'sys:dict:list',
  redirect: '/tool/dicts',
  meta: {
    title: '系统工具',
    icon: 'el-icon-s-operation'
  },
  component: Layout,
  children: [
    {
      path: '/tool/dicts',
      component: () => import('../../views/dicts'),
      meta: {
        title: '字典管理',
        icon: 'el-icon-s-order'
      }
    }
  ]
}
