import { publicRoutes, privateRoutes } from '../../router'
export default {
  namespaced: true,
  state: {
    routes: publicRoutes
  },
  mutations: {
    setRoutes(state, newRoutes) {
      state.routes = [...publicRoutes, ...newRoutes]
    }
  },
  actions: {
    /**
     * 根据权限筛选路由
     */
    filterRoutes({ commit }, menus) {
      // 当用户登录之后是加载所有的私有路由表还是加载他所拥有的私有表
      // menus 登录之后后台所返回的用户所有的路由权限数据
      // privateRoutes 自定义的所有私有路由表
      const routes = []
      // 过滤出用户所拥有的私有路由表
      menus.forEach((name) => {
        const data = privateRoutes.filter((item) => item.name === name)
        routes.push(...data)
      })
      commit('setRoutes', routes)
      return routes
    }
  }
}
