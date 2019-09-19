// 引入consts配置
var consts = require('../../consts');
// 请求处理方法
module.exports = (req, res) => {
	// res.json('success')
	// 查看session中是否有用户名，
	// 用户名存在，说明登录了
	if (req.session.username) {
		// 返回用户名
		return res.json({
			errno: 0,
			data: {
				username: req.session.username
			}
		})
	}
	// 用户名不存在，没有登录
	// res.json(consts.msg('notLogin'))
	res.json(consts('MESSAGE').notLogin)
}