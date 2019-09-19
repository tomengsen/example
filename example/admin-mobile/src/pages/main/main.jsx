// 引入库
import React, { Component } from 'react';
// 引入UI
import { InputItem, WhiteSpace, Button } from 'antd-mobile';
// 引入校验的字段
import { checkUsername, checkPassword, checkPasswordAgain } from '../../tools/validator';
// 引入axios
import axios from 'axios';

// 定义组件
export default class Main extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			username: '',
			password: '',
			passwordAgain: '',
		}
	}
	// 更新管理员信息的方法
	updateManager() {
		// 解构数据
		let { username, password, passwordAgain } = this.state;
		// 如果请求返回，不需要修改store中的数据，我们没有必要发送异步消息
		// 发送请求之前，校验数据是否正确
		if (
			checkUsername(username) &&
			checkPassword(password) && 
			checkPasswordAgain(password, passwordAgain)
		) {
			// 校验通过。发送请求
			axios.post('/admin/manager/update', { username, password })
				// 监听返回
				.then(({ data }) => {
					// 返回成功，刷新页面
					if (data.errno === 0) {
						location.reload();
					} else {
						// 提示用户
						alert(data.msg)
					}
				})
		}
	}
	render() {
		// 解构
		let { username, password, passwordAgain } = this.state;
		return (
			<div className="app-main">
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<InputItem
					placeholder="请输入用户名"
					value={username}
					onChange={username => this.setState({ username })}
				>用户名</InputItem>
				<WhiteSpace></WhiteSpace>
				<InputItem
					placeholder="请输入密码"
					value={password}
					onChange={password => this.setState({ password })}
				>密码</InputItem>
				<WhiteSpace></WhiteSpace>
				<InputItem
					placeholder="请重复输入密码"
					value={passwordAgain}
					onChange={passwordAgain => this.setState({ passwordAgain })}
				>重复密码</InputItem>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<Button type="primary" onClick={e => this.updateManager()}>提交</Button>
			</div>
		)
	}
}