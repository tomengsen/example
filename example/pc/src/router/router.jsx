// 引入基础库
import React from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import App from '../app/app';
// 2 定义渲染策略
export default (
	<HashRouter>
		<App></App>
	</HashRouter>
)
// path策略
// export default (
// 	<BrowserRouter>
// 		<App></App>
// 	</BrowserRouter>
// )