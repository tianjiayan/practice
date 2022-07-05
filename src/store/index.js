import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
// import permission from './modules/permission'
export default createStore({
  getters,
  modules: {
    user,
    // permission
  }
})
