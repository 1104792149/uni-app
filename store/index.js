import Vue from 'vue'
import Vuex from 'vuex'
//import api from '@/js/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentUser: null,
		nickname:'123'
  },
	//同步处理
  mutations: {
		setNickname(state,accumu){
			state.nickname=accumu;
		},
		 updateCurrentUser (state, user) {
		  state.currentUser = user;
		},
  },
 //异步处理
  actions: {
    updateCurrentUserInfo ({ commit }) {
      const userId = uni.getStorageSync('userId');
      if (userId) {
        return api.getUserInfor(userId).then(result => {
          const user = result.userMap;
          commit('updateCurrentUser', user);
        }).catch(error => {
          // TODO: 请求失败处理
        })
      }
    },
    
  },

})

export default store
