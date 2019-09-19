// 收集所有lesson目录下的接口
var home = require('./home')
var type = require('./type')
var search = require('./search')

// 暴露接口
module.exports = {
	home, type, search
}