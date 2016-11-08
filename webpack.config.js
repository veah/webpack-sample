var webpack = require('webpack')

module.exports = {
	devtool: 'eval-source-map',

	entry: __dirname + "/app/main.js",//入口文件位置
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},

	module:{
		//loaders need to be installed by npm
		loaders:[
			{
				test: /\.json$/,
				loader:"json"
			},
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
			},
			{
				test:/\.css$/,
				loader:'style!css?modules'
			},
			{
				test:/\.scss$/,
				loader:'styles!css!sass'
			}
			
		]
	},

	//在plugin数组中添加插件
	plugins: [
		new webpack.BannerPlugin("Copyright Balah Balah")
	],

	devServer: {
		contentBase: "./public",//本地服务器所加载的页面所在目录
		port: "3000",
		colors: true,//终端输出结果为彩色
		historyApiFallback:true,
		inline:true //实时刷新
	}
}
