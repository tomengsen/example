// 引入类库
// import React, { Component } from 'react';
// 引入分类页面
import Type from '../type/type';

// 组件类
export default class Search extends Type {
	// 重新定义请求地址
	get url() {
		return '/action/lesson/search'
	}
}