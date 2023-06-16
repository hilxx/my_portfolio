document.addEventListener("DOMContentLoaded",function(){
    console.log("sdf");
    let menuWrap = document.querySelector("nav");
    let menu = document.querySelector("#re-nav");
    let hamBtn = document.querySelector(".hamClose>a");
    function toggleMenu(e){
        console.log("sdf");
        if(hamBtn.classList.contains("on")){
            hamBtn.classList.remove("on");
            menu.classList.remove("activeMenu");
            menuWrap.classList.remove("activeMenu");
        }
        else{
            hamBtn.classList.add("on");
            menuWrap.classList.add("activeMenu");
            menu.classList.add("activeMenu");
        }
        e.preventDefault();
    }
    hamBtn.addEventListener("click",toggleMenu);
})