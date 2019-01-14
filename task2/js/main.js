const timeValue = "15:47 PM";
const srcValue = "../resources/images/Ava.jpg";

window.onload = init;

function init() {
    for (let i = 0; i < 10; i++){
        document.getElementById("themes").appendChild(createMessage());
    }
}

function createMessage() {
    let row = createDiv("row", "");

    let avatar = createImg("avatar",srcValue);
    let avatarHref = createA("msgHref", "");
    avatarHref.appendChild(avatar);

    let itemMsg = createDiv("itemMsg", "");

    let namefMsg = createDiv("nameOfMsg", "");
    namefMsg.appendChild(createA("msgHref", "Theme of Message"));

    let descriptionOfMsg = createDiv("descriptionOfMsg", "");
    descriptionOfMsg.appendChild(createA("msgHref", "Description Of Message"));

    itemMsg.appendChild(namefMsg);
    itemMsg.appendChild(descriptionOfMsg);

    let time = createDiv("time", timeValue);

    row.appendChild(avatarHref);
    row.appendChild(itemMsg);
    row.appendChild(time);

    row.addEventListener("click", appendChilds);

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

function createA(className, text){
    let a = document.createElement("a");
    a.className = className;
    a.src = "#";
    a.innerHTML = text;
    return a;
}
