$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#carmaximg").fadeTo(100, 0.1);
		$("#carmaximg div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#carmaximg").fadeTo(300, 1);
    }, 300); 
		
	});
});