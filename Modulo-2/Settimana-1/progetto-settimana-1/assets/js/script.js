const header = document.querySelector("header")
const navButton = document.querySelector(".navbar button")

window.onscroll=function() {
    let top = window.scrollY;
    if (top >= 400) {
        header.classList.add("switchColor1");
        header.classList.remove("switchColor2");
        navButton.classList.add("switchColor3");
        navButton.classList.remove("switchColor4");
    }else{
     header.classList.remove("switchColor1");
     header.classList.add("switchColor2");
     navButton.classList.remove("switchColor3");
     navButton.classList.add("switchColor4");
}
}


