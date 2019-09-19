<template>
<div class="app-shopping-car">
	<div class="num">共￥{{$store.state.price}}元</div>
	<div class="ready" @click="showBuyPage">选好了</div>
</div>	
</template>
<style type="text/css" lang="scss">
.app-shopping-car {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 60px;
	line-height: 60px;
	display: flex;
	color: #fff;
	text-align: center;
	font-size: 18px;
	.num {
		flex: 1;
		background: #484d54;
	}
	.ready {
		width: 100px;
		background: #fe2947;
	}
}
</style>
<script type="text/javascript">
export default {
	// 方法
	methods: {
		// 进入购买页面
		showBuyPage() {
			// 如果没有购买商品。不能进入购买页面
			if (this.$store.state.price === 0) {
				alert('请购买课程！')
				return;
			}
			// 本质就是切换路由
			location.hash = '#/buy'
		}
	}
}
</script>