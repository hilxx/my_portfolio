$(function(){
    //event
    // var clock;
    // $(document).ready(function(){
    //     var clock;

    //     clock = $('.clock2').FlipClock({
    //         clockFace: 'DailyCounter',
	// 	    autoStart: false,
	// 	    callbacks: {
	// 	        stop: function() {
	// 	        	$('.message').html('The clock has stopped!')
	// 	        }
	// 	    }
    //     });
    //     clock.setTime(864000);
    //     // 2(2일)*24(하루)*60(1시간=60분)*60(1분=60초)
    //     clock.setCountdown(true);
    //     clock.start();
    // });

    var clock;
    $(document).ready(function(){
        var clock;

        clock = $('.clock2').FlipClock({
            clockFace: 'DailyCounter',
		    autoStart: false,
		    callbacks: {
		        stop: function() {
		        	$('.message').html('The clock has stopped!')
		        }
		    }
        });

        var targetDate = new Date("2023-06-05"); //디데이로 설정할 날짜
        var currentDate = new Date(); //현재날짜
        var timeDifference = targetDate.getTime() - currentDate.getTime(); // 남은 시간 계산
        var secondsDifference = Math.floor(timeDifference / 1000); //초 단위로 변환

        // clock.setTime(864000);
        // 2(2일)*24(하루)*60(1시간=60분)*60(1분=60초)
        clock.setTime(secondsDifference);
        clock.setCountdown(true);
        clock.start();
    });

    // vegan

    //let wWidth;
    // function scr(){
    //     wWidth = $(window).innerWidth();
    //     if(wWidth>767){
    //         $(window).on("scroll", function(){
    //             let posY = $(this).scrollTop();
    //             console.log(posY);
        
    //             if(posY<1930){
    //                 $(".veganText").stop().animate({
    //                     "opacity" : 0
    //                 },500)
    //             }
    //             if(posY>=1930){
    //                 $(".veganText").stop().animate({
    //                     "opacity":1
    //                 },500)
    //             }
    //             if(posY<2130){
    //                 $(".veganImg").stop().animate({
    //                     "opacity":0
    //                 },500);
    //             }
    //             if(posY>=2130){
    //                 $(".veganImg").stop().animate({
    //                     "opacity":1
    //                 },500);
    //             }
    //         })
    //     }
    //     else{
    //         $(window).on("scroll", function(){
    //             let posY = $(this).scrollTop();
    //             console.log(posY);
        
    //             if(posY<1800){
    //                 $(".veganText").stop().animate({
    //                     "opacity" : 0
    //                 },500)
    //             }
    //             if(posY>=1800){
    //                 $(".veganText").stop().animate({
    //                     "opacity":1
    //                 },500)
    //             }
    //             if(posY<2000){
    //                 $(".veganImg").stop().animate({
    //                     "opacity":0
    //                 },500);
    //             }
    //             if(posY>=2000){
    //                 $(".veganImg").stop().animate({
    //                     "opacity":1
    //                 },500);
    //             }
    //         })
    //     }
    // }

    // scr();

    // $(window).on("resize",function(){
    //     scr();
    // })
})