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
const visual=$('#header_slogan>.visual_slide>li');
const visualCounter=visual.length;
let currentIndex=0;
setInterval(showNextSlide,3000)
var current=0,
    setIntervalId;

function showNextSlide(){
    let nextIndex=(currentIndex+1)%visualCounter;
    visual.eq(currentIndex).fadeOut();
    visual.eq(nextIndex).fadeIn();
    currentIndex=nextIndex;
}
/* ------------------
6. 페이저 추가
------------------ */
var pager=$('#header_slogan>.mv_pager>li')

// function pagerShow(){
//     visual.eq(this).fadeIn();
//     visual.eq(currentIndex).fadeOut();
// }

pager.click(function () {
	var tg = $(this);
	var i = tg.index();
	pager.removeClass("on");
	tg.addClass("on");
    visual.eq(i).fadeIn();
    visual.eq(current).fadeOut();
    console.log(i);
});
/* ------------------
7. 페이저 슬라이드함수
------------------ */
function move1(i) {
	if (current == i) return;
	var currentEl = visual.eq(current);
	var nextEl = visual.eq(i);
	currentEl.css("left", "0").stop().animate({ left: "-100%" }, 500);
	nextEl.css("left", "100%").stop().animate({ left: "0%" }, 500);
	current = i;
}