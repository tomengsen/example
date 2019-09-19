// 引入库
import React, { Component } from 'react';
// 引入ui
import { InputItem, WhiteSpace, Picker, List, ImagePicker, Button } from 'antd-mobile'
// 引入axios
import axios from 'axios';
// 引入校验方法
import { checkLessonTitle, checkEmpty } from '../../tools/validator';

// 定义组件
export default class Create extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			title: '',
			img: '',
			price: '',
			type: '',
			sales: ''
		}
	}
	// 分类数据
	get typeData() {
		return [
			{ label: '高级课程', value: 'super' },
			{ label: '中级课程', value: 'middle' },
			{ label: '初级课程', value: 'esay' },
			{ label: 'React课程', value: 'react' },
			{ label: 'Vue课程', value: 'vue' },
			{ label: 'Angular课程', value: 'angular' }
		]
	}
	// 获取typeData数组中，某个成员对应的label值
	getTypeLabel() {
		// 获取该成员
		let item = this.typeData.find(item => item.value === this.state.type);
		return item ? item.label : '请选择类型'
	}
	// 上传图片
	uploadFile(files) {
		// console.log(files)
		// 上传成功。显示图片
		// this.setState({
		// 	files: [{ url: files[0].url }]
		// })
		// 模拟表单数据，上传图片
		let form = new FormData();
		// 为表单添加字段
		form.append('file', files[0].file)
		// 上传图片, 上传表单数据
		axios.post('/admin/lesson/upload', form)
			// 监听返回
			.then(({ data }) => {
				// 如果成功。显示图片
				if (data.errno === 0) {
					// 更新数据
					this.setState({
						img: data.data.file
					})
				} else {
					// 提示用户
					alert(data.msg)
				}
			})
	}
	// 提交数据方法
	submitData() {
		// 校验所有字段
		let { img, title, price, sales, type } = this.state;
		// 逐一判断
		if (
			checkLessonTitle(title, ['请输入标题', '标题2-10位']) &&
			checkEmpty(img, '请上传图片') &&
			checkEmpty(price, '请输入价格') &&
			checkEmpty(sales, '请输入销量') &&
			checkEmpty(type, '请选择类别')
		) {
			// console.log('success')
			// 提交数据
			axios.post('/admin/lesson/create', this.state)
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功，进入列表页
					if (data.errno === 0) {
						location.hash = '#/lesson/list/1'
					} else {
						// 提示用户
						alert(data.msg)
					}
				})
		}
	}
	render() {
		// 解构
		let { title, img, price, sales, type } = this.state;
		return (
			<div className="app-lesson-create">
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="" value={title} onChange={title => this.setState({ title })}>课程标题</InputItem>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="" value={price} onChange={price => this.setState({ price })} type="number">课程价格</InputItem>
				<WhiteSpace></WhiteSpace>
				{/*下拉框, cols定义显示的列数*/}
				<Picker onChange={type => this.setState({ type: type[0] })} data={this.typeData} title="选择课程类别" cols="1">
					<List.Item>选择课程:{this.getTypeLabel()}</List.Item>
				</Picker>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="" value={sales} onChange={sales => this.setState({ sales })} type="number">课程售量</InputItem>
				<WhiteSpace></WhiteSpace>
				{/*一行显示两个*/}
				<ImagePicker 
					files={img ? [{ url: img }] : []}
					length="2"
					onChange={this.uploadFile.bind(this)}
				></ImagePicker>
				<WhiteSpace></WhiteSpace>
				<Button type="primary" onClick={e => this.submitData()}>提交</Button>
			</div>
		)
	}
}