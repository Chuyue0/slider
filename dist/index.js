var $key=0,
	speed=800;
$("#right").on('click', function(event) {
	auto();
});
$("#left").on('click', function(event) {
	$("#box ul li").eq($key).stop().fadeOut(speed);
	$key--;
	if($key<0){
		$key=4;
	}
	$("#box ul li").eq($key).stop().fadeIn(speed);
	$("#box ol li").eq($key).addClass('on').siblings().removeClass('on');
});
var timer=setInterval(auto, 5000);
function auto(){
	$("#box ul li").eq($key).stop().fadeOut(speed);
	$key++;
	if($key>4){
		$key=0;
	}
	$("#box ul li").eq($key).stop().fadeIn(speed);
	$("#box ol li").eq($key).addClass('on').siblings().removeClass('on');
}
$("#box").on({
	mouseenter:function(){
		clearInterval(timer);
	},
	mouseleave:function(){
		clearInterval(timer);
		timer=setInterval(auto, 5000);
	}
});
$("#box ol li").on('click', function(event) {
	$("#box ul li").eq($key).stop().fadeOut(speed);
	$key=$(this).index();
	$("#box ul li").eq($key).stop().fadeIn(speed);
	$("#box ol li").eq($key).addClass('on').siblings().removeClass('on');
	$("#box ul li").eq($key).stop().fadeIn(speed);
});