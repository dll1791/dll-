const fs= require('fs');
fs.writeFile('./1.5被写入.html','嘎嘎乱杀',err=>{
	if (err==null) {
		console.log('写入成功');
	}
	else{
		console.log(err);
	}
})