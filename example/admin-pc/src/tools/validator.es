// 定义校验方法
export function checkUserName(filed, value, callback) {
	// console.log(arguments)
	// callback(new Error('error'))
	// console.log(value)
	// 用户名必填
	if (!value) {
		return callback(new Error('用户名是必填的'))
	} 
	// 用户名是字母数字下划线4-10位的
	if (!/^\w{4,10}$/.test(value)) {
		return callback(new Error('用户名是字母数字下划线4-10位的'))
	}
	// 如果成功，要执行回调函数
	callback()
}
// 校验密码
export function checkPassWord(filed, value, callback) {
	// 密码是必填的
	if (!value) {
		return callback(new Error('密码是必填的'))
	}
	// 密码必须包含数字以及字母
	if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)) {
		return callback(new Error('密码必须包含数字以及字母'))
	}
	// 密码是4-8位的
	if (!/^.{4,8}$/.test(value)) {
		return callback(new Error('密码是4-8位的'))
	}
	// 如果成功，要执行回调函数
	callback()
}
// 重复输入密码
export function checkPasswordAgain(field, value, callback) {
	// 不能为空
	if (!value) {
		return callback(new Error('重复密码不能为空'))
	}
	// 如果作用域不是组件实例化对象，提示用户
	if (this === field) {
		console.log(`请为${field.field}字段绑定组件`)
		return callback()
	}
	// 必须与密码字段相等
	if (this.manager.password !== value) {
		// 提示用户密码不相等
		return callback(new Error('密码不相等, 请重新输入'))
	}
	// console.log(arguments, this,field === this, this.manager)
	callback();
}
// 校验标题
export function checkLessonTitle(filed, value, callback) {
	// 如果为空，提示用户
	if (!value) {
		return callback(new Error('请输入完成'))
	}
	// 标题是2-10位的
	if (!/^.{2,10}$/.test(value)) {
		return callback(new Error('标题是2-10位的'))
	}
	callback();
}
// 校验价格
export function checkEmpty(filed, value, callback) {
	// 如果为空，提示用户
	if (!value) {
		return callback(new Error('请输入完成'))
	}
	callback();
}