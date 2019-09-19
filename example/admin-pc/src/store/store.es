// 引入库
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
// 安装
Vue.use(Vuex);

// 实例化
export default new Store({
	// 数据
	state: {
		username: ''
		// username: 'YYQH'
	},
	// 同步消息
	mutations: {
		// 修改用户名消息
		login(state, username) {
			// 修改用户名
			state.username = username;
		}
	}
})