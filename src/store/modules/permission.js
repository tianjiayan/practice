import { publicRoutes, privateRoutes } from '../../router'
export default {
  namespaced: true,
  state: {
    routes: publicRoutes
  },
  mutations: {
    SET_ROUTES(state, routes) {
      state.routes = [...publicRoutes, ...routes]
    }
  },
  actions: {
    filterRoutes({ commit }, menus) {
      // 过滤出用户所有的私有路由表
      const routes = []
      menus.forEach((name) => {
        const data = privateRoutes.filter((item) => item.name === name)
        routes.push(...data)
      }),
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      commit('SET_ROUTES', routes)
      return routes
    }
  }
}
