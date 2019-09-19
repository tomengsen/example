import React, { Component } from 'react';
// 引入axios
import axios from 'axios';
// 引入样式
import './buy.less';

// 定义组件
export default class Buy extends Component {
	// 状态数据
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			// 属性数据转换成状态数据
			show: props.show
		}
	}
	// 在存在期将属性数据转换成状态数据
	componentWillReceiveProps({ show }) {
		this.setState({ show })
	}
	// 关闭弹层的方法
	hide() {
		this.setState({ show: false })
	}
	// 购买课程
	buyLesson() {
		// 购买的逻辑是在后端实现的，我们只需要发送请求告诉后端，我们要买课程即可
		axios.get('/action/lesson/buy?id=' + this.props.data._id)
			// 监听返回
			.then(({ data }) => {
				// 如果成功
				if (data.errno === 0) {
					// 通知父组件
					this.props.method(this.props.data._id)
				}
			})

	}
	// 渲染
	render() {
		// div.app-buy>div.buy-content>(div.buy-header>span.title+span.close{&times;})+(div.buy-body>(div.lesson>img+div.intro>h2.title+p.sales)+div.price>span.price-title+span.price-num)+div.buy-footer>span.btns.btn-cancel{取消}+span.btns.btn-sure{确定}+input:checkbox+span.info{同意爱创课堂条款}
		// 缓存data
		let data = this.props.data;
		return (
			<div className="app-buy" style={{
				display: this.state.show ? 'block' : 'none'
			}}>
				<div className="buy-content">
					<div className="buy-header">
						<span className="title">购买课程</span>
						<span className="buy-close" onClick={this.hide.bind(this)}>&times;</span>
					</div>
					<div className="buy-body">
						<div className="lesson">
							<img src={data.img} alt=""/>
							<div className="intro">
								<h2 className="title">{data.title}</h2>
								<p className="sales">{data.sales + '人与你一起学习'}</p>
							</div>
						</div>
						<div className="price">
							<span className="price-title">课程价格</span>
							<span className="price-num">{'￥' + data.price}</span>
						</div>
					</div>
					<div className="buy-footer">
						<span className="btns btn-cancel" onClick={this.hide.bind(this)}>取消</span>
						<span className="btns btn-sure" onClick={this.buyLesson.bind(this)}>确定</span>
						<input type="checkbox" name="" id=""/>
						<span className="info">同意爱创课堂条款</span>
					</div>
				</div>
			</div>
		)
	}
}
// 定义默认属性数据
Buy.defaultProps = {
	// 默认隐藏
	show: false,
	// 购买成功时候执行的方法
	method() {},
	data: {}
	// data: {
	// 	"_id": 1,
	// 	"img": "static/img/lesson/01.jpg",
	// 	"title": "爱创课堂Javscript进阶课程",
	// 	"sales": "12345",
	// 	"price": "200.00",
	// 	"type": "高级"
	// }
}