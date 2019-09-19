// 请求处理方法
module.exports = (req, res) => {
	// res.json('success')
	// 将session清空
	delete req.session.username;
	// 重定向到首页
	res.redirect('/admin')
}