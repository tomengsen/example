<template>
<div>
	<h1 class="app-title">修改密码</h1>
	<!-- 1 绑定数据 -->
	<!-- 2 为el-form设置model -->
	<!-- 3 为el-form-item设置props属性 -->
	<!-- 4 设置label以及宽度 -->
	<!-- 5 绑定规则 -->
	<!-- 6 绑定提交事件 -->
	<el-form :model="manager" ref="form" :rules="rules" label-width="150px" class="main-form">
		<el-form-item prop="username" label="用户名">
			<el-input v-model="manager.username"></el-input>
		</el-form-item>
		<el-form-item prop="password" label="密码">
			<el-input v-model="manager.password"></el-input>
		</el-form-item>
		<el-form-item prop="passwordAgain" label="重复密码">
			<el-input v-model="manager.passwordAgain"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="success" @click="submitData()">提交</el-button>
			<!-- 重置已经输入的数据 -->
			<el-button type="success" @click="$refs.form.resetFields()">重置</el-button>
		</el-form-item>
	</el-form>
</div>
</template>
<style type="text/css" lang="scss">
.main-form {
	// width: 650px;
}
</style>
<script type="text/javascript">
// 引入校验算法库
import { checkUserName, checkPassWord, checkPasswordAgain } from '../tools/validator';
export default {
	// 数据
	data() {
		return {
			// 表单数据
			manager: {
				username: '',
				password: '',
				passwordAgain: ''
			},
			// 定义规则
			rules: {
				// 用户名
				username: [
					{ validator: checkUserName, trigger: 'blur' }
				],
				// 密码
				password: [
					{ validator: checkPassWord, trigger: 'blur' }
				],
				// 重复密码
				passwordAgain: [
					// 为了在方法中，能够访问密码数据，我们要绑定作用域
					{ validator: checkPasswordAgain.bind(this), trigger: 'blur' }
				]
			}
		}
	},
	// 定义方法
	methods: {
		// 提交数据
		submitData() {
			console.log(this.$refs.form)
			// 查看检测结果
			this.$refs.form.validate(valid => {
				// 如果成功，发送请求
				if (valid) {
					this.$http
						// 提交post请求
						.post('/admin/manager/update', {
							username: this.manager.username,
							password: this.manager.password
						})
						// 监听结果
						.then(({ data }) => {
							console.log(data)
							// 如果成功
							if (data.errno === 0) {
								// 刷新页面
								location.reload()
								
							} else {
								// 如果失败了。提示用户
								alert(data.msg)
							}
						})
				} else {
					// 不合法提示用户
					alert('请输入完整')
				}
			})
		}
	}
}
</script>