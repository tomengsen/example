// 引入数据库模块
var db = require('../../db')
var num = require('../../consts')('SHOW_LESSON_NUM')
// 暴露接口
module.exports = (req, res) => {
	// 获取query数据
	var type = req.query.id;
	// 操作集合
	db.collection('lesson', res, (collection, res, database) => {
		// 查找数据
		collection
			.find({
				type
			})
			// 获取最新的
			.sort({ _id: -1 })
			// 截取的数量
			.limit(num)
			// 转化成数组
			.toArray((err, result) => {
				// 如果操作集合有错误，返回并提示用户
				if (err) {
					return db.end('collectionError', res, database)
				}
				// 如果没有结果
				if (result.length === 0) {
					// 返回并提示用户
					return db.end('noResult', res, database)
				}
				// 有数据，返回数据
				db.end({
					errno: 0,
					data: result
				}, res, database)
			})
	})
	// res.json('success')
}