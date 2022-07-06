import { getItem, setItem, removeItem } from '../../utils/storage'
import { resetRouter } from '../../utils/removeRouter'
import user from '../../api/user'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: {},
    nav: ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    SET_NAV(state, nav) {
      state.nav = nav
    }
  },
  actions: {
    // login({commit} ,paylod){
    //     try{
    //         const response = await user.login(paylod)
    //         commit('setToken',response.token)
    //         return response
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    async login({ commit }, payload) {
      const response = await user.login(payload)
      return response
    },
    async getUserInfo({ commit }) {
      try {
        const response = await user.getUserInfo()
        commit('setUserInfo', response)
        return response
      } catch (err) {
        console.log(err)
      }
    },
    async getNav({ commit }) {
      const response = await user.getNav()
      commit('SET_NAV', response)
      console.log('nav', response)
      return response
    },
    logout({ commit }) {
      resetRouter(), commit('setToken', '')
      commit('setUserInfo', {})
      removeItem('token')
      removeItem('userInfo')
    }
  }
}
