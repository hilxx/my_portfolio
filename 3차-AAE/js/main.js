document.addEventListener("DOMContentLoaded",function(){
    let mainBanner = document.querySelector(".mainBanner");
    let banner = document.querySelector(".banner");
    let bannerLi = document.querySelectorAll(".banner>li");
    let pagerBtn = document.querySelectorAll(".pager>li");
    let leftBtn = document.querySelector(".left-arrow");
    let rightBtn = document.querySelector(".right-arrow");

    let showBanner = 0;
    let moveX;
    let liCount = bannerLi.length;
    let liWidth = bannerLi[0].offsetWidth;
    let firstObj = banner.children[0].cloneNode(true);
    let lastObj = banner.children[liCount-1].cloneNode(true);
    banner.append(firstObj);
    banner.insertBefore(lastObj,bannerLi[-1]);
    bannerLi = document.querySelectorAll(".banner>li");
    console.log(bannerLi);

    let itemCopy = bannerLi.length;
    banner.style.width = liWidth * itemCopy + "px";
    banner.style.left = -liWidth + "px";
    pagerBtn[0].classList.add("active");

    let moveSlide = () => {
        moveX = -liWidth * showBanner;
        banner.style.transition = "0.5s";
        banner.style.marginLeft = moveX + "px";

        for(page of pagerBtn){
            page.classList.remove("active");
        }
        if(showBanner == itemCopy -2){
            pagerBtn[0].classList.add("active");
        }
        else if(showBanner == -1){
            pagerBtn[liCount-1].classList.add("active");
        }
        else{
            pagerBtn[showBanner].classList.add("active");
        }
    }

    rightBtn.addEventListener("click", function(e){
        e.preventDefault();
        showBanner++;
        moveSlide();

        if(showBanner == liCount){
            setTimeout(function(){
                showBanner = 0;
                banner.style.transition = "0s";
                banner.style.marginLeft = "0px";
            },500);
        }
    })

    leftBtn.addEventListener("click",function(e){
        e.preventDefault();
        showBanner--;
        moveSlide();
        if(showBanner == -1){
            setTimeout(function(){
                showBanner = liCount-1;
                banner.style.transition = "0s";
                moveX = -liWidth * showBanner;
                banner.style.marginLeft = `${moveX}px`;
            },500)
        }
    })

    pagerBtn.forEach((pager, index) => {
        pager.addEventListener("click",function(){
            showBanner = index;
            moveSlide();
        })
    })

    let timer;
    function autoSlide(){
        timer = setInterval(()=>{
            rightBtn.click();
        },3000);
    }
    autoSlide();

    mainBanner.addEventListener("mouseover",function(){
        clearInterval(timer);
    })
    mainBanner.addEventListener("mouseout",autoSlide);

    // new-open
        let item = document.querySelector(".item-list"); //banner
        let itemLi = document.querySelectorAll(".item-list>li");
        let leftArr = document.querySelector(".left-arr");
        let rightArr = document.querySelector(".right-arr");
    
        let showSlide = 0;
        let show = 5;
        // let moveX = 0;
        let itemLiCount = itemLi.length;
        let itemLiWidth = itemLi[0].offsetWidth;
        console.log(itemLiWidth);
    
        for(let i=0;i<show;i++){
            item.append(item.children[i].cloneNode(true));
        }
    
        let lastClone = item.children[itemLiCount-1].cloneNode(true);
        item.prepend(lastClone);
    
        itemLi = document.querySelectorAll(".item-list>li");
        let itemlistCopy = itemLi.length;
    
        console.log(itemLi);
        console.log(itemCopy);
    
        item.style.width = (itemLiWidth*itemlistCopy)/show + "px";
        item.style.left = -itemLiWidth/show + "px";
    
        let itemMoveSlide = () => {
            moveX = (-itemLiWidth*showSlide)/show;
            item.style.transition = "0.5s";
            item.style.marginLeft = moveX + "px";
        }
    
        rightArr.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("rrr");
            showSlide++;
            itemMoveSlide();
            if(showSlide == itemLiCount){
                setTimeout(function(){
                    showSlide = 0;
                    item.style.transition = "0s";
                    item.style.marginLeft = "0px";
                },500)
            }
        })
    
        leftArr.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("lll");
            showSlide--;
            itemMoveSlide();
            if(showSlide == -1){
                setTimeout(function(){
                    showSlide = itemLiCount -1;
                    item.style.transition = "0s";
                    moveX = (-itemLiWidth/show)*showSlide;
                    item.style.marginLeft = `${moveX}px`;
                },500)
            }
        })
    })