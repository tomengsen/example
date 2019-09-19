// 引入path模块
var path = require('path');
// html注入js插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 定义配置
module.exports = {
	// vue入口
	resolve: {
		// 别名
		alias: {
			vue$: 'vue/dist/vue.js'
		},
		// 省略拓展
		extensions: ['.es', '.vue', '.js']
	},
	// 入口文件
	entry: './src/main.es',
	// 发布
	output: {
		filename: './static/dist/mobile.js',
		// 根路径
		path: path.join(process.cwd(), '../')
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
			// vue
			{
				test: /\.vue$/,
				loader: 'vue-loader'
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
		// 开发完成再配置压缩js的
		// html中注入js
		new HtmlWebpackPlugin({
			template: './index.html',
			// 发布
			filename: './views/mobile.html',
			// 使用hash
			useHash: true
			// inject: false
		})
	]
}