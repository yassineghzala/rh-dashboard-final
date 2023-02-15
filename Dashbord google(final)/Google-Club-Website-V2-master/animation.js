let section = document.querySelector(".anim");
let divs=document.querySelectorAll("#about-p div div");
let nav=document.querySelector(".nav"); 
let depart =document.querySelector(".depart-c");
let cards=document.querySelectorAll(".depart-c div")
let rectred=document.querySelectorAll(".rect");
window.onscroll=function() {
    if (window.scrollY>=section.offsetTop-400) {
        divs.forEach((div) => {
            div.classList.add("show");
        })
    }
    else {
        divs.forEach((div)=> {
            div.classList.remove("show");
        })
    }
    if (window.scrollY>20) {
        nav.classList.add("bg-nav")
    }
    else {
        nav.classList.remove("bg-nav")
    }
    if (window.scrollY>=depart.offsetTop-1000) {
        cards.forEach((div) => {
            div.classList.add("motion")
        })
    }
    else {
        cards.forEach((div)=> {
            div.classList.remove("motion")
        })
    }
    if (window.scrollY>=0) {
        rectred.forEach((div) => {
            div.classList.add("show-rect")
        })
    }
    else {
        rectred.forEach((div)=> {
            div.classList.remove("show-rect")
        })
    }
}

    
