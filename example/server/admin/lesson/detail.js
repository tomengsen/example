// db模块
var db = require('../../db');
// 引入mongodb
var mongodb = require('mongodb');
// 暴露接口
module.exports = (req, res) => {
	// 获取id
	var id = req.query.id;
	// 打开数据库
	db.collection('lesson', res, (collection, res, database) => {
		// 查找数据
		collection
			.findOne({
				_id: mongodb.ObjectId(id)
			}, (err, result) => {
				// console.log(err, result)
				// 如果有错误，提示
				if (err) {
					return db.end('collectionError', res, database);
				}
				// 如果有数据，返回给前端
				if (result) {
					return db.end({
						errno: 0,
						data: result
					}, res, database)
				}
				// 没有数据，提示用户
				db.end('noResult', res, database)
			})
	})
}