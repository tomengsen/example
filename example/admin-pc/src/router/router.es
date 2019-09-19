// 引入库
import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入页面组件
import LessonCreate from '../pages/lesson/create';
import LessonList from '../pages/lesson/list';
import LessonEdit from '../pages/lesson/edit';
import UserCreate from '../pages/user/create';
import UserList from '../pages/user/list';
import UserEdit from '../pages/user/edit';
import Main from '../pages/main';
import Home from '../pages/home';

// 安装
Vue.use(VueRouter);

// 定义路由规则
let routes = [
	// home页面包含子路由
	{ 
		path: '/', 
		component: Home, 
		children: [
			// 课程
			{ path: 'lesson/create', component: LessonCreate },			
			{ path: 'lesson/list/:page', component: LessonList },			
			{ path: 'lesson/edit/:id', component: LessonEdit },		
			// 用户 
			{ path: 'user/create', component: UserCreate },			
			{ path: 'user/list/:page', component: UserList },			
			{ path: 'user/edit/:id', component: UserEdit },	
			// 已经是默认路由 
			{ path: '*', component: Main }
		] 
	}
	// 默认路由
	// ,{ path: '*', redirect: '/' }
]

// 实例化路由
export default new VueRouter({ routes })

