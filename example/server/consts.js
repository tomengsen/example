// 定义常量配置
var conf = {
	HTTP_PORT: 3000,
	HTTPS_PORT: 3001,
	// 静态化的目录
	STATICS: {
		'/static/': './static/',
		'/fonts/': './static/fonts/',
		// pc端后台管理系统，
		'/admin-pc/dist/': '/admin-pc/dist/',
		// 移动端后台管理系统
		'/admin-mobile/dist/': '/admin-mobile/dist'
	},
	// 每页显示课程数量
	SHOW_LESSON_NUM: 15,
	// 后台列表页展示课程的数量
	ADMIN_SHOW_LESSON_NUM: 16,
	// admin相关配置
	// 文件上传缓存目录
	UPLOAD_CACHE_DIR: './cache/upload/',
	UPLOAD_SAVE_DIR: '/static/upload/',
	// 返回消息配置对象
	MESSAGE: {
		// 操作成功
		success: { errno: 0, msg: 'success' },
		// 链接数据库失败
		connetDatabaseError: { errno: 1, msg: 'database error' },
		// 链接集合失败
		collectionError: { errno: 2, msg: 'collection error' },
		// 没有数据
		noResult: { errno: 3, msg: 'no result' },
		// 没有用户名和密码
		noUser: { errno: 4, msg: '用户名或者密码错误' },
		// 用户未登录
		notLogin: { errno: 5, msg: '用户尚未登录，请重新登录！' },
		// 集合更新失败
		collectionUpdateError: { errno: 6, msg: 'collection error' },
		// 文件上传错误
		uploadFileError: { errno: 7, msg: '文件上传失败' },
		// 移动文件错误
		renameFileError: { errno: 8, msg: '文件上传失败' },
		// 即可添加成员失败
		collectionCreateError: { errno: 9, msg: '创建失败' },
		// 删除失败
		collectionRemoveError: { errno: 10, msg: '删除失败' },
		// 更新失败
		collectionUpdateError: { errno: 11, msg: '更新失败' },

	},
	// 数据库名称
	MONGO_URL: 'mongodb://localhost:27017/ickt_16_quanzhan'
}
// 暴露取值器
module.exports = function(id) {
	// 只返回数据，不让外部修改数据
	return conf[id]
}
// 方便获取错误信息
module.exports.msg = function(id) {
	return conf.MESSAGE[id] || {}
}