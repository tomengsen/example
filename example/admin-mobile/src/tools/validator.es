// 定义校验的方法
// 如果校验失败，提示用户，返回false
// 如果校验成功，返回true
export function checkUsername(value, errText = '用户名是字母数字下划线4-10位的') {
	// 校验
	if (!/^\w{4,10}$/.test(value)) {
		alert(errText)
		return ;
	}
	// 合法
	return true
}
// 校验密码
export function checkPassword(value, errText = ['密码必须包含字母和数字', '密码是4-8位的']) {
	// 校验
	if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)) {
		alert(errText[0])
		return ;
	}
	// 密码是4-8位的
	if (!/^.{4,8}$/.test(value)) {
		alert(errText[1])
		return ;
	}
	// 合法
	return true
}
export function checkPasswordAgain(value, password, errText = ['请输入该字段', '两次输入不相等']) {
	// 校验
	if (!value) {
		alert(errText[0])
		return ;
	}
	// 两次输入不相等
	if (value !== password) {
		alert(errText[1])
		return ;
	}
	// 合法
	return true
}
// 校验是否为空
export function checkEmpty(value, errText = '请输入完整') {
	if (!value) {
		alert(errText)
		return;
	}
	// 合法
	return true;
}
// 检测课程标题
export function checkLessonTitle(value, errText = ['请输入完整', '标题是2-10位的']) {
	// 如果为空，提示用户
	if (!value) {
		alert(errText[0])
		return;
	}
	// 标题是2-10位的
	if (!/^.{2,10}$/.test(value)) {
		alert(errText[1])
		return;
	}
	// 合法
	return true;
}
