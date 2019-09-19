// 引入vue
import Vue from 'vue';
// 引入axios
import axios from 'axios';
// 引入应用程序组件
import App from './app';
// 引入store
import store from './store/store';
// 引入路由
import router from './router/router';
// 安装axios
Vue.prototype.$http = axios;


// 实例化
new Vue({
	// 注册
	store,
	router,
	// 渲染
	render: h => h(App)
// 渲染应用程序
}).$mount('#app')