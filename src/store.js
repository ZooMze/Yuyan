import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {},
    pagination: {
      pageSize: 15,
      pageNum: 1,
    },
    gender: [
      {
        label: '男',
        value: 1
      },
      {
        label: '女',
        value: 2
      },
      {
        label: '不限',
        value: 0
      },
    ]
  },
  mutations: {
    /**
     * 保存用户数据
     * @param {[type]} state [description]
     * @param {[type]} data  [description]
     */
    saveUserData(state, data, key) {
      state.userData = JSON.parse(data)
    },
    /**
     * 更新用户数据,按key更新
     * @param  {[type]} state [description]
     * @param  {[type]} data  [description]
     * @return {[type]}       [description]
     */
    updateUserData(state, data) {
      state.userData[data.key] = data.value
    },
    /**
     * 改变分页数据
     * @param  {[type]} state [description]
     * @param  {[type]} data  [description]
     * @return {[type]}       [description]
     */
    changePage(state, data) {
      state.pagination.pageNum = data
    },
  },
  actions: {

  }
})
