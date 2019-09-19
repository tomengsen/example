// 引入db模块
var db = require('../../db');

module.exports = (req, res) => {
	// 当前用户名在session中
	// console.log(req.session.username)
	// 更新集合
	db.collection('manager', res, (collection, res, database) => {
		// 执行更新操作
		collection
			// 更新
			.update({
				username: req.session.username
				// username: 'abc'
			}, req.body, (err, result) => {
				// 如果有错误
				if (err) {
					return db.end('collectionError', res, database)
				}
				// 如果修改成功
				if (result.result.n > 0) {
					// 重新登录
					// 清空session
					delete req.session.username
					// 前端刷新页面
					db.end('success', res, database)
					return;
				}
				// 更新失败，提示用户
				db.end('collectionUpdateError', res, database)
				// console.log(err, result)
			})
	})
}