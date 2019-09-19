// 引入模块
var express = require('express');
// 引入处理方法的admin模块
var admin = require('../admin');
// 定义路由中间件
var router = new express.Router();

router
	// 后台管理系统首页
	.get('/admin', admin.admin)
	// 退出
	.get('/admin/logout', admin.logout)
	// 获取用户信息
	.get('/admin/userinfo', admin.userinfo)
	// 登录
	.post('/admin/login', admin.login)
	// 修改管理员信息
	.post('/admin/manager/update', admin.managerUpdate)
	// 课程模块
	// 获取课程列表
	.get('/admin/lesson/list', admin.lessonList)
	// 获取课程信息
	.get('/admin/lesson/detail', admin.lessonDetail)
	// 上传图片
	.post('/admin/lesson/upload', admin.lessonUpload)
	// 创建课程
	.post('/admin/lesson/create', admin.lessonCreate)
	// 删除课程
	.post('/admin/lesson/remove', admin.lessonRemove)
	// 更新课程
	.post('/admin/lesson/update', admin.lessonUpdate)

// 暴露接口
module.exports = router;