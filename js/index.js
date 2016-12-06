	
$(document).ready(function(){
	// 获得回到顶部按钮
	var back = $('#back');
	// 获得导航条对象
	var nav = $('.nav-wrap');
	// 导航条的高度
	var navHeight= nav.outerHeight();
	// 导航条相对于网页原点的位置
	var navPos = nav.offset().top;

	/*回到顶部按钮单击*/
	back.click(function(event) {
		
		$('html,body').animate({scrollTop:0}, 1000);

	});
	
	/*
		滚动条事件
	*/
	$(window).scroll(function(event) {
		
		/*
			动态显示隐藏回到顶部按钮
		*/
		// 滚动条卷去的大小
		var sTop = $(window).scrollTop();

		// 超过200像素
		if (sTop >= 210) {
			back.fadeIn('normal');
		} else {
			back.fadeOut('normal');
		}
	});
	/*
		滚动条事件
	*/
	$(window).scroll(function(event) {
		// 滚动条卷去的大小
		var sTop = $(window).scrollTop();
		/*
			动态设置导航条固定
		*/ 
		if (sTop >= navPos ) {
			if (!nav.hasClass('fixed')){
				nav.addClass('fixed');
				$('#wrapper').css('margin-bottom',navHeight); //wrapper下方空出原始导航的高度，保证下方元素不会上移				
			}						
		} else {
			if (nav.hasClass('fixed')) {
				nav.removeClass('fixed');	
				$('#wrapper').css('margin-bottom',0);			
			}
		}
	});
	
	// 鼠标移上出现关闭提示
	$('#closeSide').mouseover(function(event) {
		$('.close_tip').show();

	});
	$('#closeSide').mouseout(function(event) {
		$('.close_tip').hide();
	});	
	
	// 单击关闭 关闭wrapper
	$('#closeSide').click(function(event) {
		$('#wrapper').hide();
		$('.nav-wrap').addClass('fixed');
		$('.main').css('top',navHeight);
		$(window).unbind('scroll');
		$('#openBtn').show();
		$('#back').show();
	});
	$('#openBtn').click(function(event) {
		$('#wrapper').show();
		$('#openBtn').hide();
		$('.nav-wrap').removeClass('fixed');
		$('.main').css('top','-31px');
		// $('#back').show();
	});
		
		$(window).scroll(function(event) {
			// 滚动条卷去的大小
			var sTop = $(window).scrollTop();
			/*
				动态设置导航条固定
			*/ 
			if (sTop >= navPos ) {
				if (!nav.hasClass('fixed')){
					nav.addClass('fixed');
					$('#wrapper').css('margin-bottom',navHeight); //wrapper下方空出原始导航的高度，保证下方元素不会上移				
				}						
			} else {
				if (nav.hasClass('fixed')) {
					nav.removeClass('fixed');	
					$('#wrapper').css('margin-bottom',0);			
				}
			}
		});	
	
	/*搜索框*/
	$('#btnSearch').click(function(event) {
		$('#searchInput').show('fast');
		});

	
	// 鼠标移上效果
	$('#item').mouseover(function(event) {
		$('#txt1').hide();
		$('#txt2').show();
		
	});
	$('#item').mouseout(function(event) {
		$('#txt1').show();
		$('#txt2').hide();		
	});
	$('#item1').mouseover(function(event) {
		$('#txt3').hide();
		$('#txt4').show();		
	});
	$('#item1').mouseout(function(event) {
		$('#txt3').show();
		$('#txt4').hide();		
	});
	$('#item2').mousemove(function(event) {
		$('#txt5').hide();
		$('#txt6').show();
		
	});
	$('#item2').mouseout(function(event) {
		$('#txt5').show();
		$('#txt6').hide();
	});
	$('#item3').mousemove(function(event) {
		$('#txt7').hide();
		$('#txt8').show();
		
	});
	$('#item3').mouseout(function(event) {
		$('#txt7').show();
		$('#txt8').hide();
	});
	$('#item4').mousemove(function(event) {
		$('#txt9').hide();
		$('#txt10').show();
		
	});
	$('#item4').mouseout(function(event) {
		$('#txt9').show();
		$('#txt10').hide();
	});
	$('#item5').mousemove(function(event) {
		$('#txt11').hide();
		$('#txt12').show();
		
	});
	$('#item5').mouseout(function(event) {
		$('#txt11').show();
		$('#txt12').hide();
	});
	
});