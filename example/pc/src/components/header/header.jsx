// 引入类库
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// 引入组件
import Slider from '../slider/slider';
// 引入图片
import { IMAGES } from '../../consts';
// 引入样式
import './header.less';

// 定义组件
export default class Header extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			searchValue: ''
		}
	}
	// 点击enter键，开始搜索
	showSearchResult(e) {
		// 如果是回车键
		// console.log(e.keyCode)
		if (e.keyCode === 13) {
			// 切换路由
			// console.log(this.props)
			// 通过js切换
			location.hash = '/search/' + e.target.value;
			// 清空输入的内容
			this.setState({ searchValue: '' })
		}
	}
	render() {
		// div.app-header>div.navbar.navbar-static-top>div.container>(div.navbar-header>Link[to="/"]>img[src="static/img/logo.png"])+(div.pull-right.form-group>input.form-control[placeholder=搜索])+div.navbar-nav.nav.nav-justified>(li>Link[to])*6
		return (
			<div className="app-header">
				<div className="navbar navbar-static-top">
					<div className="container">
						<div className="navbar-header">
							<Link to="/">
								<img src="static/img/logo.png" alt=""/>
							</Link>
						</div>
						<div className="pull-right form-group">
							{/*约束性组件*/}
							<input value={this.state.searchValue} onChange={e => this.setState({
							 	searchValue: e.target.value 
							})} type="text" className="form-control" placeholder="搜索" onKeyUp={e => this.showSearchResult(e)}/>
						</div>
						<div className="nav nav-justified">
							<li>
								<Link to="/type/super">高级课程</Link>
							</li>
							<li>
								<Link to="/type/middle">进阶课程</Link>
							</li>
							<li>
								<Link to="/type/easy">初级课程</Link>
							</li>
							<li>
								<Link to="/type/react">React</Link>
							</li>
							<li>
								<Link to="/type/vue">Vue</Link>
							</li>
							<li>
								<Link to="/type/angular">Angular</Link>
							</li>
						</div>
					</div>
				</div>
				<Slider height="500px" urls={IMAGES}></Slider>
			</div>
		)
	}
}