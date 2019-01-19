/*
 * @Author: 王亮
 * @Date: 2019-01-16 21:00:54
 * @LastEditors: 王亮
 * @LastEditTime: 2019-01-19 11:56:54
 * @Description: 状态池配置管理
 */

export default{
  // 状态值管理
  state: {
    // 用户登录token
    token: null
  },
  // 处理函数
  mutations: {
    setToken (state, dat) {
      // 注入token
      state.token = dat
    }
  },
  // 触发函数
  actions: {
    // 注入登录touken
    setToken ({commit}, dat) {
      commit('setToken', dat)
    }
  },
  // 返回函数
  getters: {
    // 返回登录token
    getToken (state) {
      return state.token
    }
  }
}
