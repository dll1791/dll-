const fs=require('fs');
fs.readFile('./1.3 A模块.js','utf8',(err,doc)=>{
	console.log(err);
	console.log(doc);
});