$(function(){
	new WOW().init();
	




	/****** Start NavBar ******/
	
	$(window).scroll(function () {
		
		if($(this).scrollTop() > 150) {
			
			
			$(".header").addClass("Headerfixed")
			
			
		} else {
			
			$(".header").removeClass("Headerfixed")
			
		}
		

		
		
	});

	$(window).scroll(function() {
	    var top_of_element = $(".slider").offset().top;
	    var bottom_of_element = $(".slider").offset().top + $(".slider").outerHeight();
	    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
	    var top_of_screen = $(window).scrollTop() + 400;
	
	    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
	        
	        $(".fixedMenu").addClass("activeColor");
	        
	        
	    } else {

	        $(".fixedMenu").removeClass("activeColor");
	        
	    }
	});

	/****** End NavBar ******/

	$(".openMenu").click(function () {
		
		$("body").addClass("overflowH");
		$(".menuMobile").fadeIn();
		$(".transformPage,.menuMobile .menuContent").addClass("active");
		
	});
	

	$(".closeX,.BgClose,.menuMobile .menuContent .menuRes li a,.menuMobile .menuContent .btnHeader").click(function () {
		
		$("body").removeClass("overflowH");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});

	$.scrollIt({topOffset:0});
	
	
	  var owlProjects = $('#owlProjects');
	 
	  owlProjects.owlCarousel({
	      
	      items : 3, //10 items above 1000px browser width
	      itemsDesktop : [1200,3], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,2], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
	
	
	  var owlClients = $('#owlClients');
	 
	  owlClients.owlCarousel({
	      
	      items : 6, //10 items above 1000px browser width
	      itemsDesktop : [1200,5], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,4], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:true,
	      navigation:false,
	      autoPlay:true,
	  });
	
	  var blog = $('#blog');
	 
	  blog.owlCarousel({
	      
	      items : 3, //10 items above 1000px browser width
	      itemsDesktop : [1200,3], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,2], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
	  
	  
  	$(".formOrder .form .selectStyle .titleSelect,.formOrder .form .selectStyle .icon").click(function() {
  		
  		
  		var idParent = $(this).parent().attr("id");
  		$(".formOrder .form .selectStyle .selectList").not($(".formOrder .form ."+idParent)).slideUp();
  		
  		
  		$(".formOrder .form ."+idParent).slideToggle();
  		
  	});
  	
	$('body,html').on('click', function(e) {
		var container = $(".formOrder .form .selectStyle .titleSelect,.formOrder .form .selectStyle .selectList,.formOrder .form .selectStyle .icon"),
		Sub = $(".selectList");
		

	    if( !$(e.target).is(container)  ){
	        Sub.slideUp();
	    }
	

	});
  	
  		/****** start nice scroll ******/
	
	$(".formOrder .form .selectStyle .selectList").niceScroll({
	    cursorborderradius: 10,
		scrollspeed: 60,
		mousescrollstep: 38,
		cursorwidth: 4,
		cursorborder: 0,
		railalign:"left",
		cursorcolor: '#cacaca'
		
		
    });
    
	/****** End nice scroll ******/
	
	$(".formOrder .form .selectStyle .selectList li span").click(function() {
		
		
		
		$(this).parent().toggleClass("active").siblings().removeClass("active");
		
		var myVal = $(this).attr("value");
		var myId = $(this).attr("idselect");
				
		if ($(this).parent().hasClass("active")) {
		    
			$(".formOrder .form #" + myId + " .titleSelect").text(myVal);
			
			$(".formOrder .form #" + myId + " .inputHidden").attr("value",myVal);
			
		    
		} else {
			var myValText = $(".formOrder .form #" + myId + " .titleSelect").attr("value");
			$(".formOrder .form #" + myId + " .titleSelect").text(myValText);
			
			$(".formOrder .form #" + myId + " .inputHidden").attr("value","");
			
		}
		

		
		
	});
	
	var x = $(".formOrder .form #num1 .numb").val();
	
    $(".formOrder .form #num1 i.plus").click(function () {
    	x++;
    	$(".formOrder .form #num1 .numb").text(x);
    	$(".formOrder .form #num1 .inputHidden").val(x);
    });
    $(".formOrder .form #num1 i.minus").click(function () {
		
		if(x > 0) {
			x--;
			var $this = $(".formOrder .form #num1 .numb");
			$(".formOrder .form #num1 .numb").text(x);
			$(".formOrder .form #num1 .inputHidden").val(x);
		}
    });
	
	
	var x2 = $(".formOrder .form #num2 .numb").val();
	
    $(".formOrder .form #num2 i.plus").click(function () {
    	x2++;
    	$(".formOrder .form #num2 .numb").text(x2);
    	$(".formOrder .form #num2 .inputHidden").val(x2);
    });
    $(".formOrder .form #num2 i.minus").click(function () {
		
		if(x2 > 0) {
			x2--;
			var $this = $(".formOrder .form #num2 .numb");
			$(".formOrder .form #num2 .numb").text(x2);
			$(".formOrder .form #num2 .inputHidden").val(x2);
		}
    });
	
	
	$( ".datepicker" ).datepicker();
	

    $(".CallMenu > ul > li > a").click(function () {
        $(this).toggleClass("active");
        $(this).parent().children("ul").slideToggle();
        return false;
    });
    

	$(".openShare").click(function () {
		$(this).siblings().slideToggle()
	})
	  
	$('body,html').on('click', function(e) {
		var container = $(".openShare,.listSocial"),
		Sub = $(".listSocial");
		

	    if( !$(e.target).is(container)  ){
	        Sub.slideUp();
	    }
	

	});
    
	
	
});
