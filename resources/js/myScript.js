$(document).ready(function(){
/////////////////////////////////////////////////////////////////////////////////////Scroll Functions with the navigation

$(".jsClickMore").click(function(){
  $("html, body").animate({scrollTop: $(".jsScrollMore").offset().top}, 1000);
});

$(".jsClickHow").click(function(){
  $("html, body").animate({scrollTop: $(".jsScrollHow").offset().top}, 1000);
});

$(".jsClickAdd").click(function(){
  $("html, body").animate({scrollTop: $(".jsScrollAdd").offset().top}, 1000);
});

$(".jsClickContact").click(function(){
  $("html, body").animate({scrollTop: $(".jsScrollContact").offset().top}, 1000);
});



/////////////////////////////////////////////////////////////////////////////////////Sticky Navigation

var mn = $(".stickyNav");

$(window).scroll(function(){
  if( $(this).scrollTop() > 800 ){
    mn.addClass(".rowScrolled");

  } else{
    mn.removeClass(".rowScrolled");
  }
});
});
