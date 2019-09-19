var db = require('../../db')
var num = require('../../consts')('SHOW_LESSON_NUM')
// 接口方法
module.exports = (req, res) => {
	// 获取搜索的词
	var word = req.query.word;
	// 操作集合
	db.collection('lesson', res, (collection, res, database) => {
		// 查找数据
		collection
			// 查找并过滤数据
			.find({
				title: new RegExp(word, 'i')
			})
			// 截取
			.limit(num)
			// 转换数组
			.toArray((err, result) => {
				// 是否有错误
				if (err) {
					return db.end('collectionError', res, database)
				}
				// 没有数据
				if (result.length === 0) {
					return db.end('noResult', res, database)
				}
				// 返回结果
				db.end({
					errno: 0,
					data: result
				}, res, database)
			})
	})
}