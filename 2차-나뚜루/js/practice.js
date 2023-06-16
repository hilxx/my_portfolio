document.addEventListener("DOMContentLoaded", function () {
    //rightnav
    var cart = document.querySelector(".cart");
    var helpBtn = document.querySelector(".helpBtn");
    var iconCart = document.querySelector(".iconCart");
    var iHelp = document.querySelector(".iHelp");

    cart.addEventListener("mouseover", () => {
        iconCart.src = "./images/svg/myicon_cart(yellow).svg"
    })
    cart.addEventListener("mouseout", () => {
        iconCart.src = "./images/svg/myicon_cart(white).svg"
    })

    helpBtn.addEventListener("mouseover", () => {
        iHelp.src = "./images/svg/iMenu(yellow).svg"
    })
    helpBtn.addEventListener("mouseout", () => {
        iHelp.src = "./images/svg/iMenu.svg"
    })

    //nav
    let menuWrap = document.querySelector(".menuWrap");
    let hamBtn = document.querySelector(".re-ham");
    let iHam = document.querySelector(".re-iHam");
    let reMenu = document.querySelectorAll(".re-menu>li");
    let depth = document.querySelectorAll(".re-menu>li>.depth2");

    hamBtn.addEventListener("click", () => {
        console.log("dfdfs")
        if (iHam.src.includes('myicon_close')) {
            iHam.src = "./images/svg/myicon_hamburger.svg";
            menuWrap.classList.remove("activeMenu");
        } else {
            iHam.src = "./images/svg/myicon_close(white).svg";
            menuWrap.classList.add("activeMenu");
        }
    })

    reMenu.forEach((nav, index) => {
        nav.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("sdfsdsd");
            // nav.classList.toggle("on");
            // nav.previousElementSibling.classList.remove("on");
            // nav.nextElementSibling.classList.remove("on");
            let liHeight = nav.offsetHeight;
            // let liHeight = nav.clientHeight;
            console.log(liHeight);
            let depthHeight = nav.querySelector(".depth2").offsetHeight;
            // let depthHeight = nav.querySelector(".depth2").clientHeight;
            console.log(depthHeight);
            for (i = 0; i < reMenu.length; i++) {
                if (i !== index) {
                    // depth[i].classList.remove("on");
                    reMenu[i].classList.remove("on");
                    reMenu[i].removeAttribute("style");
                }
            }
            // reMenu[index].classList.toggle("on");
            if (nav.hasAttribute("style")) {
                nav.classList.remove("on");
                nav.removeAttribute("style");
            }
            else {
                nav.style.height = liHeight + depthHeight + "px";
                nav.classList.add("on");
            }

            // nav.style.height = liHeight + depthHeight + "px";
            // nav.classList.toggle("on");
        })
    })

    //mainBanner fade
    let pagerLi = document.querySelectorAll('.pagerItem');
    let bannerLi = document.querySelectorAll('.banner');

    let mainBanner = 0;

    function fadeBanner(index) {
        pagerLi.forEach((list) => list.classList.remove('active'));
        bannerLi.forEach((list) => list.classList.remove('active'));

        pagerLi[index].classList.add('active');
        bannerLi[index].classList.add('active');
    }

    pagerLi.forEach((list, index) => {
        list.addEventListener("click", () => {
            fadeBanner(index);
            mainBanner = index;
        });
    });

    fadeBanner(0);

    setInterval(() => {
        bannerLi[mainBanner].classList.remove('active');
        pagerLi[mainBanner].classList.remove('active');

        mainBanner = (mainBanner + 1) % bannerLi.length;

        bannerLi[mainBanner].classList.add('active');
        pagerLi[mainBanner].classList.add('active');
    }, 5000);


    //products
    var prdLi = document.querySelectorAll(".bgWrap>li"); //li
    var newBg = document.querySelector(".new");
    var btn = document.querySelectorAll(".btn");
    var btnAct = document.querySelector(".newActive");
    var midImg = document.querySelectorAll(".middle-img>li");
    var rBox = document.querySelectorAll(".rightBox");

    btn.forEach((button, index) => {
        button.addEventListener("click", () => {
            prdLi.forEach(image => image.classList.remove("active"));
            prdLi[index].classList.add("active");

            newBg.style.display = "none";

            midImg.forEach(mid => mid.classList.remove("active"));
            midImg[index].classList.add("active");

            Array.from(rBox).forEach(box => box.classList.remove("active"));
            rBox[index].classList.add("active");
            btnAct.classList.remove("newActive");
        })
    })

    //vegan => 적용하면 왜 div 하나에만 적용? => forEach적용
    const veganSections = Array.from(document.querySelectorAll('.veganContents>div'))

    function src() {
        let wWidth = window.innerWidth;
        veganSections.forEach(contents => {
            let veganText = contents.querySelectorAll(".veganText")[0];
            let veganImg = contents.querySelectorAll(".veganImg")[0];

            if (wWidth > 767) {
                window.addEventListener("scroll", () => {
                    let posY = this.scrollY;
                    console.log(posY);

                    if (posY < 1930) {
                        veganText.style.opacity = 0;
                    }
                    if (posY >= 1930) {
                        veganText.style.opacity = 1;
                    }
                    if (posY < 2130) {
                        veganImg.style.opacity = 0;
                    }
                    if (posY >= 2130) {
                        veganImg.style.opacity = 1;
                    }
                })
            }

            else {
                window.addEventListener("scroll", () => {
                    let posY = this.scrollY;
                    console.log(posY);

                    if (posY < 2150) {
                        veganText.style.opacity = 0;
                    }
                    if (posY >= 2150) {
                        veganText.style.opacity = 1;
                    }
                    if (posY < 2300) {
                        veganImg.style.opacity = 0;
                    }
                    if (posY >= 2300) {
                        veganImg.style.opacity = 1;
                    }
                })
            }
        })
    }
    src();

    //vegan drag
    //1. 선택자
    let dragBanner = document.querySelector(".veganContents");
    //2. 변수
    let isDown = false;
    let startX;
    let scrollLeft;
 
    //3-1. dragStart 함수
    function dragStart(e) {
        console.log("start");
        isDown = true;
        startX = e.clientX || e.touches[0].clientX;
        scrollLeft = dragBanner.scrollLeft;
        e.preventDefault();
    }
    //3-1. dragEnd 함수
    function dragEnd(e) {
        console.log("end");
        isDown = false;
    }
 
    //4. slideMove 함수
    function slideMove(e) {
        console.log("slide");
        if (!isDown) return;
        e.preventDefault();
        console.log(e.clientX, dragBanner.offsetLeft);
 
    //드래그로 이동할 거리
        let posX = (e.clientX || e.touches[0].clientX) - dragBanner.offsetLeft;
        console.log(posX);
 
        let move = posX - startX;
        console.log(move);
        console.log(`s: ${scrollLeft}`);
        dragBanner.scrollLeft = scrollLeft - move;
    }
 
    //3.
    dragBanner.addEventListener("mousedown", dragStart);
    dragBanner.addEventListener("touchstart", dragStart);
    dragBanner.addEventListener("mouseup", dragEnd);
    dragBanner.addEventListener("touchend", dragEnd);
    dragBanner.addEventListener("mousemove", slideMove);
    dragBanner.addEventListener("touchmove", slideMove);
})