import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import tagsview from './modules/tagsview'
// import permission from './modules/permission'
export default createStore({
  getters,
  modules: {
    user,
    tagsview
    // permission
  }
})
