$(function(){
	
	var myChart1 = echarts.init(document.getElementById('pie1'));
	var myChart2 = echarts.init(document.getElementById('pie2'));
	var myChart3 = echarts.init(document.getElementById('chart3'));
	var myChart4 = echarts.init(document.getElementById('chart4'));
	
	var option1 = {
		title:{
			text:"Distribution Plan",
			textStyle:{
				color:'#6294B7'
			},
			left:"center"
		},
		tooltip: {
			trigger: 'item',
			formatter: "{b} {d}%"
		},
		legend: {
			x: 'center',
			y:"bottom",
			data: ['Public Offering', 'Initial Investors', 'Team', 'Project Protection','Marketing','Special Reserve'],
			align:'left',
			icon:'roundRect',
			textStyle:{
				color:'#6294B7'
			}
		},
		color:['#00B0F0','#0070C0','#386092','#5AB1EF','#5AB1EF','#5AB1EF'],
		series:[{
			type: 'pie',
			radius: ['35%','70%'],
			calculable : true,
			hoverAnimation : false,
			itemStyle: {
				normal: {
					label: {
						show: true,
						position: 'inner',
						formatter: '{d}%'
					},
					borderColor:"#fff",
					borderWidth:2
				},
				emphasis: {
					label: {
						show: true,
						textStyle: {
							fontSize: '14',
//								fontWeight: 'bold'
						}
					}
				}
			},
			data: [{
				value: 60,
				name: 'Public Offering'
			}, {
				value: 10,
				name: 'Initial Investors'
			}, {
				value: 10,
				name: 'Team'
			}, {
				value: 5,
				name: 'Project Protection'
			},{
				value: 5,
				name: 'Marketing'
			},{
				value: 10,
				name: 'Special Reserve'
			}]
		}]
	}
	
	
	
	var option2 = {
		title:{
			text:"Funding Plan",
//			subtext:"The use of raised fund in the O2 project mainly \n includes daily operations, technology development and business expansion",
			textStyle:{
				color:'#6294B7'
			},
			left:"center",
		},
		tooltip: {
			trigger: 'item',
			formatter: "{b} {d}%"
		},
		legend: {
			x: 'center',
			y:"bottom",
			data: ['Project Development', 'Marketing', 'Daily Operations','Other Costs'],
			align:'left',
			icon:'roundRect',
			width: 300,
			textStyle:{
				color:'#6294B7'
			}
		},
		color:['#00B0F0','#0070C0','#386092','#5AB1EF','#5AB1EF','#5AB1EF'],
		series:[{
			type: 'pie',
			radius: ['35%','70%'],
			calculable : true,
			hoverAnimation : false,
			itemStyle: {
				normal: {
					label: {
						show: true,
						position: 'inner',
						formatter: '{d}%'
					},
					borderColor:"#fff",
					borderWidth:2
				},
				emphasis: {
					label: {
						show: true,
						textStyle: {
							fontSize: '14',
//								fontWeight: 'bold'
						}
					}
				}
			},
			data: [{
				value: 50,
				name: 'Project Development'
			}, {
				value: 20,
				name: 'Marketing'
			}, {
				value: 20,
				name: 'Daily Operations'
			}, {
				value: 10,
				name: 'Other Costs'
			}]
		}]
	}
	
	
	myChart1.setOption(option1)
	myChart3.setOption(option1)
	
	myChart2.setOption(option2)
	myChart4.setOption(option2)
	
	
	
	$('.htmlDiv a[href*=#],area[href*=#]').click(function() {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var $target = $(this.hash);
	      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
	      if ($target.length) {
	        var targetOffset = $target.offset().top-50;
	       
	        $('html,body').animate({
	          scrollTop: targetOffset
	        },
	        1000);
	        return false;
	      }
	    }
  	});
  	
  	$('.mobDiv a[href*=#],area[href*=#]').click(function() {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var $target = $(this.hash);
	      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
	      if ($target.length) {
	        var targetOffset = $target.offset().top;
	       
	        $(".menu_mb").animate({
				left:"100%",
				opacity:"0.5",
			})
	        
	        $('html,body').animate({
	          scrollTop: targetOffset
	        },
	        1000);
	        
	        return false;
	      }
	    }
  	});
  	
  	$('.menu_mb a[href*=#],area[href*=#]').click(function() {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var $target = $(this.hash);
	      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
	      if ($target.length) {
	        var targetOffset = $target.offset().top;
	       
	        $(".menu_mb").animate({
				left:"100%",
				opacity:"0.5",
			})
	       
	        $('html,body').animate({
	          scrollTop: targetOffset
	        },
	        1000);
	        
	        return false;
	      }
	    }
  	});
  	
  	var swidth = $(".worldDiv ul li").outerWidth();
  	var indexs = $(".worldDiv ul li").length;
  	$(".worldDiv ul").css("width",indexs*swidth+"px")
  	//点击切换图片
  	var width = $(".worldDiv ul li").outerWidth();
  	var index = 0;
	time = setInterval(function(){
		
		if(index>=4){
			$(".worldDiv ul").css("left","0px");
			index=0
		}
		$(".worldDiv ul").css("left",-index*width+"px");
		$(".spanDiv span").eq(index).addClass("active").siblings().removeClass("active")
		index++;
	},2000)
  	
  	
  	$(".spanDiv span").click(function(){
  		
  		
  		$(this).addClass("active").siblings().removeClass("active")
//		var width = $(".worldDiv ul li").outerWidth();
  		
  		index = $(this).index();
  		
  		$(".worldDiv ul").css("left",-index*width+"px");
  		
  	
  	})
  	
  	
	$(".worldDiv ul li").hover(function(){
		clearInterval(time);
	},function(){
		time = setInterval(function(){
		
	  		if(index>=4){
	  			$(".worldDiv ul").css("left","0px");
	  			index=0
	  		}
	  		$(".worldDiv ul").css("left",-index*width+"px");
	  		$(".spanDiv span").eq(index).addClass("active").siblings().removeClass("active")
	  		index++;
	  	},2000)
	})
	
	var isImgLoop = 0;
	time2 = setInterval(function(){
		isImgLoop = isImgLoop-1000;
		$("#paper .contDiv").css("left",isImgLoop+"px");
		
		if(isImgLoop<-2000){
			$("#paper .contDiv").css("left","0px");
			console.log($("#paper .contDiv").css("left"));
			isImgLoop = 0;
		}
		if(isImgLoop>-1000){
			$("#paper .contDiv").css("left","-3000px");
		}
	},10000)


//	var mySwiper = new Swiper ('#bannerSwp', {
//		direction: 'vertical',
//  	loop: true,
//	})
	
	
	function anmationLoop(offset){
		var list = $("#paper .contDiv");
		var newLeft = parseInt(list.style.left) + offset;
		list.style.left = newLeft + 'px';
		if(newLeft<-3000){
		      list.style.left = -1000 + 'px';
		 }
		 if(newLeft>-1000){
		      list.style.left = -3000 + 'px';
		 }
	}
	
  
  	
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
	
	
	
	var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
    
    
    
    
    $(".languageSel").change(function(){
    	if($(this).val()=="E"){
    		location.href="index.html"
    	}else{
    		location.href="index_c.html"
    	}
    })
    
//  $(".playDiv .play_l").offset().top-$("body").scrollTop(); 
//  console.log($(".playDiv .play_l").offset().top-$("body").scrollTop())
    
//  $(".playLayer").css("top",$(".playDiv .play_l").offset().top-$("body").scrollTop())
    
    	$("#paper .newPayL").click(function(){
    		
			$("#videoDiv").attr("src","video/how.mp4")
			$(".playLayer").css("display","block");
			document.getElementById("videoDiv").play();
			$("html body").css("overflow","hidden");
//			$(".playImg").css("display","block");
		})
		
		$("#paper .newPayR").click(function(){
			$("#videoDiv").attr("src","video/why.mp4")
			$(".playLayer").css("display","block");
			document.getElementById("videoDiv").play();
			$("html body").css("overflow","hidden");
//			$(".playImg").css("display","block");
		})
		
		$(".playImg").click(function(){
			document.getElementById("videoDiv").play();
			$(".playImg").css("display","none");
		})
		
		$("#videoDiv").on("playing",function(){
			$(".playImg").css("display","none");
		})
		
		$(".autoBox_t h5").click(function(){
			document.getElementById("videoDiv").pause();
			$(".playLayer").css("display","none");
			$("html body").css("overflow","auto");
		})
		
		
		
		
		$("#whato2_mb .lImg").click(function(){
    		
			$("#mbVideo").attr("src","video/how.mp4")
			$("#mbPlay").css("display","block");
			document.getElementById("mbVideo").play();
			$("html body").css("overflow","hidden");
//			$(".playImg").css("display","block");
		})
		
		$("#whato2_mb .rImg").click(function(){
			$("#mbVideo").attr("src","video/why.mp4")
			$("#mbPlay").css("display","block");
			document.getElementById("mbVideo").play();
			$("html body").css("overflow","hidden");
//			$(".playImg").css("display","block");
		})
		
		$(".playImg").click(function(){
			document.getElementById("videoDiv").play();
			$(".playImg").css("display","none");
		})
		
		$("#videoDiv").on("playing",function(){
			$(".playImg").css("display","none");
		})
		
		$("#mbPlay h5").click(function(){
			document.getElementById("mbVideo").pause();
			$("#mbPlay").css("display","none");
			$("html body").css("overflow","auto");
		})
		
		
		
		$(".poster h5").click(function(){
			
			$(".poster").css("display","none");
		})
		
		
		$("#paper .loopDiv").click(function(){
			$(".poster").css("display","block");
		})
		
		
		$("#footer .footerDiv .footer_l .fotImg").hover(function(){
			$("#footer .footerDiv .footer_l .ewmImg").css("display","block");
		},function(){
			$("#footer .footerDiv .footer_l .ewmImg").css("display","none");
		})
		
		
		
		$(".poster .aDiv").click(function(){
			location.href ="index.html";
		})
		
		
		$("#header .logo").click(function(){
			location.href = 'http://o2token.io/';
		})
})
