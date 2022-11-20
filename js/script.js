{
    const welcome = () => {
        console.log("Cześć i przepraszam dopiero zaczynam");
    }


    const onChangeBacgroundClick = () => {
        footer.classList.toggle("footer--dark");

        if (footer.classList.contains("footer--dark")) {
            themeName.innerText = "musztardowy";
        } else {
            themeName.innerText = "różowy";
        }
    };

    welcome();

    const article__changeBackgroundButton = document.querySelector(".article__changeBackgroundButton");
    const footer = document.querySelector(".footer");
    const themeName = document.querySelector(".themeName");

    article__changeBackgroundButton.addEventListener("click", onChangeBacgroundClick);
}

const header__buttonRemoveHeader = document.querySelector(".header__buttonRemoveHeader");
const header = document.querySelector(".header");

header__buttonRemoveHeader.addEventListener("click", () => {
    header.remove();
});




{
    const zmienna = 6;
    console.log(zmienna);

}

