<template>
<div class="app">
	<!-- <h1>app -- {{$store.state.username}}</h1>
	<el-button type="success">hello</el-button> -->
	<!-- 根路由渲染位置 -->
	<!-- 没有登录过，不要创建页面 -->
	<router-view v-if="$store.state.username"></router-view>
	<!-- 否则显示登录页面 -->
	<Login v-else></Login>
</div>
</template>
<style type="text/css">
.app {
	height: 100%;
}
</style>
<script type="text/javascript">
import Login from './pages/login';
export default {
	// 注册组件
	components: { Login },
	// 组件创建完成，开始检测
	created() {
		this.$http
			// 获取用户信息
			.get('/admin/userinfo')
			// 存储数据
			.then(({ data }) => {
				// 如果成功
				if (data.errno === 0) {
					// 存储用户名
					return this.$store.commit('login', data.data.username)
				}
				// 否则提示错误
				// alert(data.msg)
			})
	}
}
</script>