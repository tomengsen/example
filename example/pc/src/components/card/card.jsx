import React, { Component } from 'react';
// 引入样式
import './card.less';
// 定义组件
export default class Card extends Component {
	render() {
		// 缓存属性数据
		let { data, methods, className } = this.props;
		return (
			<div className={"app-card " + className}>
				<div className="image-container">
					<img src={data.img} alt=""/>
				</div>
				<div className="card-content">
					<h2>{data.title}</h2>
					<p>
						<span className="card-sales">{data.sales + '人与你共同学习'}</span>
						<span className="card-price">{'￥' + data.price}</span>
						<span className="card-type">{data.type}</span>
					</p>
					<div className="card-layer">
						<span className={data.hasBuy ? "btn btn-success has-buy" : "btn btn-success"} onClick={e => data.hasBuy || methods(data)}>{data.hasBuy ? '已经购买' : '立即购买'}</span>
					</div>
				</div>
			</div>
		)
	}
}

// 默认数据
Card.defaultProps = {
	data: {},
	className: '',
	methods: () => {}
}