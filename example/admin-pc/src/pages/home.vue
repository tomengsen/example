<template>
<el-container class="app-home">
	<el-header>
		<h1>爱创课堂后台管理系统</h1>
		<div class="status">
			<span>您好 </span>
			<span class="user">{{$store.state.username}}</span>
			<span> ，欢迎回来！</span>
			<a href="/admin/logout">退出</a>
		</div>
	</el-header>
	<el-container>
		<el-aside>
			<el-menu>
				<el-submenu v-for="(item, index) in menus" :key="index" :index="String(index)">
					<!-- 定义标题 -->
					<template slot="title">
						<i class="el-icon-menu"></i>
						<span>{{item.title}}</span>
					</template>
					<!-- 循环嵌套循环 -->
					<el-menu-item-group>
						<el-menu-item v-for="(childItem, childIndex) in item.children" :index="index + '-' + childIndex" :key="childIndex">
							<!-- router-link组件可以切换路由 -->
							<router-link tag="span" :to="childItem.link" >{{childItem.title}}</router-link>
						</el-menu-item>
					</el-menu-item-group>
					<!-- <span slot="title">{{item.title}}</span> -->
				</el-submenu>
			</el-menu>
		</el-aside>
		<el-container>
			<el-main>
				<!-- 子路由渲染位置 -->
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</el-container>
</template>
<style type="text/css" lang="scss">
html, body {
	padding: 0;
	margin: 0;
	background: #efefef;
	height: 100%;
}
.app-home {
	height: 100%;
	.el-header {
		background: #fff;
		margin-bottom: 10px;
		padding: 0 40px;
		display: flex;
		h1 {
			flex: 1;
		}
		.status {
			padding-top: 36px;
			width: 400px;
			text-align: right;
			font-size: 14px;
		}
	}
	.el-aside {
		background: #fff;
		margin-right: 10px;
		width: 250px!important;
	}
	.el-main {
		background: #fff;
	}
	// 这里的样式希望在各个组件中复用
	// 标题的样式
	.app-title {
		margin: 0 auto 30px;
		padding: 10px 20px;
		font-size: 26px;
		font-weight: normal;
		border-bottom: 1px solid #ccc;
	}
	.el-input__inner,
	.el-select {
		width: 50%;
		.el-input__inner {
			width: 100%;
		}
	}
	.lesson-upload-img {
		margin-top: 10px;
	}
}
</style>
<script type="text/javascript">
export default {
	// 绑定数据
	data() {
		return {
			// 导航菜单数据
			menus: [
				{
					title: '课程模块',
					children: [
						{ title: '创建课程', link: '/lesson/create' },
						{ title: '课程列表', link: '/lesson/list/1' }
					]
				},
				{
					title: '用户模块',
					children: [
						{ title: '创建用户', link: '/user/create' },
						{ title: '用户列表', link: '/user/list/1' }
					]
				}
			]
		}
	}
}
</script>