// 功能：安装路由中间件

// 引入页面的路由并安装
var page = require('./page')
// 引入action路由中间件
var action = require('./action')
// 安装admin路由中间件
var admin = require('./admin');
// router.get('/', )

// module.exports = router;
// 安装路由的方法
module.exports = (app) => {
	// 将安装路由中间件的过程放在了router模块内
	app.use(page);
	app.use(action);
	app.use(admin);
}