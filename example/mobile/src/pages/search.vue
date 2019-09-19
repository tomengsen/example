<template>
<div class="app-search">
	<!-- 创建课程卡片 -->
	<div class="lesson-container">
		<Card v-for="(item, index) in data" :key="index" :data="item" class="lesson-item"></Card>
	</div>
	<!-- 购物车组件 -->
	<ShoppingCar></ShoppingCar>
</div>
</template>
<style type="text/css" lang="scss">
.lesson-container {
	padding: 30px 20px 80px;
	.lesson-item {
		max-width: 300px;
		width: 100%;
		margin: 0 auto 20px;
	}
}
</style>
<script type="text/javascript">
// 引入卡片组件
import Card from '../components/card';
// 购物车组件
import ShoppingCar from '../components/shoppingcar';
export default {
	// 注册
	components: { Card, ShoppingCar },
	// 初始化数据
	data() {
		return {
			// 课程数据
			data: []
		}
	},
	// 组件创建完成，请求数据
	created() {
		// 获取数据
		this.getData();
	},
	// 方法
	methods: {
		// 获取数据方法
		getData() {
			// 解构参数
			let { params } = this.$route;
			this.$http
				// get请求
				// .get('/action/lesson/search?id=' + this.$route.params.id)
				.get('/action/lesson/search', {
					// params: this.$route.params.id,
					params
				})
				// 监听数据返回
				.then(({ data }) => {
					// 如果返回成功
					if (data.errno === 0) {
						// 如果搜索出的结果在购物车中，要设置为购买状态
						data.data.forEach(item => {
							// 如果在购物车中
							if (this.$store.state.lessons.find(buyItem => buyItem._id === item._id)) {
								// 设置为已经购买的状态
								item.hasBuy = true;
							}
						})
						// 存储数据
						this.data = data.data;
					} else {
						// 提示用户
						alert(data.msg)
						// 清空数据
						this.data = [];
					}
				})
		}
	},
	// 监听属性的变化
	watch: {
		// 如果路由参数变化了。我们要发送新的请求
		$route() {
			// 在搜索页面发送该请求
			if (this.$route.fullPath.indexOf('/search/') === 0) {
				// 获取数据
				this.getData();
			}
		}
	}
}
</script>