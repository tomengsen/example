// 引入path模块
var path = require('path');
// 引入html插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 配置
module.exports = {
	// 省略拓展名
	resolve: {
		extensions: ['.js', '.es', '.jsx']
	},
	// 入口文件
	entry: './src/main.jsx',
	// 发布
	output: {
		// 定义根路径process.cwd(), __dirname
		// 根目录是example
		path: path.join(process.cwd(), '../'),
		// 发布文件
		filename: './static/dist/pc.js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// es6
			{
				test: /\.es$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// jsx
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	},
	// 功能
	plugins: [
		new HtmlWebpackPlugin({
			// 模板
			template: './index.html',
			// 发布
			filename: './views/pc.html',
			// 添加hash, 避免开发新的功能，浏览器走缓存无法预览
			hash: true
		})
	]
}