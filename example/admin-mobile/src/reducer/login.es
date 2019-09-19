// 引入消息类型常量
import { LOGIN } from '../consts/login';

// 定义reducer就是定义函数
export function login(state = { username: '' }, action) {
	// 定义修改的结果
	let result = {};
	// 判断消息类型
	switch (action.type) {
		// 登录
		case LOGIN:
			// 存储用户名
			result.username = action.data;
			break;
	}
	// 将结果存储在新对象中并返回
	return Object.assign({}, state, result);
}