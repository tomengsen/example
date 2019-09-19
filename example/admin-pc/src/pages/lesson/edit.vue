<template>
<div class="app-lesson-edit">
	<h1 class="app-title">修改课程</h1>
	<!-- 1 定义结构 -->
	<!-- 2 设置label -->
	<!-- 3 v-model绑定数据 -->
	<!-- 4 设置prop属性 -->
	<!-- 5 表单校验 -->
	<el-form label-width="150px" :model="lesson" :rules="rules">
		<el-form-item label="课程标题：" prop="title">
			<el-input v-model="lesson.title"></el-input>
		</el-form-item>
		<el-form-item label="课程价格：" prop="price">
			<el-input v-model="lesson.price" type="number"></el-input>
		</el-form-item>
		<el-form-item label="课程类别：" prop="type">
			<el-select v-model="lesson.type">
				<el-option label="高级课程" value="super"></el-option>
				<el-option label="进阶课程" value="middle"></el-option>
				<el-option label="初级课程" value="easy"></el-option>
				<el-option label="React课程" value="react"></el-option>
				<el-option label="Vue课程" value="vue"></el-option>
				<el-option label="Angular课程" value="angular"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="课程售量：" prop="sales">
			<el-input v-model="lesson.sales"></el-input>
		</el-form-item>
		<el-form-item label="课程图片：" prop="img">
			<el-upload
				action="/admin/lesson/upload"
				:show-file-list="false"
				:on-success="uploadFile"
			>
				<el-button type="primary">上传</el-button>
				<span slot="tip">&emsp;请上传图片文件</span>
			</el-upload>
			<img class="lesson-upload-img" :src="lesson.img" alt="">
		</el-form-item>
		<el-form-item label="" props="">
			<el-button type="success" @click="submitData()">提交</el-button>
		</el-form-item>
	</el-form>
</div>
</template>
<script type="text/javascript">
// 引入校验方法
import { checkLessonTitle, checkEmpty } from '../../tools/validator';
export default {
	// 定义数据
	data() {
		// 校验是否为空
		let checkArray = [
			{ validator: checkEmpty, trigger: 'blur' }
		]
		return {
			lesson: {},
			// 校验规则
			rules: {
				title: [
					{ validator: checkLessonTitle, trigger: 'blur' }
				],
				img: checkArray,
				sales: checkArray,
				price: checkArray,
				type: checkArray
			}
		}
	},
	// 组件创建完成，请求数据
	created() {
		// 请求数据
		this.getData();
	},
	// 定义方法
	methods: {
		// 获取数据
		getData() {
			// 解析id
			let { params } = this.$route
			// 发送请求
			this.$http
				.get('/admin/lesson/detail', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 如果返回成功，存储数据
					if (data.errno === 0) {
						this.lesson = data.data;
					} else {
						// 提示错误
						alert(data.msg)
					}
				}) 
		},
		// 上传文件
		uploadFile({ data, errno, msg }) {
			// 上传成功，存储图片
			if (errno === 0) {
				this.lesson.img = data.file;
			} else {
				// 提示用户
				alert(msg)
			}
			// console.log(e)
		},
		// 提交数据
		submitData() {
			// 发送请求
			this.$http
				// post请求
				.post('/admin/lesson/update', this.lesson)
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功，进入列表页
					if (data.errno === 0) {
						// 路由跳转
						this.$router.replace('/lesson/list/1')
					} else {
						// 提示用户
						alert(data.msg);
					}
				})
		}
	},
	// 监听路由变化
	watch: {
		// 路由
		$route() {
			// 请求数据
			this.getData();
		}
	}
}
</script>