<template>
<div class="app-card">
	<img :src="data.img" alt="">
	<div class="card-content">
		<h2>{{data.title}}</h2>
		<p>
			<span class="sales">{{data.sales}}人与你一起学习</span>
			<span class="price">￥{{data.price}}</span>
			<span :class="data.hasBuy ? 'card-btn has-buy' : 'card-btn'" @click="buyLesson">{{data.hasBuy ? '取消' : '购买'}}</span>
		</p>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.app-card {
	border-radius: 10px;
	overflow: hidden;
	img {
		width: 100%;
	}
	.card-content {
		padding: 15px 10px 20px;
		background: #fff;
		color: #666;
		font-size: 12px;
		h2 {
			font-size: 20px;
			color: #000;
			margin-bottom: 10px;
		}
		p {
			display: flex;

		}
		.sales {
			flex: 1;
		}
		.price {
			margin-right: 5px;
			color: #f30;
			font-size: 16px;
		}
		.card-btn {
			color: #fff;
			background: #f30;
			padding: 4px 8px;
			border-radius: 3px;
			display: inline-block;
			position: relative;
			top: -2px;
		}
		.has-buy {
			background: #efefef;
			color: #666;
		}
	}
}
</style>
<script type="text/javascript">
export default {
	// 注册属性数据
	props: [ 'data' ],
	// 方法
	methods: {
		// 购买课程
		buyLesson() {
			// 购买课程, 
			// 购买课程在修改属性之前还是之后发布消息，消息名称正好相反
			this.$store.commit(this.data.hasBuy ? 'removeLesson' : 'addLesson', this.data)
			// 颠倒hasBuy的属性值
			// 数据丢失
			// this.data.hasBuy = !this.data.hasBuy;
			// 避免数据丢失
			this.$set(this.data, 'hasBuy', !this.data.hasBuy)
			// console.log(this.data.hasBuy)
			// // 购买课程
			// this.$store.commit(this.data.hasBuy ? 'addLesson' : 'removeLesson', this.data)
		}
	}
}
</script>