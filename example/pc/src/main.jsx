// 引入基础库
// import React from 'react';
import { render } from 'react-dom';
// 引入应用程序
// import App from './app/app';
// 引入路由
import routes from './router/router';
// css3动画样式
import './loader.less';
// 引入配置
import { IMAGES } from './consts.es';
// 引入图片加载器
import ImageLoader from './tools/image-loader';
// 获取加载进度元素
let textDom = document.getElementById('loader_num');
// 处理每张图片加载完成的方法
let dealLoadImageFn = (num, total) => {
	// 百分数保留2位小数
	textDom.innerHTML = (num / total * 100).toFixed(2);
}
// 使用图片加载器，加载图片
new ImageLoader(
	IMAGES,
	// 加载成功
	dealLoadImageFn,
	// 加载失败
	dealLoadImageFn,
	// 加载完成
	(num, total) => {
		// 设置提示文案
		textDom.innerHTML = '100.00';
		// 渲染应用程序
		// render(<App></App>, document.getElementById('app'))
		// 渲染路由规则
		render(routes, document.getElementById('app'))
	}
)

// // 引入库文件
// import React from 'react';
// import { render } from 'react-dom';
// // 引入样式
// import './base.less'

// // 渲染
// render(<button className="btn btn-success">hello</button>, document.getElementById('app'))
// // render(<h1>hello 123</h1>, document.getElementById('app'))