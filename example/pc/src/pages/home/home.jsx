// 引入类库
import React, { Component } from 'react';
// 引入axios
import axios from 'axios';
// 引入组件
import Card from '../../components/card/card';
import Buy from '../../components/buy/buy';
// 引入样式
import './home.less';

// 组件类
export default class Home extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			data: [],
			showBuy: false,
			lesson: {}
		}
	}
	// 组件创建完成请求数据
	componentDidMount() {
		// 发送get请求
		axios.get('/action/lesson/home')
			// 监听数据返回
			.then(({ data }) => {
				// 如果请求成功
				if (data.errno === 0) {
					// 更新状态数据
					// this.setState({ data: data.data })
					// this.setState({ data: [] })
					// 相当于多了一个errno字段
					this.setState(data)
					// console.log(this)
				} else {
					// 提示用户
					alert(data.msg)
					// 清空数据
					this.setState({ data: [] })
				}
			})
	}
	// 成功的购买课程
	buyLesson(id) {
		// console.log(id)
		// 在数组中，查找成员
		let item = this.state.data
			.find(item => item._id === id)
		// find方法返回值是该成员
		if (item) {
			// 存在就是成员对象
			item.hasBuy = true;
			// 更新数组
			this.setState({
				data: this.state.data,
				// 关闭购买弹层
				showBuy: false
			})
		}
	}
	// 渲染卡片
	createList() {
		// console.log(this.state)
		// 接收子组件数据，并更新状态
		return this.state.data.map((item, index) => <Card key={index} data={item} className="card-item" methods={lesson => this.setState({ 
				lesson,
				showBuy: true
			})}></Card>)
	}
	render() {
		// 解构数据
		let { lesson, showBuy } = this.state;
		console.log(this.state);
		return (
			<div className="app-page">
				<div className="container">
					<div className="card-list">{this.createList()}</div>
				</div>
				{/*购买组件*/}
			{/*card组件的数据传递给buy组件，是一个兄弟组件间通信的模型*/}
			{/*将更新的状态传递给其他组件*/}
				<Buy show={showBuy} method={this.buyLesson.bind(this)} data={lesson}></Buy>
			</div>
		)
	}
}