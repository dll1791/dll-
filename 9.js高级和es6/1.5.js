let that; 
class Tab{
	constructor(id) {
		//获取元素
		that=this;
	    this.main =document.querySelector(id);
		this.add = this.main.querySelector('.tabadd');//添加按钮
		this.ul=this.main.querySelector('.fisrstnav ul:first-child')//li的父元素 
		this.fsection=this.main.querySelector('.tabscon');//section 父元素
		this.init();//初始化
	}
	init(){
		this.updateNode();
		//init:初始化让相关的元素绑定事件
		this.add.onclick=that.addTab;//给+绑定事件
		for(var i=0;i<this.lis.length;i++){
			this.lis[i].index=i;//给每一个小li添加一个属性index,每个index存着当前的索引号
			this.lis[i].onclick=this.toggleTab;
			this.remove[i].onclick=this.removeTab;
			this.spans[i].ondblclick=this.editTab;
			this.sections[i].ondblclick=this.editTab;
		}
	}
	toggleTab(){
		//切换
		that.clearClass();
		this.className='liactive';
		 that.sections[this.index].className='conactive';
	}
	addTab(){
		var rd=Math.random().toFixed(2);
		//添加  1.创建li和section  2. 添加到html中
		that.clearClass();
		var li='  <li class="liactive"><span>新标签'+rd+'</span><span class="iconfont icon-guanbi"></span></li>';
		that.ul.insertAdjacentHTML('beforeend',li);//把元素添加到父元素
		var section='<section class="conactive">新元素'+rd+'</section>';
		that.fsection.insertAdjacentHTML('beforeend',section) ;
		that.init();//将新节点绑定事件
	}
	updateNode(){
		// 重新获取元素
		this.lis =this.main.querySelectorAll("li");//指定是 main下面的li其他的不管
		this.sections=this.main.querySelectorAll('section');//内容
		//获取删除元素
		this.remove=this.main.querySelectorAll('.icon-guanbi');
		//获取标签
		this.spans=this.main.querySelectorAll('.fisrstnav li span:first-child');
	}
	removeTab(e){
		e.stopPropagation(); //防止冒泡
		//删除
		var index=this.parentNode.index;
	//	console.log(document.querySelector('.liactive')	);
		that.lis[index].remove(); //remove 可以直接删除指定的元素
		that.sections[index].remove();
		//删除后，让删除的前一个处于选定状态
		if(that.lis[index].className!='liactive')
		return;//.liactive是选定状态，如果这个元素有选定状态就返回不触发下面的操作了
		index--;
		if(index>=0){
			that.lis[index].onclick();//click()和onclick()都可以
		}
	//	that.lis[index]&&that.lis[index].onclick()//这样写也可以实现效果
	//当我们删除的不是绑定状态的元素时，让绑定状态保持不变
		
		that.init();//元素个数每次发生变化时都需要init重新获取元素
	}
	editTab(){
		//修改
		//取消选中效果
		var str=this.innerHTML;//这里的this是span
		 window.getSelection ? window.getSelection().removeAllRanges(): document.selection.empty();
		this.innerHTML='<input type="text"/>';
		var input=this.children[0];
		input.value=str;//input是文本
		input.select();//选中文本
		//当我们离开文本框就把文本框中的值给input
		input.onblur=function(){
			this.parentNode.innerHTML=this.value;//this是input
		}
		input.onkeyup=function(e){//e指的是这个事件
			if(e.keyCode==13){
				this.onblur();//因为前面给焦点事件绑定了个方法所以
				//可以直接这样写，就相当于调用了绑定的方法
			}
		}
		
	}
	clearClass(){
		 //清除css效果
		 for(var i=0;i<this.lis.length;i++){
			 this.lis[i].className='';
			 this.sections[i].className='';
		 }
	}
}
var tab=new Tab('#tab');