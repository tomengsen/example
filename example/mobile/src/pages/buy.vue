<template>
<div class="app-buy">
	<div class="price">
		<span class="price-title">课程总价</span>
		<span class="price-num">￥{{$store.state.price}}</span>
	</div>
	<div class="btns">
		<span class="btn-cancel" @click="goback">取消购买</span>
		<span class="btn-buy" @click="buyLessons">立即付款</span>
	</div>
	<div class="lesson-title">已购商品</div>
	<div class="gradient"></div>
	<div class="lesson-container">
		<!-- 创建课程卡片 -->
		<Card v-for="(item, index) in $store.state.lessons" :key="index" :data="item" class="lesson-item"></Card>
	</div>
</div>
</template>
<style type="text/css" lang="scss" scoped>
.app-buy {
	.price {
		background: #fff;
		padding: 40px 20px 20px;
		font-size: 18px;
		.price-num {
			font-size: 36px;
			color: #f30;
		}
	}
	.btns {
		text-align: center;
		padding-bottom: 20px;
		background: #fff;
		span {
			padding: 6px 12px;
			font-size: 15px;
			color: #fff;
			border-radius: 4px;
			background: #999;
			display: inline-block;
			margin: 0 10px;
		}
		.btn-buy {
			background: #f30;
		}
	}
	.lesson-title {
		background: #fff;
		font-size: 24px;
		padding: 0 20px 6px;
	}
	.gradient {
		height: 30px;
		background: linear-gradient(#fff, #efefef);
	}
	.lesson-container {
		padding: 0 20px;
		.lesson-item {
			max-width: 300px;
			width: 100%;
			margin: 0 auto 20px;
		}
	}
}

</style>
<script type="text/javascript">
// 引入card
import Card from '../components/card';
// 定义组件
export default {
	components: { Card },
	// 组件创建完成的时候，让滚动条滚动到顶部
	mounted() {
		// 如果没有商品，要会进入首页
		if (this.$store.state.lessons.length === 0) {
			// 进入首页
			this.$router.replace('/')
		}
		// 滚动条滚动到顶部
		window.scrollTo(0, 0)
	},
	// 方法
	methods: {
		// 返回上一个页面
		goback() {
			this.$router.go(-1);
		},
		// 购买课程
		buyLessons() {
			this.$http
				// post请求
				.post('/action/lesson/buy', this.$store.state.lessons)
				// 监听返回
				.then(({ data }) => console.log(data))
		}
	},
	// 存在期
	updated() {
		// 如果没有数据了，进入首页
		// 如果是购买页面，我们才返回
		// console.log(this.$route.fullPath === '/buy' , this.$store.state.lessons.length === 0)
		if (this.$route.fullPath === '/buy' && this.$store.state.lessons.length === 0) {
			// 进入首页
			// location.hash = '#/'
			// 使用路由切换,此时不要添加#
			this.$router.replace('/')
		}
	}
}
</script>