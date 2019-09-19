// 创建路由中间件，然后再index.js中安装
var express = require('express');
// 引入lesson接口
var lesson = require('../action/lesson');

// 路由也可以作为中间件定义
var router = new express.Router();
// 首页接口
router.get('/action/lesson/home', lesson.home)
// 分类接口
router.get('/action/lesson/type', lesson.type)
// 搜索接口
router.get('/action/lesson/search', lesson.search)


module.exports = router;