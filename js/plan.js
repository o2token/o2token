$(function(){
	
	$(".moreImg").click(function(){
		$(".menu_mb").css("display","block");
		$(".menu_mb").animate({
			left:"0",
			opacity:"1",
		})
	})
	
	$(".closeImg").click(function(){
		$(".menu_mb").animate({
			left:"100%",
			opacity:"0.5",
		})
	})
	
	$("#header .logo").click(function(){
		location.href = 'http://o2token.io/';
	})
	
	
	$("#footer .footerDiv .footer_l .fotImg").hover(function(){
		$("#footer .footerDiv .footer_l .ewmImg").css("display","block");
	},function(){
		$("#footer .footerDiv .footer_l .ewmImg").css("display","none");
	})
})
