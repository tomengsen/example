var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
// 配置
module.exports = {
	// vue入口文件
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.js'
		},
		// 拓展名
		extensions: ['.es', '.vue', '.js']
	},
	// 入口文件
	entry: './src/main.es',
	// 发布文件
	output: {
		filename: './dist/main.js',
		// 根目录
		path: process.cwd()
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
			},
			// 字体
			{
				test: /\.(woff|ttf)$/,
				loader: 'url-loader'
			}
		]
	},
	// 功能
	plugins: [
		new HtmlWebpackPlugin({
			// 模板
			template: './public/index.html',
			// 发布
			filename: '../views/admin-pc.html',
			// 指纹
			hash: true
		})
	]
}