// 引入模块
var express = require('express')
// 引入配置
var consts = require('./consts');
// 引入读取文件的模块
var fs = require('fs');
// 引入协议模块
var http = require('http');
var https = require('https');

// 读取协议
var key = fs.readFileSync('./ssl/private.pem');
var cert = fs.readFileSync('./ssl/file.crt');

// 创建应用程序
var app = express();

// 引入应用程序中间件
var middleware = require('./middleware');
middleware(app)

// 路由
var router = require('./router')
// 将安装router的过程放在router模块内
router(app);

// 封装接口
module.exports = function() {
	// 获取指令参数
	// console.log(process.argv)
	// http请求端口号
	var httpPort = process.argv[2] || consts('HTTP_PORT');
	// https端口号, 
	// 如果传递的http端口号，没有传递https端口号，让https端口号在http端口号基础之上加1
	var httpsPort = process.argv[3] || (process.argv[2] && +process.argv[2] + 1) || consts('HTTPS_PORT');
	// 启动服务
	http.createServer(app)
		// 监听端口号
		.listen(httpPort, res => console.log(`http server listen ${httpPort}`))
	// 启动https服务
	https.createServer({ key, cert }, app)
		// 监听端口号
		.listen(httpsPort, res => console.log(`https server listen ${httpsPort}`))
}

// 引入数据库
// var db = require('./db')
// // 测试封装的数据库方法
// app.get('/create', (req, res) => {
// 	// 操作集合
// 	db.collection('lesson', res, (collection, res, database) => {
// 		// 添加课程
// 		collection.insertOne({
// 			"img": "static/img/lesson/21.jpg",
// 			"title": "nodejs项目",
// 			"sales": "234",
// 			"price": "400.00",
// 			"type": "super"
// 		})
// 		// 通知客户端，操作成功
// 		// res.json({ errno: 0, msg: 'success' })
// 		// // 关闭数据库
// 		// db.close();
// 		// db.end({ errno: 0, msg: 'success' }, res, db)
// 		db.end('success', res, database)
// 	})
// })

// 定义端口号
// var httpPort = 3000;
// var httpsPort = 3001;

// // 将esj的插值语法标志%变成$
// ejs.delimiter = '$';
// // 更改ejs模块的默认拓展名
// app.engine('.html', ejs.__express);
// // 模板
// app.set('view engine', 'ejs')
// // 静态化
// // 可以通过process.cwd(), __dirname
// // express.static是目录静态化中间件方法
// app.use('/static/', express.static(path.join(process.cwd(), './static/')))
// // bootstrap中的字体图标也是静态文件，也需要静态
// app.use('/fonts/', express.static(path.join(process.cwd(), './static/fonts/')))
// // mock数据静态化
// // use方法从第二个参数开始，都表示中间件函数
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
// 定义路由
// app.get('/', (req, res) => {
// 	// 获取ua
// 	var ua = req.header('User-Agent');
// 	// 判断是否存在mobile，存在就是移动端
// 	if (/mobile/i.test(ua)) {
// 		// 移动端
// 		res.render('mobile.html', { msg: '爱创课堂' })
// 	} else {
// 		// pc端
// 		res.render('pc.html', { msg: '爱创课堂' })
// 	}
// 	// console.log(ua)
// 	// res.render('index.ejs')
// 	// 渲染pc端
// 	// res.render('pc.html', { msg: '爱创课堂' })
// 	res.render('mobile.html', { msg: '爱创课堂' })
// })
// 进入 /type/:id 渲染pc.html
// app.get('/type/*', (req, res) => {
// 	res.render('pc.html', { msg: '爱创课堂' })
// })

// // 路由也可以作为中间件定义
// var router = new express.Router();
// router.get('/', (req, res) => {
// 	// 获取ua
// 	var ua = req.header('User-Agent');
// 	// 判断是否存在mobile，存在就是移动端
// 	if (/mobile/i.test(ua)) {
// 		// 移动端
// 		res.render('mobile.html', { msg: '爱创课堂' })
// 	} else {
// 		// pc端
// 		res.render('pc.html', { msg: '爱创课堂' })
// 	}
// 	// console.log(ua)
// 	// res.render('index.ejs')
// 	// 渲染pc端
// 	// res.render('pc.html', { msg: '爱创课堂' })
// 	res.render('mobile.html', { msg: '爱创课堂' })
// })
// 安装路由中间件
// app.use(router)





