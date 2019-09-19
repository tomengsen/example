<template>
<div class="app-lesson-list">
	<h1 class="app-title">课程列表</h1>
	<!-- 渲染卡片 -->
	<el-row class="lesson-container">
		<el-col :span="5" v-for="(item, index) in data" :key="index" :offset="index % 4 === 0 ? 0 : 1">
			<el-card class="lesson-card">
				<img :src="item.img" alt="">
				<h2>{{item.title}}</h2>
				<p>
					<span class="price">￥{{item.price}}</span>
					<span class="type">{{item.type}}</span>
				</p>
				<p class="salces">{{item.sales}}人一起学习</p>
				<div class="btns">
					<!-- <el-button size="small" type="success">修改</el-button> -->
					<router-link class="el-button el-button--success el-button--small" :to="'/lesson/edit/' + item._id">修改</router-link>
					<el-button size="small" type="danger" @click="removeLesson(item._id)">删除</el-button>
				</div>
			</el-card>
		</el-col>
	</el-row>
	<div class="pages">
		<router-link class="el-button is-round" :to="'/lesson/list/' + ($route.params.page < 2 ? 1 : $route.params.page - 1)" tag="span">&larr; 上一页</router-link>
		<router-link class="el-button is-round" :to="'/lesson/list/' + (+$route.params.page + 1)" tag="span">下一页 &rarr;</router-link>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.app-lesson-list {
	.lesson-container {
		padding-left: 20px;
	}
	.lesson-card {
		margin-bottom: 30px;
		font-size: 14px;
		.el-card__body {
			padding: 4px;
		}
		img {
			width: 100%;
		}
		h2 {
			text-align: center;
			font-size: 20px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-weight: normal;
			margin-bottom: 10px;
		}
		p {
			margin: 0 0 10px;
			padding: 0 10px;
		}
		.type {
			float: right;
		}
		.btns {
			padding: 0 10px 10px;
		}
	}
	.pages {
		text-align: center;
		padding: 40px 0 60px;
	}
}
</style>
<script type="text/javascript">
export default {
	// 数据
	data() {
		return {
			data: []
		}
	},
	// 组件创建完成，请求数据
	created() {
		// 获取数据
		this.getData();
	},
	// 封装方法
	methods: {
		getData() {
			// 获取页码
			let { params } = this.$route;
			this.$http
				// get请求
				.get('/admin/lesson/list', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 如果返回成功
					if (data.errno === 0) {
						// 存储数据
						this.data = data.data;
					} else {
						alert(data.msg)
						// 清空页面
						this.data = [];
					}
				})
		},
		// 删除课程
		removeLesson(id) {
			// 通知后端，删除课程
			this.$http
				.post('/admin/lesson/remove', { id })
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功
					if (data.errno === 0) {
						// 刷新页面
						location.reload();
					} else {
						// 提示用户
						alert(data.msg)
					}
				})
		}
	},
	// 监听属性变化
	watch: {
		$route() {
			// 获取数据
			this.getData();
		}
	}
}
</script>