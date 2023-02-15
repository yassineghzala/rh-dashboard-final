let nav=document.querySelector(".nav");
window.onscroll=function gt() {
    if (window.scrollY>20) {
        nav.classList.add("bg-nav")
    }
    else {
        nav.classList.remove("bg-nav")
    }
}