// 引入vue和app
import Vue from 'vue';
import App from './app';
// 引入store
import store from './store/store';
// 引入路由
import router from './router/router';
// 引入axios
import axios from 'axios';
// 安装elementUI
import ElementUI from 'element-ui';
// 引入样式
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 安装axios
Vue.prototype.$http = axios;

// 实例化
new Vue({
	// 安装store
	store,
	// 安装路由
	router,
	// 渲染
	render: h => h(App)
// 确定渲染容器元素
}).$mount('#app')