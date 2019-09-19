<template>
<div class="app-home">
	<div class="menu">
		<router-link v-for="(item, index) in menu" :key="index" :to="'/type/' + item.id">{{item.text}}</router-link>
	</div>
	<!-- 课程卡片 -->
	<div class="card-container">
		<!-- 使用组件，添加class属性的时候，vue会自动为组件添加类，不需要在子组件中接收 -->
		<Card v-for="(item, index) in data" :key="index" :data="item" class="card-item"></Card>
	</div>
	<!-- 购物车 -->
	<ShoppingCar></ShoppingCar>
</div>
</template>
<style type="text/css" lang="scss">
.app-home {
	.menu {
		background: #fff;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		padding: 0 20px;
		display: flex;
		a {
			flex: 1;
			color: #666;
			text-decoration: none;
			text-align: center;
			border-bottom: 3px solid transparent;
			&.router-link-active {
				color: #f30;
				border-bottom-color: #f30;
			}
		}
	}
	.card-container {
		padding: 30px 20px 80px;
		.card-item {
			max-width: 300px;
			margin: 0 auto 20px;
		}
	}
}
</style>
<script type="text/javascript">
// 引入卡片组件
import Card from '../components/card';
// 引入购物车组件
import ShoppingCar from '../components/shoppingcar';
export default {
	// 注册组件
	components: { Card, ShoppingCar },
	// 绑定数据
	data() {
		return {
			// 导航栏
			menu: [
				{ id: 'super', text: '高级课程' },
				{ id: 'middle', text: '进阶课程' },
				{ id: 'easy', text: '初级课程' }
			],
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
		// 获取新的数据
		getData() {
			// 首页和分类页面的接口地址不一样
			let url = '';
			// 如果是分类页面
			if (this.$route.fullPath.indexOf('/type/') === 0 && this.$route.params.id) {
				// 分类页面地址
				url = '/action/lesson/type?id=' + this.$route.params.id
			} else {
				// 首页地址
				url = '/action/lesson/home';
			}
			this.$http
				// get请求
				.get(url)
				// 查看数据
				.then(({ data }) => {
					// 如果返回成功，存储数据
					if (data.errno === 0) {
						// 如果首页课程数据在购物车中，要设置为购买状态
						data.data.forEach(item => {
							// 如果在购物车中
							if (this.$store.state.lessons.find(buyItem => buyItem._id === item._id)) {
								// 设置为已经购买的状态
								item.hasBuy = true;
							}
						})
						// 更新数据
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
	// 如果路由改变，也要发送请求
	watch: {
		// 路由参数的改变
		$route() {
			// 在首页或者分类页面中，才能发送请求
			if (this.$route.fullPath === '/' || this.$route.fullPath.indexOf('/type/') === 0) {
				// 请求数据
				this.getData();
			}
		}
	}
}
</script>