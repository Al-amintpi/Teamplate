 $(document).ready(function(){
 	$('.menubtn').click(function(){
 		$('.menu').slideToggle(1000);
 	});

	 $('.team-member').owlCarousel({
		items:2,
		nav:true,
		dots:false,
		loop:true,
		responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
           
        },
        1000:{
            items:2,
             
        }
    }
	});

	 $('.menu ul li a').click(function(){
	 	var value = $(this).attr('href');
	 	$('html, body').animate({
	 		scrollTop:$(value).offset().top
	 	}, 1000)
	 	return false;
	 });

	 $('.scrollbtn').click(function(){
	 	$('body, html').animate({
	 		scrollTop:0
	 	},1000);
	 	return false;
	 });
 });

 $(window).scroll(function(){
 	var scrollValue = $(this).scrollTop();
 	$('.scrollbtn').text(scrollValue);
 	if(scrollValue>200){
 		$('.scrollbtn').show();
 	}else{
 		$('.scrollbtn').hide();
 	}
 });