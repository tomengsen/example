// /admin 请求处理方法
module.exports = (req, res) => {
	// 判断移动端还是pc端
	var ua = req.header('User-Agent');
	// 校验
	if (/mobile/i.test(ua)) {
		// 移动端
		res.render('admin-mobile.html');
	} else {
		// pc端
		res.render('admin-pc.html')
	}
	// res.render('admin-pc.html')
}