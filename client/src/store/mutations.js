import { currentRouter } from '@/router'
const mutations = {
  setPrivateRouter (state, data) {
    if (data && data.length) {
      state.privateRouter = currentRouter
    } else {
      state.privateRouter = currentRouter
    }
  },
  setUserInfo (state, data) {
    if (data) {
      state.userInfo = data
    } else {
      state.userInfo = []
    }
  }
}
export default mutations