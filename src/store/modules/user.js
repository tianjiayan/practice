import { getItem, setItem, removeItem } from '../../utils/storage'
import user from '../../api/user'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
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

    async getUserInfo({ commit }) {
      try {
        const response = await user.getUserInfo()
        commit('setUserInfo', response)
        return response
      } catch (err) {
        console.log(err)
      }
    },
    logout({ commit }) {
      // resetRouter(), commit('setToken', '')
      commit('setUserInfo', {})
      removeItem('token')
      removeItem('userInfo')
    }
  }
}
