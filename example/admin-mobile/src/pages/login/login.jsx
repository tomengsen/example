// 引入库
import React, { Component } from 'react';
import { InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
// 引入axios
// import axios from 'axios';
// 引入消息
import { saveUsername, login } from '../../action/login';
// 复用校验功能
import { checkUsername, checkPassword } from '../../tools/validator';

export default class Login extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}
	// 登录
	login() {
		// 对用户和密码做校验
		let { username, password } = this.state;
		// 校验用户名
		// if (!/^\w{4,10}$/.test(username)) {
		// 	alert('用户名是字母数字下划线4-10位的')
		// 	return ;
		// }
		// // 校验密码
		// if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(password)) {
		// 	alert('密码必须包含字母和数字')
		// 	return ;
		// }
		// // 密码是4-8位的
		// if (!/^.{4,8}$/.test(password)) {
		// 	alert('密码是4-8位的')
		// 	return ;
		// }
		// 开始发送请求并登录
		// console.log(this.state)
		// axios.post('/admin/login', this.state)
		// axios.post('/admin/login', { username, password })
		// 	// 监听数据返回
		// 	.then(({ data }) => {
		// 		// 如果成功。通知store。存储用户名
		// 		if (data.errno === 0) {
		// 			this.props.dispatch(saveUsername(data.data.username))
		// 		} else {
		// 			// 提示用户
		// 			alert(data.msg)
		// 		}
		// 	})

		// 发布异步消息
		// this.props.dispatch(login(username, password))

		// 校验表单
		if (
			checkUsername(username, '请正确输入用户名') && 
			checkPassword(password)
		) {
			// 发布异步消息
			this.props.dispatch(login(username, password))
		}
	}
	render() {
		return (
			<div className="app-login" style={{ paddingTop: '50px' }}>
				<WhiteSpace></WhiteSpace>
				{/*inputItem组件，onchange事件参数就是内容*/}
				<InputItem
					placeholder="请输入用户名"
					value={this.state.username}
					onChange={username => this.setState({ username })}
				>用户名</InputItem>
				<WhiteSpace></WhiteSpace>
				<InputItem
					placeholder="请输入密码"
					type="password"
					value={this.state.password}
					onChange={password => this.setState({ password })}
				>密　码</InputItem>
				<WhiteSpace></WhiteSpace>
				<WingBlank>
					<Button onClick={this.login.bind(this)} type="primary">登录</Button>
				</WingBlank>
			</div>
		)
	}
}