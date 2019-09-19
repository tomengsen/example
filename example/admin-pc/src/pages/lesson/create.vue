<template>
<div class="app-lesson-create">
	<h1 class="app-title">创建课程</h1>
	<!-- 1 设置label -->
	<!-- 2 修改input元素 -->
	<!-- 3 v-model绑定数据 -->
	<!-- 4 设置label -->
	<!-- 5 为表单绑定数据model -->
	<!-- 6 定义校验规则 -->
	<!-- 7 设置prop属性 -->
	<!-- 8 绑定事件，校验表单是否合法 -->
	<el-form :model="lesson" ref="lesson" :rules="rules" label-width="150px">
		<el-form-item prop="title" label="课程标题：">
			<el-input v-model="lesson.title"></el-input>
		</el-form-item>
		<el-form-item prop="price" label="课程价格：">
			<el-input v-model="lesson.price" type="number"></el-input>
		</el-form-item>
		<el-form-item prop="type" label="课程类别：">
			<el-select v-model="lesson.type">
				<el-option label="高级课程" value="super"></el-option>
				<el-option label="中级课程" value="middle"></el-option>
				<el-option label="初级课程" value="easy"></el-option>
				<el-option label="react课程" value="react"></el-option>
				<el-option label="vue课程" value="vue"></el-option>
				<el-option label="angular课程" value="angular"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item prop="sales" label="课程售量：">
			<el-input v-model="lesson.sales"></el-input>
		</el-form-item>
		<el-form-item prop="img" label="课程图片：">
			<!-- 通过on-success方法，监听上传成功 -->
			<el-upload
				action="/admin/lesson/upload"
				:show-file-list="false"
				:on-success="uploadFileSuccess"
			>
				<el-button type="primary">上传</el-button>
				<span slot="tip">&emsp;请上传图片文件</span>
			</el-upload>
			<img class="lesson-upload-img" :src="lesson.img" alt="">
		</el-form-item>
		<el-form-item>
			<el-button type="success" @click="submitData()">提交</el-button>
		</el-form-item>
	</el-form>
</div>
</template>
<style type="text/css" lang="scss">
// .app-lesson-create {
// 	.lesson-upload-img {
// 		margin-top: 10px;
// 	}
// }
</style>
<script type="text/javascript">
// 引入校验方法
import { checkLessonTitle, checkEmpty } from '../../tools/validator'
export default {
	// 数据
	data() {
		// 定义校验规则数组
		let validateArray = [
			// { required: true, message: '请输入完成', trigger: 'blur' },
			{ validator: checkEmpty, trigger: 'blur' }
		]
		return {
			lesson: {
				img: '',
				sales: '',
				type: '',
				price: '',
				title: ''
			},
			rules: {
				img: validateArray,
				sales: validateArray,
				type: validateArray,
				price: validateArray,
				title: [
					// { required: true, message: '请输入完成', trigger: 'blur' },
					{ validator: checkLessonTitle, trigger: 'blur' }
				]
			}
		}
	},
	// 定义方法
	methods: {
		// 提交数据
		submitData() {
			// 校验表单是否合法
			this.$refs.lesson.validate(valid => {
				// 如果合法
				if (valid) {
					// 提交数据
					this.$http.post('/admin/lesson/create', this.lesson)
						// 监听数据返回
						.then(({ data }) => {
							// console.log(data)
							// 如果成功。进入列表页
							if (data.errno === 0) {
								return this.$router.replace('/lesson/list/1')
							} 
							// 提示用户创建失败的原因
							alert(data.msg)
						})
				} else {
					// 不合法，提示用户输入完成
					alert('请输入完整')
				}
			})
		},
		// 图片上传成功
		uploadFileSuccess({ data, errno, msg }) {
			// console.log(data, errno, msg)
			// 如果上传成功
			if (errno === 0) {
				// 展示图片
				return this.lesson.img = data.file;
			}
			alert(msg)
		}
	}
}
</script>