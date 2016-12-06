window.onload = function() {

	var zixun = document.getElementById('zixun');		
	//获取菜单栏的隐藏目录节点	
	var secNav = document.getElementById('secNav');
	// 获取主内容
	var mainTop = document.getElementById('mainTop');

	// 文本框获得焦点事件显示提示内容
	zixun.onmouseenter = function(e) {		
		secNav.style.display = 'block';
	}	
	// document单击事件隐藏提示内容
	document.onclick = function(e) {
		secNav.style.display = 'none';		
	}
	// // 模态层
	// var modal = document.getElementById('modal');
	// // 内容区
	// var modalContainer = document.getElementById('modalContainer');
	// // 关闭按钮
	// var closeBtn = document.getElementById('closeBtn');
	// // 打开按钮
	// var fastLogin = document.getElementById('fastLogin');

	// 点击遮罩区关闭模态层
	// modal.onclick = function() {

	// 	this.style.display = 'none';				
	// }

	// 点击内容区阻止事件冒泡
	// modalContainer.onclick = function(e) {
	// 	e = e || window.event;
	// 	e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
	// }

	// // ESC键盘事件关闭模态层
	// document.onkeyup = function(e) {				
	// 	e = e || window.event;

	// 	if(e.keyCode == 27)
	// 		modal.style.display = 'none'; 
	// }

	// // 打开模态层
	// fastLogin.onclick = function() {	
	// 	modal.style.display = 'block';
		
	// 	// 窗口不可滚动
	// 	// document.body.style.overflow = 'hidden';
	// }

	// //关闭模态层
	// closeBtn.onclick = function() {	
	// 	modal.style.display = 'none';
	// }

}