// 作用：admin中的所有接口方法，统一收集在一起，并暴露出来
// 首页
var admin = require('./admin')
var login = require('./manager/login')
var logout = require('./manager/logout')
var userinfo = require('./manager/userinfo')
var managerUpdate = require('./manager/update')
// 课程模块
var lessonUpload = require('./lesson/upload')
// 创建课程
var lessonCreate = require('./lesson/create')
// 课程列表
var lessonList = require('./lesson/list')
// 移除课程
var lessonRemove = require('./lesson/remove')
// 课程详情
var lessonDetail = require('./lesson/detail')
// 更新课程
var lessonUpdate = require('./lesson/update');

module.exports = { 
	// 后台首页接口
	admin, 
	// 管理员相关的接口
	login, logout, userinfo, managerUpdate,
	// 课程模块接口
	lessonUpload, lessonCreate, lessonList, lessonRemove, lessonDetail, lessonUpdate
}