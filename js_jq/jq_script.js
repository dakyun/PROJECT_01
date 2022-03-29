const btt=$('#back_to_top');
$(window).scroll(function(){
    if($(window).scrollTop() > 150){
        btt.addClass('visible')
    }else{
        btt.removeClass('visible')
    }
})
btt.click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},400)
})

/* 모바일 버전 */
if(jQuery.browser.mobile==true){
    location.href="./mobile/"
}

/* 스티키 헤더 */
var $mainHeader=$('#header_nav'),
$window=$(window),
$divide=$mainHeader.outerHeight();

$window.scroll(function(){
    if($window.scrollTop()>$divide){
        if(!$mainHeader.hasClass('shrink')){
            $mainHeader.addClass('shrink')};
    }else{
        if($mainHeader.hasClass('shrink')){
            $mainHeader.removeClass('shrink')
        }
    }
});
/* gnb 호버 시 모달창 */
$(function(){
    const gnb=$('#gnb');
    gnb.mouseover(()=>{
        $('#blind').css('display','inline-block')
    })
    gnb.mouseout(()=>{
        $('#blind').css('display','none')
    })
});

/* main visual slide */

// var visualWrap = $("#header_slogan"),
// 	visual = visualWrap.find(".visual_slide>li"),
// 	visualCount = visual.length,
// 	pager = visualWrap.find(".mv_pager>li"),
//     playBtn = visualWrap.find(".play_btn"),
// 	stopBtn = visualWrap.find(".stop_btn"),
// 	current = 0,
// 	setIntervalId;

// let visualPos = visual.each(function (i) {
// 	$(this).css("left", i * 100 + "%");
// });

// timer();

// function timer() {
// 	setIntervalId = setInterval(function () {
// 		var prev = visual.eq(current);
// 		var prevpager = pager.eq(current);
// 		move(prev, 0, "-100%");
// 		prevpager.removeClass("on");
// 		current++;
// 		if (current == visual.length) {
// 			current = 0;
// 		}
// 		var next = visual.eq(current);
// 		var nextpager = pager.eq(current);
// 		move(next, "100%", "0%");
// 		nextpager.addClass("on");
// 		cnt(current);
// 	}, 4000);
// }

// function move(tg, start, end) {
// 	tg.css("left", start).stop().animate({ left: end }, 500);
// }

// pager.click(function () {
// 	var tg = $(this);
// 	var i = tg.index();
// 	pager.removeClass("on");
// 	tg.addClass("on");
// 	move1(i);
//     cnt(i);
// 	console.log(i);
// });
 
// function move1(i) {
// 	if (current == i) return;
// 	var currentEl = visual.eq(current);
// 	var nextEl = visual.eq(i);
// 	currentEl.css("left", "0").stop().animate({ left: "-100%" }, 500);
// 	nextEl.css("left", "100%").stop().animate({ left: "0%" }, 500);
// 	current = i;
// }

// stopBtn.click(function(){
// 	clearInterval(setIntervalId);
// 	stopBtn.removeClass('on');
// 	playBtn.addClass('on');
// })
// playBtn.click(function(){
// 	timer();
// 	playBtn.removeClass('on');
// 	stopBtn.addClass('on');
// })