<template>
<div class="app-header">
	<!-- 简便方式 -->
	<!-- <span class="btn-search" @click="isShow = true">搜索</span> -->
	<span class="btn-search" @click="showSearch">搜索</span>
	<h1>爱创课堂授课网站</h1>
	<span class="btn-login">登录</span>
	<div class="search" v-show="isShow">
		<input type="text" placeholder="请输入搜索关键字" v-model="value" @keyup.enter="gotoSearch">
		<span class="btn-cancel" @click="hideSearch">取消</span>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
// 引入样式
@import '../base.scss';
.app-header {
	background: $navColor;
	height: 60px;
	color: #fff;
	display: flex;
	line-height: 60px;
	text-align: center;
	position: relative;
	.btn-search, 
	.btn-login {
		width: 60px;
		font-size: 16px;
	}
	h1 {
		font-size: 22px;
		flex: 1;
	}
	.search {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: #fff;
		padding: 10px 20px;
		display: flex;
		input {
			display: block;
			flex: 1;
			background: #efefef;
			font-size: 14px;
			border: none;
			outline: none;
			padding-left: 20px;
			border-top-left-radius: 20px;
			border-bottom-left-radius: 20px;
		}
		.btn-cancel {
			padding: 0 20px 0 10px;
			color: #666;
			background: #efefef;
			line-height: 40px;
			font-size: 14px;
			border-top-right-radius: 20px;
			border-bottom-right-radius: 20px;
		}
	}
}
</style>
<script type="text/javascript">
export default {
	// 数据
	data() {
		return {
			// 默认隐藏搜索框
			isShow: false,
			// 搜索的数据
			value: ''
		}
	},
	// 方法
	methods: {
		// 显示搜索框
		showSearch() {
			this.isShow = true;
		},
		// 隐藏搜索框
		hideSearch() {
			this.isShow = false;
		},
		// 进入搜索页
		gotoSearch() {
			// 更改hash
			location.hash = '#/search/' + this.value;
			// 清空搜索词
			this.value = '';
		}
	}
}
</script>