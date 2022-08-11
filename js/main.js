$(document).ready(function(){
 	$('.carousel2').owlCarousel({
	        loop:true,
	        margin:10,
	        nav:false,
	      	autoplay:true,
	        dots: true,
	        smartSpeed:1500,
	        autoplayTimeout:4000,
	        responsive:{
	            0:{
	                items:1
	            },
	            600:{
	                items:1
	            },
	            1000:{
	                items:1
	            }
	        }
    });


 	$('.carousel3').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
	dots: true,
	smartSpeed:1500,
	autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
 	$('.carousel5').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
	dots: true,
	smartSpeed:1500,
	autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

$('.carousel7').owlCarousel({
loop:true,
    margin:10,
    nav:false,
    autoplay:true,
	dots: true,
	smartSpeed:1500,
	autoplayTimeout:3000,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:3
			        },
			        1000:{
			            items:3
			        }
			    }
});
	$(".carousel8").owlCarousel({
		
    	
    smartSpeed: 2000,
      loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayHoverPause:true,
    center: true,
    dots:true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3,
            animateIn: 'linear',
    	animateOut: 'linear',
        },
        1000:{
            items:3,
            animateIn: 'linear',
    	animateOut: 'linear',
        }
    }
  });

});