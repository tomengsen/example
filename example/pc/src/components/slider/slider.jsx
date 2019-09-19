// 引入基础库
import React, { Component } from 'react';
// 导入样式
import './slider.less';

// 定义组件
export default class Slider extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		this.state = {
			// 当前显示的图片索引值
			num: 0
		}
	}
	// 获取真实索引值
	getIndex() {
		// 根据图片的个数来确定
		if (this.props.urls.length) {
			return this.state.num % this.props.urls.length
		}
		// 避免0%0返回NaN
		return 0;
	}
	// 渲染按钮
	createBtns() {
		// 按钮的个数有图片的个数决定
		return this.props.urls.map((item, index) => <span 
			key={index} 
			className={this.getIndex() === index ? 'choose' : ''}
			onClick={e => this.toggle(index)}
			></span>)
	}
	// 点击按钮，切换图片
	toggle(num) {
		// 状态可以存储数据，属性可以存储数据，但是它们的数据改变都会进入存在期，组件也可以存储数据，并且组件自身的数据改变，不会进入存在期
		if (this.toggleStart) {
			// 已经开始切换了，我们就不能再起切换了
			return ;
		}
		// 此时开始切换图片
		this.toggleStart = true;
		// 清空循环计时器的句柄
		clearInterval(this.timebar);
		// 更新状态
		this.setState({ num })
		// 启动循环定时器
		this.startInterval();
	}
	// 启动循环定时器
	startInterval() {
		// 存储循环定时器的句柄
		this.timebar = setInterval(() => {
			// 更新num
			// let num = this.state.num;
			// num++;
			// this.setState({ num });
			this.setState({
				num: ++this.state.num
			})
		}, this.props.time)
	}
	// 组件创建完成
	componentDidMount() {
		// 启动循环定时器
		this.startInterval();
		// 监听过渡动画的完成
		this.refs.content.addEventListener('webkitTransitionEnd', e => {
			// console.log(111, e)
			// 此时动画完成，
			this.toggleStart = false;
		})
	}
	render() {
		// 解构数据
		console.log(this.props);
		let { urls, width, height } = this.props;
		return (
			<div className="app-slider" style={{ width }}>
				<div className="content" ref="content" style={{
					height,
					backgroundImage: `url(${urls[this.getIndex()]})`
				}}></div>
				<div className="btns">{this.createBtns()}</div>
			</div>
		)
	}
}
// 默认属性数据
Slider.defaultProps = {
	// 图片地址容器
	urls: [],
	width: '100%',
	height: '100px',
	time: 3000
}