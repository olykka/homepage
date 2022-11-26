{
    const welcome = () => {
        console.log("Cześć i przepraszam dopiero zaczynam");
    }
    const footer = document.querySelector(".footer");
    const themeName = document.querySelector(".themeName");
    const onChangeBackgroundClick = () => {
        footer.classList.toggle("footer--dark");
        themeName.innerText = footer.classList.contains("footer--dark") ? "musztardowy" : "różowy";
    };

    welcome();

    const article__changeBackgroundButton = document.querySelector(".article__changeBackgroundButton");


    article__changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);
}

const header__buttonRemoveHeader = document.querySelector(".header__buttonRemoveHeader");
const header__header = document.querySelector(".header__header");

header__buttonRemoveHeader.addEventListener("click", () => {
    header__header.remove();
});


