// 安装路由
import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入组件
import Home from '../pages/home';
import Search from '../pages/search';
import Buy from '../pages/buy';
// 安装
Vue.use(VueRouter);

// 定义规则
let routes = [
	{ path: '/', component: Home },
	{ path: '/type/:id', component: Home },
	{ path: '/search/:word', component: Search },
	{ path: '/buy', component: Buy },
	// 默认路由
	{ path: '*', redirect: '/' }
]
// 实例化路由
export default new VueRouter({ routes })