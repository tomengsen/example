// 引入db模块
var db = require('../../db');
// 引入配置
var consts = require('../../consts');
// 每页展示课程的数量
var num = consts('ADMIN_SHOW_LESSON_NUM');
// 暴露接口
module.exports = (req, res) => {
	// 获取页码
	// 计算机是从0开始计算的，因此要减1
	let page = req.query.page - 1;
	// 不能小于0
	page = page < 0 ? 0 : page;
	// 打开数据库
	db.collection('lesson', res, (collection, res, database) => {
		// 查询数据
		collection
			// 查找所有
			.find()
			// 最新排序
			.sort({ _id: -1 })
			// 跳过的数量
			.skip(num * page)
			// 每页展示的数量
			.limit(num)
			// 转成数组
			.toArray((err, result) => {
				// 如果有错误
				if (err) {
					return db.end('collectionError', res, database)
				}
				// 如果有结果
				if (result.length) {
					// 返回数据
					return db.end({
						errno: 0,
						data: result
					}, res, database)
				}
				// 没有数据
				db.end('noResult', res, database);
			})
	})
}