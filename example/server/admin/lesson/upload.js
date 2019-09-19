// 引入上传文件的模块
var formidable = require('formidable');
// 引入配置
var consts = require('../../consts');
// 引入path模块
var path = require('path');
// 移动文件
var fs = require('fs');
// 获取所有消息对象
var msg = consts('MESSAGE');

// 暴露接口
module.exports = (req, res) => {
	// 实例化文件上传解析对象
	var form = new formidable.IncomingForm();
	// 定义缓存目录
	form.uploadDir = consts('UPLOAD_CACHE_DIR');
	// 解析上传的数据
	form.parse(req, (err, field, files) => {
		// 如果有错误，提示用户
		if (err) {
			return res.json(msg.uploadFileError)
		}
		// 将图片移动到static/upload目录下
		// 定义图片新的路径名称
		let filePath = consts('UPLOAD_SAVE_DIR') + String(Math.random()).slice(2, 12) + String(Math.random()).slice(2, 12) + path.extname(files.file.name)
		// 重命名文件
		fs.rename(files.file.path, path.join(process.cwd(), filePath), (err) => {
			// 如果出现错误，提示用户
			if (err) {
				return res.json(msg.renameFileError)
			}
			// 成功了要返回给用户
			res.json({
				errno: 0,
				data: {
					file: filePath
				}
			})
		})
		// console.log(filePath)
	})
	// console.log(formidable)
}