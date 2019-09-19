// 引入数据库模块
var db = require('../../db')
// var consts = require('../../consts');
// 请求处理方法
module.exports = (req, res) => {
	// res.json('success')
	// 前端传递的数据，在请求体上
	// console.log(req.body)
	// 链接数据库，查询数据
	db.collection('manager', res, (collection, res, database) => {
		// 查找
		collection
			.find(req.body)
			// 转化成数组
			.toArray((err, result) => {
				// 如果有错误，要提示
				if (err) {
					return db.end('collectionError', res, database)
				}
				// 如果有数据
				if (result.length) {
					// 存储session
					req.session.username = req.body.username
					// 返回用户名
					return db.end({
						errno: 0,
						data: {
							username: req.body.username
						}
					}, res, database)
				}
				// 没有数据，提示用户
				db.end('noUser', res, database)
			})
	})
	// 打开数据库。查找该用户信息，返回查询结果
	// 插入一条数据(插入一次)
	// db.collection('manager', res, (collection, res, database) => {
	// 	// 插入一条数据
	// 	collection.insertOne(req.body)
	// })
}