const fs=require('fs');
	fs.readFile('./1.1ceshi.js','utf8',(err,doc)=>{
		console.log('相对路径：');
		console.log(err);
		console.log(doc);
	})
	
	const path=require('path');
	fs.readFile(path.join(__dirname, '1.1ceshi.js'),'utf8',(err,doc)=>{
		console.log('绝对路径：');
		console.log(err);
		console.log(doc);
	})