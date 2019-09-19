// 使用数据块
var mongodb = require('mongodb');
// 引入配置
var consts = require('../consts');
// 获取客户端
var MongoClient = mongodb.MongoClient;
// 请求地址
// var mongoUrl = 'mongodb://localhost:27017/ickt_16_quanzhan';
var mongoUrl = consts('MONGO_URL');

// 暴露接口
// db.collection('lesson', res, (collection, res, db) => {
// 	// 直接操作集合
// })
// 通知用户，并关闭数据库
function end(msg, res, db) {
	// 通知用户
	// 如果msg是字符串
	if (typeof msg === 'string') {
		// 从配置中获取数据
		res.json(consts('MESSAGE')[msg])
	} else {
		// 返回消息对象
		res.json(msg);
	}
	// 关闭数据库
	db.close();
}
/***
 * 封装操作集合的方法
 * @collectionName 	集合的名称
 * @res 			请求详情体，可以通过该对象，向客户端返回数据
 * @callback		打开集合成功的回调函数
 **/
function collection(collectionName, res, callback) {
	// 链接数据库
	MongoClient.connect(mongoUrl, (err, db) => {
		// 如果有错误
		if (err) {
			// 提示用户
			// 注意：尽量不要直观的将错误表述出来，通常用错误码表示错误
			// res.json({ errno: 1, msg: '链接数据库失败' })
			// // 关闭数据库
			// db.close();
			// return ;
			return end('connetDatabaseError', res, db)
		}
		// 获取集合并操作
		callback(db.collection(collectionName), res, db)
	})
}
// 暴露接口
module.exports = {
	collection,
	end
}

// 链接数据库
// MongoClient.connect(mongoUrl, (err, db) => {
// 	console.log('success')
// 	// 如果有错误
// 	if (err) {
// 		// 返回客户端res.josn('链接失败')
// 		return ;
// 	}
// 	// 获取集合
// 	db.collection('lesson')
// 		// 插入数据
// 		.insertOne({
// 			"img": "static/img/lesson/20.jpg",
// 			"title": "全栈项目",
// 			"sales": "123",
// 			"price": "300.00",
// 			"type": "super"
// 		})
// 	// 关闭数据库
// 	db.close()
// })

