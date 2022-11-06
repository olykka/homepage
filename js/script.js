console.log("Cześć i przepraszam dopiero zaczynam");

let header__buttonRemoveHeader = document.querySelector(".header__buttonRemoveHeader");
let header = document.querySelector(".header");

header__buttonRemoveHeader.addEventListener("click", () => {
    header.remove();
});


let article__changeBackgroundButton = document.querySelector(".article__changeBackgroundButton");
let footer = document.querySelector(".footer");
let themeName = document.querySelector(".themeName");

article__changeBackgroundButton.addEventListener("click", () => {
    footer.classList.toggle("footer--dark");

    if(footer.classList.contains("footer--dark")) {
        themeName.innerText = "musztardowy";
    } else {
        themeName.innerText = "różowy";
    }
});


