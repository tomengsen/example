// 引入类库
import React, { Component } from 'react';
// 引入组件
import Header from '../components/header/header';
// 引入路由
import { Switch, Route } from 'react-router-dom';
// 引入页面
import Home from '../pages/home/home';
import Search from '../pages/search/search';
import Type from '../pages/type/type';
import './app.less';
// 应用程序组件类
export default class App extends Component {
	// 渲染
	render() {
		return (
			<div>
				<Header></Header>
				{/*1 定义路由渲染位置*/}
				<Switch>
					{/*分类*/}
					<Route path="/type/:id" component={Type}></Route>
					{/*搜索*/}
					<Route path="/search/:word" component={Search}></Route>
					{/*默认首页*/}
					<Route path="*" component={Home}></Route>
				</Switch>
			</div>
		)
	}
}