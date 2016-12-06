$(document).ready(function(){
    
    var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    //点击分页器切换
    paginationClickable :true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
    //切换效果
    effect : 'fade',
    //自动播放
    autoplay:5000,
    // 设置小手
    grabCursor:true,
    // 散列导航
    hashnav:true,
  })  

     $(".swiper-container").mouseenter(function(event) {
                $('#prev').fadeIn('100');
                $('#next').fadeIn('100');
    });

     $(".swiper-container").mouseleave(function(event) {
                $('#prev').fadeOut('100');
                $('#next').fadeOut('100');
    });


  }); 

 
 