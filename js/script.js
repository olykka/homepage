{
    const welcome = () => {
        console.log("Cześć i przepraszam dopiero zaczynam");
    }


    const onChangeBackgroundClick = () => {
        footer.classList.toggle("footer--dark");
        themeName.innerText = footer.classList.contains("footer--dark") ? "musztardowy" : "różowy";
    };

        


    welcome();
    const themeName = document.querySelector(".themeName");

    const article__changeBackgroundButton = document.querySelector(".article__changeBackgroundButton");
    const footer = document.querySelector(".footer");
    

    article__changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);
}

const header__buttonRemoveHeader = document.querySelector(".header__buttonRemoveHeader");
const header__header = document.querySelector(".header__header");

header__buttonRemoveHeader.addEventListener("click", () => {
    header__header.remove();
});


