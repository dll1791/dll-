//webpack配置文件
const path = require('path')//处理路径
const HtmlWebpackPlugin = require('html-webpack-plugin')//预览页面对象
const htmlPlguin = new HtmlWebpackPlugin({
  template: './src/index.html',//要复制的页面地址
  filename: 'index.html'//输出的页面地址
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')//导入插件处理vue

module.exports = {
  // 编译模式
  mode: 'development', // development  production
  entry: path.join(__dirname, './src/index.js'),//打包文件的路径(绝对路径)
  //__dirname表示当前文件的目录
  output: {
    path: path.join(__dirname, './dist'), // 输出文件的存放路径(绝对路径)
    filename: 'bundle.js' // 输出文件的名称
  },
  plugins: [htmlPlguin, new VueLoaderPlugin()],//预览文件和vue的配置信息
 
  //loader加载器配置 test表示匹配文件的类型(正则表达式)use代表要调用的loader
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },//处理css
		//postcss-loader处理浏览器兼容性
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },//处理less
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },//处理scss
      { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=16941' },//处理图片和文字
		//limit代表限制图片的大小，只有小于limit(16941)子节的图片才能被处理为base64图片
		//base64可以使图片加载的更快
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },//处理js高级语法
	  //exclude为排除项，表示 babel-loader 不需要处理node_modules中的 js文件
	  
      { test: /\.vue$/, use: 'vue-loader' }//处理vue
    ]
  }
}
