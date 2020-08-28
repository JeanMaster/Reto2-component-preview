const showButon = document.querySelector("body > main > section > section > figure.main-share-icon")
const hideButon = document.querySelector("#share-tooltip > figure")
showButon.addEventListener("click", addclass)
hideButon.addEventListener("click", removeclass)

function addclass() {
    
    let share = document.getElementById("share-tooltip");
    share.classList.remove("hide");;
    document.querySelector("#share").src="./images/icon-share-white.svg"
    showButon.style.backgroundColor ="hsl(217, 19%, 35%)";
    showButon.addEventListener("click", removeclass)


}

function removeclass() {
    let share = document.getElementById("share-tooltip");
    share.classList.add("hide");
    document.querySelector("#share").src="./images/icon-share.svg";
    showButon.style.backgroundColor ="hsl(210, 46%, 95%)";
    showButon.removeEventListener("click", removeclass);

}


// console.log(shareButon)