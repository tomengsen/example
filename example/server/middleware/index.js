// 引入模块
var express = require('express')
// 引入路径管理模块
var path = require('path');
// 引入ejs
var ejs = require('ejs')
// 引入配置
var consts = require('../consts');
// 引入session
var session = require('express-session');
// 引入bodyparser
var bodyParser = require('body-parser');

module.exports = function(app) {
	// 将esj的插值语法标志%变成$
	ejs.delimiter = '$';
	// 更改ejs模块的默认拓展名
	app.engine('.html', ejs.__express);
	// 模板
	app.set('view engine', 'ejs')

	// session中间件
	app.use(session({
		secret: 'icketang',
		resave: true,
		saveUninitialized: false
	}))
	// 处理请求
	app.use(bodyParser.json());

	// 静态化
	// 可以通过process.cwd(), __dirname
	// express.static是目录静态化中间件方法
	// app.use('/static/', express.static(path.join(process.cwd(), './static/')))
	// // bootstrap中的字体图标也是静态文件，也需要静态
	// app.use('/fonts/', express.static(path.join(process.cwd(), './static/fonts/')))

	// 静态化
	var STATICS = consts('STATICS');
	for (var i in STATICS) {
		// i是静态化的目录，STATICS[i]是重定向的目录
		// 此时不要使用__dirname
		app.use(i, express.static(path.join(process.cwd(), STATICS[i])))
	}

	// mock数据静态化
	// use方法从第二个参数开始，都表示中间件函数
	// app.use('/action/', (req, res, next) => {
	// 	// console.log(req.url, next)
	// 	// 根据?切割
	// 	var arr = req.url.split('?')
	// 	// 为路径添加拓展名
	// 	arr[0] += '.json';
	// 	// 拼接地址
	// 	req.url = arr.join('?');
	// 	// 为请求添加.json拓展名
	// 	// req.url += '.json';
	// 	// 继续执行下一个中间件
	// 	next();
	// }, express.static(path.join(process.cwd(), './static/data/')))
}