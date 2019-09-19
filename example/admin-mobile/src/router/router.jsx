// 引入库
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
// 引入应用程序
import App from '../app/app';
// 用deal方法，处理app
import { deal } from '../store/store'
// 拓展app
let DealApp = deal(App);
// 定义规则
// 注意：不使用Route定义DealApp，此时menu组件无法切换路由
export default (
	<HashRouter>
		<Route path="/" component={DealApp}></Route>
	</HashRouter>
)
// 定义规则
// export default (
// 	<HashRouter>
// 		<DealApp></DealApp>
// 	</HashRouter>
// )
