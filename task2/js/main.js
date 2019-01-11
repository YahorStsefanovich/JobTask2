const timeValue = "15:47 PM";
const srcValue = "../resources/images/Ava.jpg";

window.onload = init;

function init() {
    for (let i = 0; i < 10; i++){
        document.getElementById("mainContainer").appendChild(createMessage());
    }
}

function createMessage() {
    let row = createDiv("row", "");

    let avatar = createImg("avatar",srcValue);

    let itemMsg = createDiv("itemMsg", "");
    let namefMsg = createDiv("nameOfMsg", "Theme of Message");
    let descriptionOfMsg = createDiv("descriptionOfMsg", "Description Of Message");
    itemMsg.appendChild(namefMsg);
    itemMsg.appendChild(descriptionOfMsg);

    let time = createDiv("time", timeValue);

    row.appendChild(avatar);
    row.appendChild(itemMsg);
    row.appendChild(time);

    return row;
}

function createDiv(className, innerHTML) {
    let div = document.createElement("div");
    div.className = className;
    div.innerHTML = innerHTML;
    return div;
}

function createImg(className,src) {
    let img = document.createElement("img");
    img.className = className;
    img.src = src;
    return img;
}
