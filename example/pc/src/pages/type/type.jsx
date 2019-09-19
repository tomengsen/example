// 引入类库
// import React, { Component } from 'react';
// 引入home
import Home from '../home/home';
// 请求数据
import axios from 'axios';


// 组件类
export default class Type extends Home {
	// 请求地址可以定义在状态中，
	// 如果地址不变，或者地址变化不希望视图更新，我们可以直接存储在组件的自身属性或者原型属性中，
	// 可以通过get特性方法，定义属性
	get url() {
		return '/action/lesson/type'
	}
	// 请求数据的方法，提取出来
	getData(params) {
		// console.log(this)
		// 解构数据 
		// let { params } = this.props.match;
		// 访问原型特性属性
		axios.get(this.url, {
			// params: params
			params
		})
			// 更新状态
			.then(({ data }) => {
				// 如果请求成功
				if (data.errno === 0) {
					// 更新状态
					// this.setState({ data: data.data })
					this.setState(data)
				} else {
					// 提示用户
					alert(data.msg)
					// 清空数据
					this.setState({ data: [] })
				}
			})
			// 高级写法
			// .then(({ data }) => data.errno === 0 && this.setState(data))

	}
	// 组件创建完成，请求数据
	componentDidMount() {
		// 更新数据
		this.getData(this.props.match.params);
	}
	// 属性数据params.id更新，请求数据
	componentWillReceiveProps(newProps) {
		// 如果params.id更新了
		if (this.props.match.params.id !== newProps.match.params.id || this.props.match.params.word !== newProps.match.params.word) {
			// 请求数据
			// 第二种解决方式
			this.getData(newProps.match.params);
		}
	}
	// 第一种解决方式，在componentDidUpdate方法中更新数据
}