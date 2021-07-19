const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// 处理静态资源
app.use(express.static('public'))
// 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers', 'mytoken');
  next();
});
// 启动监听
app.listen(3000, () => {
  console.log('running...')
})

// 第一组路由
app.get('/data', (req, res) => {
  res.send('Hello data!')
})
app.get('/data1', (req, res) => {
    res.send('Hello data1!')
})
app.get('/data2', (req, res) => {
  res.send('Hello data2!')
})

//第二组路由 promise
app.get('/a1', (req, res) => {
	setTimeout(function(){
		res.send('this is a1!')
	},1000)
})
app.get('/a2', (req, res) => {
	setTimeout(function(){
		res.send('this is a2!')
	},2000)
})
app.get('/a3', (req, res) => {
	setTimeout(function(){
		res.send('this is a3!')
	},3000)
})

app.get('/fdata', (req, res) => {
  res.send('this is fdata!')
})
//fetch
app.get('/books', (req, res) => {
  res.send('this is books! 前台传的id值是：'+req.query.id)
})
app.get('/books1/:id', (req, res) => {
  res.send('this is books1! 前台传的id值是：'+req.params.id)
})
app.delete('/books2/:id', (req, res) => {
  res.send('this is books2! 前台传的id值是：'+req.params.id)
})
app.post('/books3', (req, res) => {
  res.send('this is books3! post请求前台传的值是：'+req.body.uname+'----'+req.body.pwd)
})
app.post('/books4', (req, res) => {
  res.send('this is books4! post请求前台传的json值是：'+req.body.uname+'----'+req.body.pwd)
})

app.put('/books5/:id', (req, res) => {
  res.send('this is books5! put请求前台传的json值是：'+ req.params.id+'---'+req.body.uname+'---'+req.body.pwd)
})

app.get('/json', (req, res) => {
  res.json({
	  uname:'dll json',
	  age:'22',
	  gender:'男'
  });
})
//axios
app.get('/adata', (req, res) => {
  res.send('hello axios');
})
app.get('/axios', (req, res) => {
  res.send('axios get 传递参数：'+req.query.id);
})
app.get('/axios1/:id', (req, res) => {
  res.send('axios1 get 传递参数：'+req.params.id);
})
app.delete('/axios', (req, res) => {
  res.send('axios get 传递参数：'+req.query.id);
})
app.post('/axios', (req, res) => {
  res.send('axios post传递参数：'+req.body.uname+'---'+req.body.pwd);
})
app.put('/axios/:id', (req, res) => {
  res.send('axios put传递参数：'+req.params.id+'---'+req.body.uname+'---'+req.body.pwd);
})
app.get('/axios-json', (req, res) => {
  res.json({
	  uname:'戴林朗',
	  age:'22'
  });
  
  app.get('/async1', (req, res) => {
    res.send('hello');
  })
  app.get('/async2', (req, res) => {
    res.send(req.query.info+' async');
  })
})