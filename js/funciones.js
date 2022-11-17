$(document).ready(function(){
  
  var altura=$('nav').offset().top;
  $(window).on('scroll', function(){
	if ($(window).scrollTop() > 50){
		$('nav').addClass('shrlink');


	  }else{
	  	$('nav').removeClass('shrlink');
	  	$('nav').addClass('top');
	  }
  });
  //----------------------------------------------menu
  $('#home').on('click',function(){
  	var position=0;
  	$('body, html').animate({
  		scrollTop:position + 'px'
  	}, 1000);
  	$('#home').addClass('bottom');
 	$('#analisis2').removeClass('bottom');
   	$('#grow1').removeClass('bottom');
   	$('#contacto1').removeClass('bottom');

  })
    $('#analisis').on('click',function(){
  	var position=$('#analisis2').offset().top;
  	$('body, html').animate({
  		scrollTop:position + 'px'
  	}, 1000);
  	$('#analisis').addClass('bottom');
  	

  })
      $('#grow').on('click',function(){
  	var position=$('#grow1').offset().top;
  	$('body, html').animate({
  		scrollTop:position + 'px'
  	}, 1000);
  	$('#grow').addClass('bottom');
  	

  })
        $('#contacto').on('click',function(){
  	var position= $('#contacto1').offset().top;
  	$('body, html').animate({
  		scrollTop:position + 'px'
  	}, 1000);
  	$('#contacto').addClass('bottom');
  	

  })
 
});