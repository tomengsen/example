// 默认参数方法
let fn = () => {};
/**
 * 图片加载机
 **/ 
export default class ImageLoader {
	/***
	 * 构造函数
	 * @urls 		所有图片地址数组
	 * @sucess 		加载完一张图片成功，执行的回调函数
	 * @fail		加载完一种图片失败，执行的回调函数
	 * @done 		所有资源都加载完成，执行的回调函数
	 **/ 
	constructor(urls = [], success = fn, fail = fn, done = fn) {
		// 存储这些数据
		this.urls = urls;
		this.success = success;
		this.fail = fail;
		this.done = done;
		// 已经加载完成的图片数量
		this.num = 0;
		// 执行加载
		this.init();
	}
	// 加载urls中的所有图片
	init() {
		// 所有图片数量
		// let len = this.urls.length;
		// while (len--) {
		// 	this.loadImage(len)
		// }
		// 使用数组迭代器去加载
		this.urls.forEach(item => this.loadImage(item));
	}
	/***
	 * 加载图片方法
	 * @url 	加载图片的地址
	 **/ 
	loadImage(url) {
		// 定义图片加载器
		let img = new Image();
		// 加载成功
		img.onload = () => {
			// 加载完成，执行的方法
			this.loaded()
		}
		// 加载失败
		img.onerror = () => {
			// 加载完成，执行的方法
			this.loaded(true)
		}
		// 加载
		img.src = url;
	}
	/***
	 * 每次图片加载完成，执行的方法
	 * @isFail 		是否加载失败
	 **/ 
	loaded(isFail) {
		// 不论是加载成功，还是加载失败，
		this.num++;
		// 图片总数
		let total = this.urls.length;
		// 如果失败了
		if (isFail) {
			// 执行加载失败方法
			this.fail(this.num, total)
		} else {
			// 加载成功。执行加载成功的回调函数
			this.success(this.num, total)
		}
		// 所有图片，都加载完成，执行done方法
		if (this.num === total) {
			this.done(this.num, total)
		}
	}
} 