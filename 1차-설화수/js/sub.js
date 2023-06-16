$(function () {
    // ham-btn
    $(".ham-btn").on("click",function(){
        $("#re-nav").stop().animate({
            "right":0
        },700);
        $("nav").stop().animate({
            "right":0
        },500);
    })
    $(".close-btn").on("click",function(){
        $("#re-nav").stop().animate({
            "right":"-100%"
        },700);
        $("nav").stop().animate({
            "right":"-100%"
        },0);
        $(".nav-list>li").removeClass("active").find(".depth3").stop().slideUp(700);
    })
    $(".nav-list>li").on("click",function(){
        $(this).toggleClass("active").find(".depth3").stop().slideToggle(500);
        $(this).siblings().removeClass("active").find(".depth3").stop().slideUp(500);
    })
})