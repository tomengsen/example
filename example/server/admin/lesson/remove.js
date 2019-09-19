// 引入db模块
var db = require('../../db');
// 引入数据库
var mongodb = require('mongodb');
// console.log(mongodb.ObjectId)
// 暴露接口
module.exports = (req, res) => {
	// 打开数据流
	db.collection('lesson', res, (collection, res, database) => {
		// 删除成员
		collection
			// 要通过ObjectId方法，将id转换成数据库中对应的id
			.remove({
				_id: mongodb.ObjectId(req.body.id)
			}, (err, result) => {
				// console.log(err, result)
				// 如果有错误，提示用户
				if (err) {
					return db.end('collectionError', res, database)
				}
				// 如果操作成功
				if (result.result.n > 0) {
					return db.end('success', res, database)
				}
				// 操作失败
				db.end('collectionRemoveError', res, database)
			})
	})
}