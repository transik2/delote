let btns = document.querySelectorAll(".portfolio-togglers button");
let serviceLinks = document.querySelectorAll(".portfolio-list a");

for (let b of btns) {
    b.onclick = function(){
        document.querySelector(".portfolio-togglers button.current").classList.remove("current");
        b.classList.add("current");
        let category = b.getAttribute("value");
        for (let l of serviceLinks) {
            if(l.getAttribute("category") == category || category == "all") {
                l.classList.remove("hidden");
            } 
            else {
                l.classList.add("hidden");
            }
        }
    }
}