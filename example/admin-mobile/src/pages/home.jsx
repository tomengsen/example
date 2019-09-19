// 引入库
import React, { Component } from 'react';
// 引入路由组件
import { Switch, Route } from 'react-router-dom';
// 引入UI组件
import { NavBar, Menu } from 'antd-mobile';
// 引入页面组件
import LessonCreate from './lesson/create';
import LessonEdit from './lesson/edit';
import LessonList from './lesson/list';
import Main from './main/main';

export default class Home extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态数据
		this.state = {
			show: false
		}
	}
	// 属性数据
	get menuData() {
		return [
			{
				// label定义显示的内容，value定义id
				label: '课程模块',
				value: 'lesson',
				children: [
					{ label: '创建课程', value: '/lesson/create' },
					{ label: '课程列表', value: '/lesson/list/1' },
				]
			},
			{
				label: '用户模块',
				value: 'user',
				children: [
					{ label: '创建用户', value: '/user/create' },
					{ label: '用户列表', value: '/user/list/1' },
				]
			}
		]
	}
	// 点击菜单的时候，切换路由
	menuChange(arr) {
		// console.log(this.props)
		// 隐藏菜单
		this.setState({ show: false })
		// console.log(arr)
		// 切换路由
		location.hash = '#' + arr[1]
		// this.props.history.replace(arr[1])
	}
	render() {
		return (
			<div>
				<NavBar
					leftContent="菜单"
					onLeftClick={e => this.setState({ show: true })}
					rightContent={this.props.state.login.username}
				>爱创课堂</NavBar>
				{/*定义菜单*/}
				{this.state.show ? <Menu data={this.menuData} onChange={arr => this.menuChange(arr)}></Menu> : ''}
				{/*定义渲染位置*/}
				<Switch>
					{/*注意：这里要写绝对路径*/}
					<Route path="/lesson/create" component={LessonCreate}></Route>
					<Route path="/lesson/list/:page" component={LessonList}></Route>
					<Route path="/lesson/edit/:id" component={LessonEdit}></Route>
					<Route path="*" component={Main}></Route>
				</Switch>
			</div>
		)
	}
}