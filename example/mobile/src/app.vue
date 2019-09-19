<template>
<div>
	<Header></Header>
	<!-- 缓存原有的组件 -->
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
</div>
</template>
<style type="text/css" lang="scss">
// $color: orange;
// body {
// 	color: $color;
// }
body, html {
	background-color: #efefef;
}
* {
	padding: 0;
	margin: 0;
}
</style>
<script type="text/javascript">
// 引入组件
import Header from './components/header';
export default {
	// 注册
	components: { Header },
	// 组件构建完成 
	mounted() {
		console.log(this)
	}
}
</script>