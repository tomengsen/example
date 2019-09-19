<template>
<div class="app-login">
	<div class="login-content">
		<h2>请您登录</h2>
		<!-- label-width定义labe宽度 -->
		<!-- 通过rules定义校验规则 -->
		<el-form ref="loginForm" :model="login" :rules="rules" label-width="80px">
			<!-- 对用户名属性的校验username -->
			<el-form-item label="用户名" prop="username">
				<el-input v-model="login.username"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" v-model="login.password"></el-input>
			</el-form-item>
			<el-button class="login-submit" @click="submitData" type="success">登录</el-button>
		</el-form>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.app-login {
	background: #efefef;
	position: fixed;
	z-index: 1000;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	.login-content {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 400px;
		box-sizing: border-box;
		background: #fff;
		border-radius: 10px;
		padding: 20px;
		margin: -150px -200px;
		h2 {
			border-bottom: 1px solid #ccc;
			padding: 0 10px 10px;
			text-align: center;
		}
		.login-submit {
			display: block;
			width: 100%;
		}
	}
}
</style>
<script type="text/javascript">
// 引入校验方法
import { checkUserName, checkPassWord } from '../tools/validator'
export default {
	// 数据
	data() {
		// 定义校验方法
		// function checkUserName(filed, value, callback) {
		// 	// console.log(arguments)
		// 	// callback(new Error('error'))
		// 	// console.log(value)
		// 	// 用户名必填
		// 	if (!value) {
		// 		return callback(new Error('用户名是必填的'))
		// 	} 
		// 	// 用户名是字母数字下划线4-10位的
		// 	if (!/^\w{4,10}$/.test(value)) {
		// 		return callback(new Error('用户名是字母数字下划线4-10位的'))
		// 	}
		// }
		// // 校验密码
		// function checkPassWord(filed, value, callback) {
		// 	// 密码是必填的
		// 	if (!value) {
		// 		return callback(new Error('密码是必填的'))
		// 	}
		// 	// 密码必须包含数字以及字母
		// 	if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)) {
		// 		return callback(new Error('密码必须包含数字以及字母'))
		// 	}
		// 	// 密码是4-8位的
		// 	if (!/^.{4,8}$/.test(value)) {
		// 		return callback(new Error('密码是4-8位的'))
		// 	}
		// }
		return {
			login: {
				username: '',
				password: ''
			},
			// 定义校验规则
			rules: {
				// 校验用户名
				username: [
					// 每一个对象是一个校验规则
					// trigger定义什么时候开始校验
					// { required: true, message: '用户名必填', trigger: 'blur' }
					// validater定义校验方法
					{ validator: checkUserName, trigger: 'blur' }
				],
				password: [
					{ validator: checkPassWord, trigger: 'blur' }
				]
			}
		}
	},
	// 定义方法
	methods: {
		// 提交数据去登录
		submitData() {
			// console.log(this.$refs.loginForm)
			// 检测表单是否校验成功
			this.$refs.loginForm.validate((valid) => {
				if (valid) {
					// 开始登录
					this.$http.post('/admin/login', this.login)
						// 监听数据返回
						.then(({ data }) => {
							// 如果成功
							if (data.errno === 0) {
								// 存储用户名
								return this.$store.commit('login', data.data.username)
							}
							// 提示用户
							alert(data.msg)
						})
				} 
				// else {
				// 	// 提示用户
				// 	alert('请输入完成')
				// }
			})
		}
	}
}
</script>