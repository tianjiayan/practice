import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    tagsView: getItem('tagsview') || []
  },
  mutations: {
    removeTagItem(state, index) {
      state.tagsView.splice(index, 1)
      setItem('tagsview', state.tagsView)
    },
    setTagsView(state, tagsView) {
      const tagsViewStatus = state.tagsView.find(item => item.path === tagsView.path)
      if (!tagsViewStatus) {
        state.tagsView.push(tagsView)
        setItem('tagsview', state.tagsView)
      }
    }
  },
  actions: {

  }
}
