$(document).ready(function(e){
	//首页搜索焦点获取
	$('#txt').focus(function(){
		if($(this).val()=='请输入')
		{
			$(this).val('');
			$(this).removeClass('gray');
		}
	})
	$('#txt').blur(function(){
		if($('#txt').val()=='')
		{
			$('#txt').val('请输入');
			$('#txt').addClass('gray');
		}
	})
	//轮播图
	$('#banner ul li:eq(0)').show().siblings().hide();
	$('#sum span:eq(0)').addClass('red');
	var t;
	var len=$('#banner ul li').length;
	var i=0;
	function autoPlay(){
		t=setInterval(function(){
			$('#banner ul li').eq(i).show().siblings().hide();
			$('#sum span').eq(i).addClass('red').siblings().removeClass('red');
			i++;
			if(i>=len){
				i=0;	
			}
			},2000)
	}
	autoPlay();
	$('#banner').hover(function(){
		clearInterval(t);
		},function(){
		autoPlay();
		})
	$('#sum span').each(function(a, element) {
        $(this).click(function(){
			i=a;
			$('#banner ul li').eq(i).show().siblings().hide();
			$('#sum span').eq(i).addClass('red').siblings().removeClass('red');	
		})
    });
	//首页产品中心轮播
	var n=0;
	var time;
	var lens=$('#slider_box ul li').length;
	var ulWidth=221*lens;
	$('#slider_box ul').css('width:'+ulWidth+'px');
	function move(){
		time=setInterval(function(){
			$('#slider_box ul').animate({marginLeft:'-221px'},function(){
				$(this).css({'margin-left':0}).find('li:first').appendTo(this);	
			})
		},1000)
	}
	move();
	$('#slider').hover(function(){
		clearInterval(time);
		},function(){
			move();
			})
	$('#prev').click(function(){
		$('#slider_box ul').animate({marginLeft:'-221px'},function(){
				$(this).css({'margin-left':0}).find('li:first').appendTo(this);	
			})
	})
	$('#next').click(function(){
		$('#slider_box ul').css({'margin-left':'-221px'})
			$('#slider_box ul').animate({marginLeft:0}).find('li:last').prependTo('#slider_box ul');
	})
	//节点选择兼用ie
	$('.index_collaborate ul li:nth-child(6n+6)').css({'margin-right':0})
	//产品中心内容左边菜单
	$('#container_l_menu li ul:eq(0)').show();
	$('#container_l_menu li a').click(function(){
		$(this).siblings().show().parent().siblings().children('ul').hide();
		$(this).addClass('curse').parent().siblings().children('a').removeClass('curse');
	})
	//产品中心页内容右边图片展示节点选择
	$('.container_r ul li:nth-child(3n+3)').css({'margin-right':0})
	//产品详情页相框
	var leng=$('#center_slider_box_show ul li').length;
	var times;
	var ulW=145*leng;
	$('#center_slider_box_show ul').css({'width':+ulW+'px'});
	function autoMove(){
		times=setInterval(function(){
			$('#center_slider_box_show ul').animate({marginLeft:'-145px'},function(){
				$(this).css({'margin-left':0}).find('li:first').appendTo(this);
			})	
		},2000)
	}
	autoMove();
	$('#center_slider_box').hover(function(){
		clearInterval(times);
	},function(){
		autoMove();
	})
	$('#product_center_next').click(function(){
		$('#center_slider_box_show ul').animate({marginLeft:'-145px'},function(){
			$(this).css({'margin-left':0}).find('li:first').appendTo(this);	
			})
	})
	$('#product_center_prev').click(function(){
		$('#center_slider_box_show ul').css({'margin-left':'-145px'});
		$('#center_slider_box_show ul').animate({marginLeft:0}).find('li:last').prependTo('#center_slider_box_show ul');
	})
	//获取轮播下的li的索引
	$('#center_slider_box_show ul li').each(function(index, element) {
        $(this).click(function(){
			$('#big_pic img').attr('src','images/product_big_pic'+index+'.gif');
		})
    });
})