module.exports = (req, res) => {
	// 获取ua
	var ua = req.header('User-Agent');
	// 判断是否存在mobile，存在就是移动端
	if (/mobile/i.test(ua)) {
		// 移动端
		res.render('mobile.html', { msg: '爱创课堂' })
	} else {
		// pc端
		res.render('pc.html', { msg: '爱创课堂' })
	}
	// console.log(ua)
	// res.render('index.ejs')
	// 渲染pc端
	// res.render('pc.html', { msg: '爱创课堂' })
	// res.render('mobile.html', { msg: '爱创课堂' })
}