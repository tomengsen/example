// 安装vuex
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
// 安装
Vue.use(Vuex)

// 创建store并暴露接口
export default new Store({
	// 数据
	state: {
		// 课程总价
		price: 0,
		// 已购课程数组
		lessons: []
	},
	// 同步消息
	mutations: {
		// 同步消息
		// addPrice(state, price) {
		// 	state.price += price;
		// }
		// 向购物车添加课程
		addLesson(state, lesson) {
			// 过滤掉课程价格是NaN
			if (Object.is(+lesson.price, NaN)) {
				alert('该课程无法购买')
				return;
			}
			// 如果已经购买了。就不能再次购买了
			if (state.lessons.find(item => item._id === lesson._id)) {
				alert('该课程已经购买了，请不要重复购买！');
				return;
			}
			// 可以购买
			// 更新价格
			state.price += +lesson.price;
			// 更新课程数组
			state.lessons.push(lesson);
			// console.log('addLesson')
		},
		// 从购物车中，将课程移除
		removeLesson(state, lesson) {
			// 过滤掉NaN
			if (Object.is(+lesson.price, NaN)) {
				alert('该课程价格不存在');
				return;
			}
			// 数组中移除一个成员
			// 获取成员索引值，用splice方法删除成员
			// 过滤出_id不相等的成员。
			state.lessons = state.lessons.filter(item => item._id !== lesson._id)
			// 更新价格
			state.price -= lesson.price;
			// console.log('removeLesson')
		}
	}
})