// 引入库
import React from 'react';
import { render } from 'react-dom';
// 引入路由规则
import routes from './router/router';
// 引入store
import { store } from './store/store';
// 为组件提供store的组件
import { Provider } from 'react-redux';

// 为渲染的组件提供store
render(<Provider store={store}>{routes}</Provider>, document.getElementById('app'))

// 渲染路由
// render(routes, document.getElementById('app'))

// import App from './app/app';
// 渲染
{/*render(<App></App>, document.getElementById('app'))*/}