// 引入常量
import { LOGIN } from '../consts/login';
// 引入axios
import axios from 'axios';

// 存储用户名消息
export let saveUsername = function(username) {
	// 消息对象
	return { type: LOGIN, data: username }
}

// 定义异步消息
export let login = function(username, password) {
	// 异步消息，返回函数
	return dispatch => {
		// 发布请求
		axios.post('/admin/login', { username, password })
			// 监听返回
			.then(({ data }) => {
				// 如果返回成功，向store发布同步消息
				if (data.errno === 0) {
					dispatch(saveUsername(data.data.username))
				} else {
					// 通知用户
					alert(data.msg)					
				}
			})
	}
}