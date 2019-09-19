// 引入库
import React, { Component } from 'react';
// 使用ui
import { Button } from 'antd-mobile'
// 引入页面组件
import Home from '../pages/home';
import Login from '../pages/login/login';
// 用户名本质上应该存储在store中，
// let username = 'YYQH'
let username = ''
// 定义组件
export default class App extends Component {
	render() {
		// 解构数据
		let { dispatch, state, history } = this.props;
		// console.log(this.props)
		// 如果有用户名
		if (state.login.username) {
			return <Home state={state} history={history}></Home>
		} else {
			// 需要登录
			return <Login dispatch={dispatch}></Login>
		}
	}
}
