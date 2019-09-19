// 引入db模块
var db = require('../../db');
// 引入mongodb
var mongodb = require('mongodb');
// 暴露接口
module.exports = (req, res) => {
	// id数据要做处理
	req.body._id = mongodb.ObjectId(req.body._id)
	// 打开数据库
	db.collection('lesson', res, (collection, res, database) => {
		// 更新数据
		collection
			.update({
				// 根据id查找数据
				_id: req.body._id
			}, req.body, (err, result) => {
				// 如果有错误
				if (err) {
					return db.end('collectionError', res, database)
				}
				// 如果成功
				if (result.result.n > 0) {
					return db.end('success', res, database)
				}
				// 更新失败
				db.end('collectionUpdateError', res, database)
				// console.log(err, result)
			})
	})
}