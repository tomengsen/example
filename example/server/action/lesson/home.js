// 引入db模块
var db = require('../../db');
var consts = require('../../consts');
// 每页展示的数量
var num = consts('SHOW_LESSON_NUM');
// 定义接口方法
module.exports = (req, res) => {
	// 操作集合
	db.collection('lesson', res, (collection, res, database) => {
		// 获取数据
		collection.find()
			// 获取最新的，排序
			.sort({ _id: -1 })
			// 分页
			// .skip(num * 2)
			// 获取数据量的限制
			.limit(num)
			// 转化成数组
			.toArray((err, result) => {
				// 如果有错误，提示用户，关闭数据库，返回
				if (err) {
					return db.end('collectionError', res, database)
				}
				// 没有数据
				if (result.length === 0) {
					// 返回，并提示用户
					return db.end('noResult', res, database)
				}
				// 将数据返回给客户端
				// res.json({
				// 	errno: 0,
				// 	data: result
				// })
				// db.close();
				db.end({
					errno: 0,
					data: result
				}, res, database)
				// console.log(err, result)
			})
	})

	// res.json('success')
	// 添加数据
	// db.collection('lesson', res, (collection, res, db) => {
	// 	// 插入数据
	// 	collection.insertMany([
	// 		{
	// 			"img": "/static/img/lesson/05.jpg",
	// 			"title": "Javscript进阶课程",
	// 			"sales": "123",
	// 			"price": "120.00",
	// 			"type": "easy"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/06.jpg",
	// 			"title": "css进阶课程",
	// 			"sales": "234",
	// 			"price": "20.00",
	// 			"type": "easy"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/07.jpg",
	// 			"title": "html进阶课程",
	// 			"sales": "67",
	// 			"price": "10.00",
	// 			"type": "easy"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/08.jpg",
	// 			"title": "css3 进阶课程",
	// 			"sales": "12",
	// 			"price": "50.00",
	// 			"type": "easy"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/09.jpg",
	// 			"title": "html5进阶课程",
	// 			"sales": "145",
	// 			"price": "20.00",
	// 			"type": "easy"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/10.jpg",
	// 			"title": "设计模式进阶课程",
	// 			"sales": "45",
	// 			"price": "201.00",
	// 			"type": "middle"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/11.jpg",
	// 			"title": "canvas进阶课程",
	// 			"sales": "125",
	// 			"price": "220.00",
	// 			"type": "middle"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/12.jpg",
	// 			"title": "游戏课程",
	// 			"sales": "145",
	// 			"price": "20.00",
	// 			"type": "middle"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/13.jpg",
	// 			"title": "backbone进阶课程",
	// 			"sales": "125",
	// 			"price": "50.00",
	// 			"type": "super"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/14.jpg",
	// 			"title": "ionic课程",
	// 			"sales": "15",
	// 			"price": "290.00",
	// 			"type": "super"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/15.jpg",
	// 			"title": "Angular 6.0进阶课程",
	// 			"sales": "15",
	// 			"price": "240.00",
	// 			"type": "super"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/16.jpg",
	// 			"title": "Angular 1.0进阶课程",
	// 			"sales": "145",
	// 			"price": "20.00",
	// 			"type": "super"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/17.jpg",
	// 			"title": "Redux进阶课程",
	// 			"sales": "345",
	// 			"price": "290.00",
	// 			"type": "super"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/18.jpg",
	// 			"title": "Reflux进阶课程",
	// 			"sales": "125",
	// 			"price": "202.00",
	// 			"type": "super"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/19.jpg",
	// 			"title": "MVC课程",
	// 			"sales": "1445",
	// 			"price": "20.00",
	// 			"type": "super"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/20.jpg",
	// 			"title": "Express课程",
	// 			"sales": "12",
	// 			"price": "234.00",
	// 			"type": "super"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/21.jpg",
	// 			"title": "Sesson课程",
	// 			"sales": "12",
	// 			"price": "20.00",
	// 			"type": "super"
	// 		},
	// 		{
	// 			"img": "/static/img/lesson/22.jpg",
	// 			"title": "Cookie课程",
	// 			"sales": "345",
	// 			"price": "220.00",
	// 			"type": "super"
	// 		}
	// 	], () => {})
	// })
}