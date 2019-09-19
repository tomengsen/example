// 引入插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 压缩js
var webpack = require('webpack');
// console.log(webpack)
// 定义配置
module.exports = {
	// 入口
	entry: './src/main.jsx',
	// 发布
	output: {
		// 根路径
		path: process.cwd(),
		// 发布
		filename: './dist/main.js'
	},
	// 拓展名
	resolve: {
		extensions: ['.jsx', '.es', '.js'] 
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// jsx
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				// 配置
				options: {
					// 工具
					presets: ['react', 'es2015'],
					plugins: [
						// 按需加载
						['import', {
							style: 'css',
							libraryName: 'antd-mobile'
						}]
					]
				}
			},
			// es6
			{
				test: /\.es$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// css
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			// scss
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	},
	// 功能
	plugins: [
		new HtmlWebpackPlugin({
			// 模板
			template: './public/index.html',
			// 发布
			filename: '../views/admin-mobile.html',
			// 添加hash
			hash: true
		}),
		new webpack.optimize.UglifyJsPlugin()
	]
}