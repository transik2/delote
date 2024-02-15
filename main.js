let menuOpenBtn = document.getElementById("menu-btn");
let menuCloseBtn = document.getElementById("close-menu-btn");
let menu = document.getElementById("sidebar-menu");

menuOpenBtn.onclick = function() {
    menu.classList.add("menu-opened");
    console.log("jdnjsdn");
}

menuCloseBtn.onclick = function() {
    menu.classList.remove("menu-opened");
}
