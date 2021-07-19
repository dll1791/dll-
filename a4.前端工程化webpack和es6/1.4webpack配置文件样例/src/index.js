import $ from 'jquery'
// jquery需要通过npm 安装
import './css/1.css'
import './css/1.less'
import './css/1.scss'

$(function() {
  $('li:odd').css('backgroundColor', 'blue')
  $('li:even').css('backgroundColor', 'lightblue')
})

class Person {
  static info = 'aaa'
}

console.log(Person.info)

// -----------------------------------------------
//	先运行npm i vue -s 安装vue
import Vue from 'vue'
// 导入单文件组件
import App from './components/App.vue'

const vm = new Vue({
  el: '#app',
  render: h => h(App)
  //将App组件渲染到el绑定的区域中
})
