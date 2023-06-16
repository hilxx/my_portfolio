$(function () {
    // search
    // $(".gnb>.search").on("click",function(){
    //     $(".search-wrap").stop().animate({
    //         "opacity":1
    //     },500)
    // })
    // $("form>close").on("click",function(){
    //         $(".search-wrap").stop().animate({
    //             "opacity":0
    //         },500)
    // })
    $(".gnb>.search").on("click",function(){
        $(".search-wrap").stop().slideDown(700)
    });
    $("form>.close").on("click",function(){
        $(".search-wrap").stop().slideUp(700)
    });
    // error가 안 뜨면 선택자를 잘못 선택한 것!

    // ham-btn
    // $(".ham-btn").on("click",function(){
    //     $("#re-nav").stop().animate({
    //         "right":0
    //     },700);
    //     $("nav").stop().animate({
    //         "right":0
    //     },500);
    // })
    $(".close-btn").on("click",function(){
        // $("#re-nav").stop().animate({
        //     "right":"-100%"
        // },700);
        // $("nav").stop().animate({
        //     "right":"-100%"
        // },0);
        $(".nav-list>li").removeClass("active").find(".depth3").stop().slideUp(700);
    })
    $(".nav-list>li").on("click",function(){
        $(this).toggleClass("active").find(".depth3").stop().slideToggle(500);
        $(this).siblings().removeClass("active").find(".depth3").stop().slideUp(500);
    })

    // mainBanner
    let sNum = 0;

    function fadeBanner(){
        $(".banner>li").eq(sNum).fadeIn(3000)
        .siblings().fadeOut(3000);
        $(".pager>li").eq(sNum).addClass("pager-act")
        .siblings().removeClass("pager-act");
    }
    //1. pager누르면 .pager-act활성화
    $(".pager>li").on("click", function () {
        sNum = $(this).index();
        console.log(sNum);
        fadeBanner();
    })

    var timer = setInterval(function(){
        if(sNum<3){
            sNum++;
        }
        else{
            sNum = 0;
        }
        fadeBanner();
    },3000)

    $(".mainBanner").on("mouseenter",function(){
        clearInterval(timer);
    });

    $(".mainBanner").on("mouseleave",function(){
        timer = setInterval(function(){
            if(sNum<3){
                sNum++;
            }
            else{
                sNum = 0;
            }
            fadeBanner();
        },3000);
    })

    //.best-seller
    $(function () {
        //배너를 이동시키기 위한 변수
        var slideLeft = 0;
        //가운데 오는 배너를 체크할 변수
        var centerBanner = 2;
        //복사전 배너 개수
        var liCount = $(".slide-list>li").length;
        //배너 한개 너비
        var liWidth = $(".slide-list>li").outerWidth();
        console.log(liWidth);
    
        //배너앞에 5개 복사해서 붙이기
        var first = $(".slide-list>li:lt(5)").clone();
        $(".slide-list").append(first);
    
        //복사 후 개수
        var copyCount = $(".slide-list>li").length;
        //부모 너비값 재조정
        var pWidth = 100 * copyCount / 5; //100 * 복사한배너개수 / 보여줄개수
        $('.slide-list').outerWidth(pWidth + "%"); //를 부모한테 +"%"붙여서 적용
    
        //초기 상태
        function init() {
            $('.slide-list>li').eq(centerBanner).find(".center").show();
            $(".slide-list>li").eq(centerBanner).find(".text-box>div").show();
        }
        init();
    
        function moveBanner(){
            $(".slide-list>li").find(".center").hide();
            $(".slide-list>li").find(".text-box>div").hide();
            $(".slide-list").stop().animate({
                "margin-left": -slideLeft * liWidth
            }, 500, function () {
                $(".slide-list>li").eq(centerBanner).find(".center").stop().fadeIn(500)
                $(".slide-list>li").eq(centerBanner).find(".text-box>div").stop().fadeIn(500)
            })
        }
        //.right-arrow
        $(".right").on("click", function () {
            if(slideLeft >= liCount){
                slideLeft = 0;
                centerBanner = 2;
                $(".slide-list").css("margin-left",0);
            }
            slideLeft++;
            centerBanner++;
            moveBanner();
        })
        //.left-arrow
        $(".left").on("click",function(){
            if(slideLeft == 0){
                slideLeft = liCount;
                centerBanner = liCount+2;
                $(".slide-list").css("margin-left",-liWidth*liCount);
            }
            slideLeft --;
            centerBanner --;
            moveBanner();
        })
    
        var proTimer = setInterval(function(){
            $(".right").trigger("click")
        },2000)
    
        //.best-seller에 마우스가 들어가면
        $(".best-seller").on("mouseenter",function(){
            clearInterval(proTimer);
        })
        //.best-seller에 마우스가 벗어나면
        $(".best-seller").on("mouseleave",function(){
            proTimer = setInterval(function(){
                $(".right").trigger("click")
            },2000) 
        })
    })


    //sns
     //0. window의 너비값 변수
     let wWidth;
     //1. 첫번째 보여지는 배너 체크하기
     let showBanner; //사용하겠다고 선언만! '= 0' 안 줘도 됨! (밑에 줌!)
     //2. 해상도에 따른 배너의 개수 ( 4 = showNum을 넣어도 됨!)
     let showNum = 5;
     //3. 배너 한 개의 너비값 -> 초기화 값에 필요함(init)
     // let snsWidth = $(".banner>li").outerWidth();
     let snsWidth; // 선언은 위에서 필요함!! , 밑에서 세팅!(init)
     //4. 복사 전 배너의 개수
     let snsLiCount = $(".sns-list>li").length;
     //5. 앞에 있는 5개를 복사하여 뒤에 붙이기
     // (보여지는 개수만큼 복사하기 = 5개)
     let obj = $(".sns-list>li:lt(5)").clone();
     $(".sns-list").append(obj);
     //6. 복사한 뒤 li 개수
     let copySnsCount = $(".sns-list>li").length;
     //7. 부모 너비 재설정
     let sns; // let sns = 100 * copyCount / 5;
     // $(".banner").outerWidth(sns+"%"); (밑에 쓰기!)
 
     //8. 부모 사이즈 변경 -> 함수로 만들기
     function init(){
         showBanner=0;
         $(".sns-list").css("margin-left",0);
        //  console.log(snsWidth);
         // window 너비값
         wWidth = $(window).innerWidth();
         if(wWidth>767){
             showNum = 5;
         }
         else{
             showNum = 2;
         }
         sns = copySnsCount*100/showNum;
         // 9. 767이하가 됐을 때 2개가 보여야 함= 부모 사이즈 변경
         $(".sns-list").outerWidth(sns+"%");
         // 부모 사이즈를 변경하고 li 너비값을 변경해야 옆으로 넘길 때 잘 감!!
         // css에 %줬어도, 사이즈를 받아올 때 px로 받아옴!
         //3. 배너 한 개의 너비값 -> 초기화 값에 필요함(init)
         snsWidth = $(".sns-list>li").outerWidth();
         // 여기 안에서 선언하면 이 함수에서만 사용 가능하기 때문에
         // 사용은 여기에서, 선언은 위에서!
     }
     init();
 
     //10. resize
     $(window).on("resize",function(){
         init();
     })
 
     //11. move sns 함수
     function snsBanner(){
         $(".sns-list").stop().animate({
             "margin-left": -showBanner*snsWidth
         },1000)};
 
     //12. right
     $(".right-arrow").on("click",function(){
         if(showBanner>=snsLiCount){
             showBanner = 0;
             $(".sns-list").css("margin-left",0)
         }
         showBanner++;
         snsBanner();
     })
     
     //12-1 re-arrow
     $(".re-arrow").on("click",function(){
        if(showBanner>=snsLiCount){
            showBanner = 0;
            $(".sns-list").css("margin-left",0)
        }
        showBanner++;
        snsBanner();
    })

     //13. left
     $(".left-arrow").on("click",function(){
        if(showBanner==0){
            showBanner = snsLiCount;
            $(".sns-list").css("margin-left", -snsLiWidth*showBanner);
        }
        showBanner--;
        snsBanner();
     })
})