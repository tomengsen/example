// 引入数据库
var db = require('../../db');
// 暴露接口
module.exports = (req, res) => {
	// 数据在请求体中
	// console.log(req.body)
	// 打开数据库
	db.collection('lesson', res, (collection, res, database) => {
		// 添加成员
		collection
			.insertOne(req.body, (err, result) => {
				// 如果有错误提示用户
				if (err) {
					return db.end('collectionError', res, database)
				}
				// 如果成功
				if (result.result.n > 0) {
					return db.end('success', res, database)
				}
				// 创建课程失败，提示用户
				db.end('collectionCreateError', res, database)
				// console.log(err, result)
			})
	})
}