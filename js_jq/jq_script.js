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

/* 추천 검색어 autocomplete */
$('#search_txt').autocomplete({source:recommend});
