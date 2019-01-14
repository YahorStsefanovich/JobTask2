const countOfMsges = 10;
let textValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
    "                    Ab aliquid eaque esse expedita harum mollitia quam quod! Consequatur dolores fugit,\n" +
    "                    itaque minima odio pariatur, perferendis rem sapiente, sunt totam voluptas.";

const classArray = ["leftMessage", "rightMessage"];

window.onload = init;

function init() {

    let container = document.getElementById("mainContainer");
    for (let i = 0; i < countOfMsges; i++){
        let timeInMs = new Date(Date.now());
        let timeValue = `${timeInMs.getHours()}:${timeInMs.getMinutes() + i}`;
        let messageDiv = createDiv("message", "");

        let message = createDiv(classArray[Math.round(Math.random()*10)%2], "");
        let text = createP("", textValue);
        let time = createP("messageTime", timeValue);

        message.appendChild(text);
        message.appendChild(time);

        messageDiv.appendChild(message);

        container.appendChild(messageDiv);
    }

}

function createDiv(className, innerHTML) {
    let div = document.createElement("div");
    div.className = className;
    div.innerHTML = innerHTML;
    return div;
}

function createP(className, textValue){
    let p = document.createElement("p");
    if (className !== ""){
        p.className = className;
    }
    p.innerHTML = textValue;
    return p;
}




