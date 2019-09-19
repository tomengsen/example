var express = require('express');
// 引入页面处理的回调函数
var home = require('../page/home')

// 路由也可以作为中间件定义
var router = new express.Router();
// pc端与移动端页面路由
router.get('/', home)

module.exports = router;