// 引入库
import { createStore, combineReducers, applyMiddleware } from 'redux';
// 引入reducer
import { login } from '../reducer/login';
// 引入redux对react的拓展
import { connect } from 'react-redux';
// 异步消息
import thunkMiddleware from 'redux-thunk';

// 定义state映射给props的方法
function mapStateToProps(state) {
	return { state }
}
// 定义dispatch映射给props的方法
function mapDispatchToProps(dispatch) {
	return { dispatch }
}
// 处理组件的方法
export let deal = connect(mapStateToProps, mapDispatchToProps)

// 定义store
// export let store = createStore(combineReducers({ login }))

// 定义异步store
// // 拓展createstore方法
// let newCreateStore = applyMiddleware(thunkMiddleware)(createStore);
// // 创建store
// export let store = newCreateStore(combineReducers({login}))
// 写在一起
export let store = applyMiddleware(thunkMiddleware)(createStore)(combineReducers({login}))